import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Facet, FacetConfig, FacetDataType, FacetFilterType, FacetIdentifierStrategy, FacetResultType} from './models';
import {MatChipSelectionChange} from '@angular/material/chips';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {MediaObserver} from '@angular/flex-layout';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {FACET_CONFIG} from './ngx-mat-facet.config';
import {VCRefInjector} from './misc/parent.helper';
import {v4 as uuidv4} from 'uuid';
import {FacetModalService} from './modals/facet-modal.service';
import {chipAnimation} from './ngx-mat-facet-search.animations';

// @dynamic
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-facet-search',
  templateUrl: 'ngx-mat-facet-search.component.html',
  styleUrls: ['./ngx-mat-facet-search.component.scss'],
  animations: [
    chipAnimation
  ]
})
export class NgxMatFacetSearchComponent implements OnInit, AfterViewInit {

  private injectorRef: VCRefInjector;

  constructor(@Inject(FACET_CONFIG) configuration: FacetConfig,
              public modal: FacetModalService,
              public media: MediaObserver,
              private vcRef: ViewContainerRef) {

    this.injectorRef = new VCRefInjector(this.vcRef.injector);
    this.searchUpdated = new EventEmitter<Facet[]>();
    this.reconfigure(configuration);

    this.searchUpdated.subscribe(facets => {
      this.loggingCallback('Facet(s) updated', facets);
    });
  }

  @Input() set source(facets: Facet[]) {
    this.sourceFacets = facets;

    this.selectedFacets = this.selectedFacets.filter(s => facets.some(f => f.name === s.name));
    this.availableFacets = facets.map(f => Object.assign({}, f)).filter(f => !this.selectedFacets.some(s => s.name === f.name));
    this.filteredFacets = this.availableFacets;
    this.emitSelectedEvent();
  }

  @Input() placeholder = 'Filter Table...';
  @Input() clearButtonText = 'Clear Filters';
  @Input() clearButtonEnabled = true;
  @Input() dateFormat = 'M/d/yyyy';

  @Input() tooltip: string | null = null;
  @Input() displayFilterIcon = true;
  @Input() facetWidth = '400px';
  @Input() facetHasBackdrop = true;
  @Input() confirmOnRemove = true;
  @Input() chipLabelsEnabled = true;
  @Input() identifier = null;

  @Output() searchUpdated: EventEmitter<Facet[]>;

  @ViewChild('filterInput') filterInput: ElementRef;
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) inputAutoComplete: MatAutocompleteTrigger;

  public selectedFacet: Facet;
  public selectedFacets: Facet[] = [];
  public availableFacets: Facet[] = [];
  public filteredFacets: Facet[] = [];
  public FacetDataType = FacetDataType;
  public FacetFilterType = FacetFilterType;
  public allowDebugClick = false;

  private sourceFacets: Facet[] = [];
  private timeoutHandler: any;
  private identifierStrategy: FacetIdentifierStrategy;

  private static getFixedURL(): string {
    return window.location.pathname.toString()
      .replace(/\s+/g, '-')
      .replace(/\//g, '-')
      .replace(/^-/g, '')
      .replace(/--/g, '-');
  }

  private loggingCallback: (...args) => void = () => {
  };

  ngOnInit() {
    if (!this.identifier) {
      this.generateIdentity();
    }

    this.updateAvailableFacets();
    this.selectedFacets = this.loadFromSessionStorage();
    this.updateSessionStorage();
    this.sourceFacets.filter(facet => facet && facet.values && Array.isArray(facet.values))
      .forEach(facet => this.selectedFacets.push(facet));
  }

  ngAfterViewInit() {
    fromEvent(this.filterInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged(),
        map(() => this.filterInput.nativeElement.value)
      ).subscribe((filterText) => {
      if (!!filterText && filterText.length > 0) {
        this.filteredFacets = this.availableFacets.filter(f => f.name.toLowerCase().includes(filterText.toLowerCase()));
      } else {
        this.filteredFacets = this.availableFacets;
      }
    });
  }

  chipSelected(event: MatChipSelectionChange, facet: Facet): void {
    if (event.selected && !facet.readonly) {
      const elementRef = event.source._elementRef.nativeElement;
      const bound = elementRef.parentElement.getBoundingClientRect();

      this.facetSelected(facet, {
        top: bound.height - 5,
        left: elementRef.offsetLeft - (bound.x + 4),
      }, true, elementRef.parentElement);
    }
  }

  autoCompleteSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedFacet: Facet = event.option.value;
    const elementRef = event.option._getHostElement().parentElement.getBoundingClientRect();
    const top = elementRef.top;
    const left = elementRef.left;

    this.facetSelected(selectedFacet, {
      top,
      left: (!this.media.isActive('xs') ? left : undefined)
    }, false, event.option._getHostElement());

  }

  facetSelected(facet: Facet, position: { top: number, left: number | undefined }, isUpdate: boolean, target): void {
    this.promptFacet(Object.assign({}, facet), position, isUpdate, target);
  }

  promptFacet(facet: Facet, position: { top: number, left: number | undefined }, isUpdate: boolean, target): void {
    this.filteredFacets = this.availableFacets;


    const facetDetailsModal = this.modal.open(FacetDetailsModalComponent, target, {
      data: facet,
      offsetY: position.top,
      offsetX: Math.abs(position.left),
      isUpdate
    });


    facetDetailsModal.beforeClosed().subscribe(() => {
      this.selectedFacet = undefined;
    });

    facetDetailsModal.afterClosed().subscribe(result => {
      if (result.type === FacetResultType.REMOVE) {
        this.removeFacet(result.data);
      } else if (result.type === FacetResultType.ADD) {
        this.addOrUpdateFacet(result.data);
      }
    });
  }

  addOrUpdateFacet(facet: Facet): void {
    const index = this.selectedFacets.findIndex(f => f.name === facet.name);
    if (index > -1) {
      this.selectedFacets[index] = facet;
    } else {
      this.selectedFacets.push(facet);
    }
    this.emitSelectedEvent();
    this.updateSessionStorage();
  }

  removeFacet(facet: Facet): boolean {
    if (!this.confirmOnRemove || (this.confirmOnRemove && confirm('Do you really want to remove "' + facet.labelText + '" filter?'))) {
      this.selectedFacets = this.selectedFacets.filter(f => f.name !== facet.name);
      this.emitSelectedEvent();
      this.updateSessionStorage();
      return true;
    }
    return false;
  }

  updateAvailableFacets(): void {
    this.availableFacets = this.sourceFacets.map(f => Object.assign({}, f)).filter(f => !this.selectedFacets.some(s => s.name === f.name));

    this.filteredFacets = this.availableFacets;
    this.clearSessionStorage();
  }

  reset(): void {
    this.selectedFacets = this.sourceFacets.filter(facet => facet.readonly === true);
    this.emitSelectedEvent();
    this.clearSessionStorage();
  }

  emitSelectedEvent(): void {
    this.updateAvailableFacets();
    this.searchUpdated.next(this.selectedFacets.map(facet => ({
        name: facet.name,
        labelText: facet.labelText,
        type: facet.type,
        values: facet.values.map(val => ({
            value: val.value,
            labelText: val.text,
            type: val.type,
            active: true
          })
        )
      })
      )
    );
  }

  displayFn(...args: any): string | undefined {
    return undefined;
  }

  focus(event) {
    event.stopPropagation();
    this.inputAutoComplete.openPanel();
  }

  /**
   * Update the identity of this Facet Search Component
   * This function does NOT reload/re-fetch previously saved facets from sessionStorage
   *
   * @param identifier - new identifier for the component
   */
  identify(identifier: string) {
    this.loggingCallback(`Identifying facet with ID: ${identifier}`);
    if (!!!identifier || identifier.length === 0 || identifier === '-') {
      this.identifier = 'default-facet';
    } else {
      this.identifier = `${identifier}-facet`;
    }
  }

  /**
   * Returns the FacetIdentifierStrategy currently being used for identity generation
   */
  getIdentifierStrategy(): FacetIdentifierStrategy {
    return this.identifierStrategy;
  }

  /**
   * Clears previously saved facets for this specific component
   */
  clearSessionStorage() {
    if (!this.identifier) {
      return;
    }

    sessionStorage.removeItem(this.identifier);
  }

  /**
   * Prints this component's identity to console
   */
  printIdentity() {
    console.log(this.identifier);
  }

  /// DEBUG - Long Click Filter Icon
  clickStarted() {
    if (!this.allowDebugClick) {
      return;
    }

    this.timeoutHandler = setTimeout(() => {
      this.printIdentity();
      this.timeoutHandler = null;
    }, 1000);
  }

  clickEnded() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  /**
   * Reconfigure this Facet Search Component
   * This function will reload the previously saved facets from sessionStorage if they exist
   *
   * @param configuration - Partial FacetConfig
   * @param identity - Optional identity parameter if you want to override or provide a manual value
   */
  reconfigure(configuration: Partial<FacetConfig> | FacetConfig, identity?: string) {
    if (configuration) {
      if (configuration.hasOwnProperty('allowDebugClick')) {
        this.allowDebugClick = configuration.allowDebugClick;
      }

      if (configuration.hasOwnProperty('identifierStrategy')) {
        this.identifierStrategy = configuration.identifierStrategy;
      }

      if (configuration.hasOwnProperty('loggingCallback')) {
        this.loggingCallback = configuration.loggingCallback;
      }
    }

    const previousIdentity = `${this.identifier}`;
    this.generateIdentity(identity);

    if (previousIdentity !== this.identifier) {
      this.loggingCallback('Loading facets from sessionStorage for', this.identifier);
      this.selectedFacets = this.loadFromSessionStorage();
    }

    this.loggingCallback('Reconfigured', this.identifier);
  }

  /**
   * Generates an identity for a Facet Search Component
   * @param manual - manually set the identifier
   * @private
   */
  private generateIdentity(manual?: string) {
    let identity;

    this.loggingCallback('Generating ID with strategy', this.identifierStrategy);

    switch (this.identifierStrategy) {
      case FacetIdentifierStrategy.WindowURL:
        identity = NgxMatFacetSearchComponent.getFixedURL();
        break;
      case FacetIdentifierStrategy.ParentID:
        identity = this.injectorRef.parentIdentifier;
        break;
      case FacetIdentifierStrategy.Random:
        identity = uuidv4();
        break;
      default:
        identity = manual;
        break;
    }

    this.identify(identity);
  }

  /**
   * Saves the selected facets to sessionStorage for our current identifier
   * @private
   */
  private updateSessionStorage() {
    if (!this.identifier) {
      this.loggingCallback('Cannot update sessionStorage, no ID set');
      return;
    }

    if (this.selectedFacets.length === 0) {
      this.clearSessionStorage();
      this.loggingCallback('Clearing sessionStorage for component with ID', this.identifier);
      return;
    }

    this.loggingCallback('Saving facets in sessionStorage for component with ID', this.identifier);
    sessionStorage.setItem(this.identifier, JSON.stringify(this.selectedFacets));
  }

  /**
   * Loads facets from sessionStorage for our current identifier
   * @private
   */
  private loadFromSessionStorage(): Facet[] {
    let sessionFacets = [];

    if (!!this.identifier && !!sessionStorage.getItem(this.identifier)) {
      sessionFacets = JSON.parse(sessionStorage.getItem(this.identifier));
      this.loggingCallback('Loaded facets for component with ID', this.identifier, sessionFacets);
    } else if (!!!this.identifier) {
      this.loggingCallback('No identifier set on this component');
    } else if (!!!sessionStorage.getItem(this.identifier)) {
      this.loggingCallback(
        'No sessionStorage variable set for component with ID',
        this.identifier,
        sessionStorage.getItem(this.identifier)
      );
    }

    setTimeout(() => {
      this.emitSelectedEvent();
    }, 500);

    return sessionFacets;
  }
}

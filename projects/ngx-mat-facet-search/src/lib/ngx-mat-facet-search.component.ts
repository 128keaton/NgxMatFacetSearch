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
import {DialogPosition, MatDialog} from '@angular/material/dialog';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Facet, FacetConfig, FacetDataType, FacetFilterType, FacetIdentifierStrategy} from './models';
import {MatChipSelectionChange} from '@angular/material/chips';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {MediaObserver} from '@angular/flex-layout';
import * as _ from 'lodash';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {FACET_CONFIG} from './ngx-mat-facet.config';
import {VCRefInjector} from './misc/parent.helper';
import {v4 as uuidv4} from 'uuid';

// @dynamic
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-facet-search',
  templateUrl: 'ngx-mat-facet-search.component.html',
  styleUrls: ['./ngx-mat-facet-search.component.css'],
})
export class NgxMatFacetSearchComponent implements OnInit, AfterViewInit {

  private injectorRef: VCRefInjector;

  constructor(@Inject(FACET_CONFIG) configuration: FacetConfig,
              public dialog: MatDialog,
              public media: MediaObserver,
              private cookieService: CookieService,
              private vcRef: ViewContainerRef) {

    this.injectorRef = new VCRefInjector(this.vcRef.injector);
    this.searchUpdated = new EventEmitter<Facet[]>();
    this.reconfigure(configuration);

    this.searchUpdated.subscribe(facets => {
      this.loggingCallback('Facet(s) updated', facets);
    })
  }

  @Input() source: Facet[];
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
  public cookieExpiresOn = 1;

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
    this.selectedFacets = this.loadFromCookies();
    this.source.filter(facet => facet && facet.values && Array.isArray(facet.values))
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
      const bound = elementRef.getBoundingClientRect();
      this.facetSelected(facet, {
        top: bound.top + bound.height + 'px',
        left: (!this.media.isActive('xs') ? bound.left + 'px' : undefined)

      }, true);
    }
  }

  autoCompleteSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedFacet: Facet = event.option.value;
    const elementRef = event.option._getHostElement().parentElement.getBoundingClientRect();
    const top = elementRef.top;
    const left = elementRef.left;

    this.facetSelected(selectedFacet, {
      top: top + 'px',
      left: (!this.media.isActive('xs') ? left + 'px' : undefined)
    }, false);

  }

  facetSelected(facet: Facet, position: DialogPosition, isUpdate: boolean): void {
    this.promptFacet(_.cloneDeep(facet), position, isUpdate);
  }

  promptFacet(facet: Facet, position: DialogPosition, isUpdate: boolean): void {
    this.filteredFacets = this.availableFacets;

    setTimeout(() => {

      const facetDetailsModal = this.dialog.open(FacetDetailsModalComponent, {
        width: this.facetWidth,
        hasBackdrop: this.facetHasBackdrop,
        position,
        backdropClass: 'transparentBackdrop',
        panelClass: 'mat-facet-search-dialog',
        data: facet,
        disableClose: true,
        closeOnNavigation: false
      });
      facetDetailsModal.componentInstance.removeFacet = (f: Facet) => {
        if (this.removeFacet(f)) {
          facetDetailsModal.close();
        }
      };
      facetDetailsModal.componentInstance.isUpdate = isUpdate;
      facetDetailsModal.componentInstance.finished = (updatedFacet: Facet) => {
        this.addOrUpdateFacet(updatedFacet);
        facetDetailsModal.close();
      };
      facetDetailsModal.beforeClosed().subscribe(() => {
        this.selectedFacet = undefined;
      });

    }, 1);
  }

  addOrUpdateFacet(facet: Facet): void {
    const index = _.findIndex(this.selectedFacets, {name: facet.name});
    if (index > -1) {
      this.selectedFacets[index] = facet;
    } else {
      this.selectedFacets.push(facet);
    }
    this.emitSelectedEvent();
    this.updateCookies();
  }

  removeFacet(facet: Facet): boolean {
    if (!this.confirmOnRemove || (this.confirmOnRemove && confirm('Do you really want to remove "' + facet.labelText + '" filter?'))) {
      _.remove(this.selectedFacets, {name: facet.name});
      this.emitSelectedEvent();
      this.updateCookies();
      return true;
    }
    return false;
  }

  updateAvailableFacets(): void {
    const sourceClone = _.cloneDeep(this.source);
    _.remove(sourceClone, (a) => {
      return _.some(this.selectedFacets, {name: a.name});
    });
    this.availableFacets = sourceClone;
    this.filteredFacets = this.availableFacets;
  }

  reset(): void {
    this.selectedFacets = this.source.filter(facet => facet.readonly === true);
    this.emitSelectedEvent();
    this.clearCookies();
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
   * This function does NOT reload/re-fetch previously saved facets from cookies
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
  clearCookies() {
    if (!this.identifier) {
      return;
    }

    this.cookieService.delete(this.identifier);
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
   * This function will reload the previously saved facets from cookies if they exist
   *
   * @param configuration - Partial FacetConfig
   * @param identity - Optional identity parameter if you want to override or provide a manual value
   */
  reconfigure(configuration: Partial<FacetConfig> | FacetConfig, identity?: string) {
    if (configuration) {
      if (configuration.hasOwnProperty('allowDebugClick')) {
        this.allowDebugClick = configuration.allowDebugClick;
      }

      if (configuration.hasOwnProperty('cookieExpiresOn')) {
        this.cookieExpiresOn = configuration.cookieExpiresOn;
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
      this.loggingCallback('Loading facets from cookies for', this.identifier);
      this.selectedFacets = this.loadFromCookies();
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
   * Saves the selected facets to cookies for our current identifier
   * @private
   */
  private updateCookies() {
    if (!this.identifier) {
      this.loggingCallback('Cannot update cookies, no ID set');
      return;
    }

    if (this.selectedFacets.length === 0) {
      this.clearCookies();
      this.loggingCallback('Clearing cookies for component with ID', this.identifier);
      return;
    }

    this.loggingCallback('Saving facets in cookies for component with ID', this.identifier);
    this.cookieService.set(this.identifier, JSON.stringify(this.selectedFacets), this.cookieExpiresOn);
  }

  /**
   * Loads facets from cookies for our current identifier
   * @private
   */
  private loadFromCookies(): Facet[] {
    let cookieFacets = [];

    if (!!this.identifier && this.cookieService.check(this.identifier)) {
      cookieFacets = JSON.parse(this.cookieService.get(this.identifier));
      this.loggingCallback('Loaded facets for component with ID', this.identifier);
    } else if (!this.identifier) {
      this.loggingCallback('No identifier set on this component');
    } else if (!this.cookieService.check(this.identifier)) {
      this.loggingCallback('No cookies set for component with ID', this.identifier);
    }

    setTimeout(() => {
      this.emitSelectedEvent();
    }, 500);

    return cookieFacets;
  }
}

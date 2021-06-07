import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DialogPosition, MatDialog} from '@angular/material/dialog';
import {MatAutocompleteSelectedEvent, MatAutocompleteTrigger} from '@angular/material/autocomplete';
import {Facet, FacetDataType, FacetFilterType} from './models';
import {MatChipSelectionChange} from '@angular/material/chips';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {MediaObserver} from '@angular/flex-layout';
import * as _ from 'lodash';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-facet-search',
  templateUrl: 'ngx-mat-facet-search.component.html',
  styleUrls: ['./ngx-mat-facet-search.component.css'],
})
export class NgxMatFacetSearchComponent implements OnInit, AfterViewInit {
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
  @Input() expiresOn = 1;
  @Output() searchUpdated: EventEmitter<Facet[]>;

  @ViewChild('filterInput') filterInput: ElementRef;
  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger}) inputAutoComplete: MatAutocompleteTrigger;

  public selectedFacet: Facet;
  public selectedFacets: Facet[] = [];
  public availableFacets: Facet[] = [];
  public filteredFacets: Facet[] = [];
  public FacetDataType = FacetDataType;
  public FacetFilterType = FacetFilterType;


  constructor(public dialog: MatDialog, public media: MediaObserver, private cookieService: CookieService) {
    this.searchUpdated = new EventEmitter<Facet[]>();
  }

  ngOnInit() {
    this.updateAvailableFacets();
    this.selectedFacets = this.loadFromCookies();
    this.source.filter(facet => facet && facet.values && Array.isArray(facet.values))
      .forEach(facet => this.selectedFacets.push(facet));

    if (this.selectedFacets && Array.isArray(this.selectedFacets) && this.selectedFacets.length > 0) {
      this.emitSelectedEvent();
    }
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
        this.filteredFacets = this.availableFacets.filter(f => f.name.toLowerCase().includes(filterText))
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
    //   this.inputAutoComplete._onChange('Test');
    this.inputAutoComplete.openPanel();
  }

  identify(identifier: string) {
    this.identifier = identifier;
  }

  clearCookies() {
    if (!this.identifier) {
      return;
    }

    this.cookieService.delete(this.identifier);
  }

  private updateCookies() {
    if (!this.identifier) {
      return;
    }

    if (this.selectedFacets.length === 0) {
      this.clearCookies();
      return;
    }

    this.cookieService.set(this.identifier, JSON.stringify(this.selectedFacets), this.expiresOn);
  }

  private loadFromCookies(): Facet[] {
    let cookieFacets = [];

    if (!!this.identifier && this.cookieService.check(this.identifier)) {
      cookieFacets = JSON.parse(this.cookieService.get(this.identifier));
    }

    return cookieFacets;
  }
}

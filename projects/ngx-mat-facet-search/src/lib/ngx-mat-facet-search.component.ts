import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogPosition, MatDialog} from '@angular/material/dialog';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Facet, FacetDataType, FacetFilterType} from './models';
import {MatChipSelectionChange} from '@angular/material/chips';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {MediaObserver} from '@angular/flex-layout';
import * as _ from 'lodash';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-facet-search',
  templateUrl: 'ngx-mat-facet-search.component.html',
  styleUrls: ['./ngx-mat-facet-search.component.css'],
})
export class NgxMatFacetSearchComponent implements OnInit {
  @Input() source: Facet[];
  @Input() placeholder = 'Filter Table...';
  @Input() clearButtonText = 'Clear Filters';
  @Input() clearButtonEnabled = true;
  @Input() dateFormat = 'M/d/yyyy';


  @Input() facetWidth = '400px';
  @Input() facetHasBackdrop = true;
  @Input() confirmOnRemove = true;
  @Input() chipLabelsEnabled = true;
  @Output() searchUpdated: EventEmitter<Facet[]>;

  public selectedFacet: Facet;
  public selectedFacets: Facet[] = [];
  public availableFacets: Facet[] = [];
  public FacetDataType = FacetDataType;
  public FacetFilterType = FacetFilterType;

  constructor(public dialog: MatDialog, public media: MediaObserver) {
    this.searchUpdated = new EventEmitter<Facet[]>();
  }

  ngOnInit() {
    this.updateAvailableFacets();
    this.selectedFacets = [];
    this.source.filter(facet => facet && facet.values && Array.isArray(facet.values))
      .forEach(facet => this.selectedFacets.push(facet));

    if (this.selectedFacets && Array.isArray(this.selectedFacets) && this.selectedFacets.length > 0) {
      this.emitSelectedEvent();
    }
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
    setTimeout(() => {

      const facetDetailsModal = this.dialog.open(FacetDetailsModalComponent, {
        width: this.facetWidth,
        hasBackdrop: this.facetHasBackdrop,
        position,
        backdropClass: 'transparentBackdrop',
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
  }

  removeFacet(facet: Facet): boolean {
    if (!this.confirmOnRemove || (this.confirmOnRemove && confirm('Do you really want to remove "' + facet.labelText + '" filter?'))) {
      _.remove(this.selectedFacets, {name: facet.name});
      this.emitSelectedEvent();
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
  }

  reset(): void {
    this.selectedFacets = this.source.filter(facet => facet.readonly === true);
    this.emitSelectedEvent();
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
          type: val.type
        })
        )
      })
      )
    );
  }

  displayFn(...args: any): string | undefined {
    return undefined;
  }

}

import {Component, ViewChild} from '@angular/core';
import {Facet, FacetIdentifierStrategy, NgxMatFacetSearchComponent} from 'ngx-mat-facet-search';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  @ViewChild(NgxMatFacetSearchComponent)
  facetSearch: NgxMatFacetSearchComponent;

  facets: Array<Facet> = [];

  strategyUpdated(newStrategy: FacetIdentifierStrategy) {
    this.facetSearch.reconfigure({
      identifierStrategy: newStrategy
    });
  }

  manualIdentifierUpdated(identifier: string) {
    this.facetSearch.reconfigure(null, identifier);
  }

  facetsUpdated(facets: Facet[]) {
    this.facets = facets;
  }
}

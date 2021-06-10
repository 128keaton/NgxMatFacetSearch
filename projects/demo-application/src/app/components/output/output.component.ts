import { Component, OnInit } from '@angular/core';
import {Facet} from 'ngx-mat-facet-search';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  public selectedFacets: Facet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  filterUpdated(facetFilters: Facet[]): void {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  }
}

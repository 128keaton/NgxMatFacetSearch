import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Facet, FacetDataType, FacetOption, NgxMatFacetSearchComponent} from 'ngx-mat-facet-search';
import {of} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {DemoService} from '../../demo.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements AfterViewInit {

  @ViewChild(NgxMatFacetSearchComponent)
  facetSearch: NgxMatFacetSearchComponent;

  public selectedFacets: Facet[] = [];

  // Settings
  public chipLabelsEnabled = true;
  public clearButtonEnabled = true;
  public confirmOnRemove = true;

  public testEmptyFilterTypeahead = (text: string) => {
    return of([
      {value: '-a', text: ' A'},
      {value: '-b', text: ' B'},
      {value: '-c', text: ' C'}
    ] as FacetOption[]).pipe(
      map(values => {
        const filtered = values.filter(value => value.text.includes(text));

        if (filtered.length === 0) {
          return null;
        }

        return filtered;
      }),
      delay(300),
      tap(values => console.log('Test empty:', values))
    );
  };

  facets: Array<Facet> = [
    {
      name: 'userName',
      labelText: 'User Name',
      type: FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    }, {
      name: 'birthday',
      labelText: 'Birthday',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      name: 'eventDays',
      labelText: 'Event Days',
      icon: 'event_available',
      description: 'Please select start and end dates (date range select example)',
      type: FacetDataType.DateRange,
    },
    {
      name: 'isParticipant',
      labelText: 'Is a Participant?',
      icon: 'live_help',
      description: 'This is a test field, you can test boolean data type.',
      type: FacetDataType.Boolean,
    },
    {
      name: 'state',
      labelText: 'State',
      description: 'Please select something (single select, http example)',
      type: FacetDataType.CategorySingle,
      icon: 'folder_open',
      /* mock http service call  */
      options: of([
        {value: 'open', text: 'Open', count: 49},
        {value: 'closed', text: 'Closed', count: 23}
      ]).pipe(delay(700))
    },
    {
      name: 'license',
      labelText: 'License(s)',
      description: 'Please select your licenses (multi select, http example)',
      type: FacetDataType.Category,
      icon: 'drive_eta',
      /* mock http service call  */
      options: of([
        {value: 'a', text: 'Class A'},
        {value: 'b', text: 'Class B'},
        {value: 'c', text: 'Class C'}
      ]).pipe(delay(1200))
    },
    {
      name: 'city',
      labelText: 'Cities',
      description: 'Please select from cities.',
      type: FacetDataType.Typeahead,
      icon: 'location_city',
      typeahead: {
        function: (txt) => {
          return of([
            {value: txt + '-a', text: txt + ' A'},
            {value: txt + '-b', text: txt + ' B'},
            {value: txt + '-c', text: txt + ' C'}
          ]).pipe(delay(1200));
        },
      }
    },
    {
      name: 'empty',
      labelText: 'Empty Test',
      description: 'Please select from options.',
      type: FacetDataType.Typeahead,
      icon: 'clear',
      typeahead: {
        function: this.testEmptyFilterTypeahead,
        placeholder: 'Empty'
      }
    }
  ];

  constructor(private demoService: DemoService) {
  }

  // You can use an event method like this to trigger your filtering logic.
  filterUpdated(facetFilters: Facet[]): void {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  }

  ngAfterViewInit() {
    this.demoService.updateIdentifier(this.facetSearch.identifier);
  }

}

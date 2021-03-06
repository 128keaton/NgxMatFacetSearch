import {Component, ViewChild} from '@angular/core';
import {of} from 'rxjs';
import {Facet, FacetDataType, FacetIdentifierStrategy, NgxMatFacetSearchComponent} from 'ngx-mat-facet-search';
import {delay} from 'rxjs/operators';
import {testEmptyFilterTypeahead} from '../../common.helpers';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {

  constructor() {
    this.facets = [
      {
        name: 'userName',
        labelText: 'Person Name',
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
          function: testEmptyFilterTypeahead,
          placeholder: 'Empty'
        }
      }
    ];
  }

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
}

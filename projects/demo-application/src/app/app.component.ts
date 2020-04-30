import {Component} from '@angular/core';
import {delay} from 'rxjs/operators';
import {of} from 'rxjs';
import {Facet, FacetDataType} from 'ngx-mat-facet-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Facet Definitions
  // You can either define and configure your facets as static object array,
  // or you can generate dynamically based on your data from back end.
  public facets: Array<Facet> = [
    {
      name: 'userName',
      text: 'User Name',
      type: FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    }, {
      name: 'birthday',
      text: 'Birthday',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      name: 'eventDays',
      text: 'Event Days',
      icon: 'event_available',
      description: 'Please select start and end dates (date range select example)',
      type: FacetDataType.DateRange,
    },
    {
      name: 'isParticipant',
      text: 'Is a Participant?',
      icon: 'live_help',
      description: 'This is a test field, you can test boolean data type.',
      type: FacetDataType.Boolean,
    },
    {
      name: 'state',
      text: 'State',
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
      text: 'License(s)',
      description: 'Please select your licenses (multi select, http example)',
      type: FacetDataType.Category,
      icon: 'drive_eta',
      /* mock http service call  */
      options: of([
        {value: 'a', text: 'Class A'},
        {value: 'b', text: 'Class B'},
        {value: 'c', text: 'Class C'}
      ]).pipe(delay(1200))
    }
  ];

  public selectedFacets: Facet[] = [];

  // Settings
  public chipLabelsEnabled = true;
  public clearButtonEnabled = true;
  public confirmOnRemove = true;


  // you can use an event method like this to trigger your filtering logic.
  filterUpdated = (facetFilters: Facet[]): void => {
    this.selectedFacets = facetFilters;
    console.log('filter', facetFilters);
  };
}

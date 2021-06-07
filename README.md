# NgxMaterialFacetSearch [![npm version](https://badge.fury.io/js/ngx-mat-facet-search.svg)](https://badge.fury.io/js/ngx-mat-facet-search)
An Angular 12/Ivy port of [ng-material2-facet-search](https://github.com/fdeniz/ng-material2-facet-search).

[Demo](https://128keaton.github.io/NgxMatFacetSearch/)

## Usage

1. Import `NgxMatFacetSearchModule` into your application:
```typescript
import {NgxMatFacetSearchModule} from 'ngx-mat-facet-search';

@NgModule({
  imports: [
    NgxMatFacetSearchModule
  ],
})
```

2. Provide an array of `Facet` type:
```typescript
  // Facet Definitions
  // You can either define and configure your facets as static object array,
  // or you can generate dynamically based on your data from back end.
  public facets: Array<Facet> = [
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
         return  of([
           {value: txt + '-a', text: txt + ' A'},
           {value: txt + '-b', text: txt + ' B'},
           {value: txt + '-c', text: txt + ' C'}
         ]).pipe(delay(1200));
       },
      }
    }
  ];
```

### Using cookies to store facet data
To use cookies to store facets in the browser locally, you must identify the facet component like so:
```html
 <ngx-mat-facet-search identifier="test-facet" ....></ngx-mat-facet-search>
```

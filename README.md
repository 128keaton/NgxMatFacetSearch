# NgxMaterialFacetSearch [![npm version](https://badge.fury.io/js/ngx-mat-facet-search.svg)](https://badge.fury.io/js/ngx-mat-facet-search)
An Angular 12/Ivy port of [ng-material2-facet-search](https://github.com/fdeniz/ng-material2-facet-search).

[Demo](https://128keaton.github.io/NgxMatFacetSearch/)

## Usage

### Getting Started
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

### Cookies/Identities
By default, NgxMatFacetSearch will save the selected facets in the browser's cookies using the parent component's selector as a base identifier.
For example, a component with the selector `app-home-page` results in the facet's identifier being `app-home-page-facet`.

#### Generation Strategies:
* Parent ID _(default)_ - Uses the parent component's selector for identity generation
* Random - Uses `uuidv4` (if installed) to generate an identifier. This is useful for if you want very fine control over what is saved or not.
* Window URL _(not recommended)_* - Uses the current URL to generate an identifier. `/app/home/base` becomes `app-home-base-facet`. 
* None - Completely disables saving in cookies

You can override this setting in the configuration (see below).

\* Note on Window URL: If the component tries to load before the route is fully resolved, or you have some weird URL thing going on, 
the same ID per component might not be used. This is why I moved to the `Parent ID` strategy by default.

### Configuration

#### Basic
Most of the simple options can be configured directly through the component itself in the template:

* `source` - `Facet[]` - An array of Facets to provide. Default: `[]`
* `placeholder` - `string` - A string value for the empty/new Facet button. Default: `Filter Table`
* `clearButtonText` - `string` - A string value for the clear Facets button. Default: `Clear Filters`
* `clearButtonEnabled` - `boolean` - A true/false value to indicate whether to show or hide the clear Facets Button. Default: `true`
* `dateFormat` - `string` - A string value notating the date format in date-specific Facets. Default: `M/d/yyyy`
* `tooltip` - `string` - A string value containing tooltip text that appears when you over the filter icon. Default: `null`
* `displayFilterIcon` - `boolean` - A true/false value to indicate whether to show or hide the filter icon. Default: `true`
* `facetWidth` - `string` - A pixel value (notated with `px` at the end) that refers to the width of the Facet panel. Default: `400px`
* `facetHasBackdrop` - `boolean` - A true/false value to indicate whether the Facet panel has a backdrop. Default: `true`
* `confirmOnRemove` - `boolean` - A true/false value which corresponds to prompting the user when they delete a Facet. Default: `true`
* `chipLabelsEnabled` - `boolean` - A true/false value to indicate whether the Facet button shows its label. Default: `true`
* `identifier` - `string` - A string value that contains a unique but persistent ID for the Facet Search component. Default: `null` (see above).

#### Advanced

You can also inject some more options into the component on creation, either from the parent module or containing component.

* `allowDebugClick` - `boolean` - A true/false value that, when enabled, allows the user to long click on the filter icon, which results in
the component's identifier being printed in the console. Default: `true`
* `cookieExpiresOn` - `number` - A number which refers to the number of days before the cookie expires. Default: `1`
* `identifierStrategy` - `FacetIdentifierStrategy` - A value which contains the FacetIdentifierStrategy value being used. Default: `FacetIdentifierStrategy.ParentID` (see above)
* `loggingCallback` - `(...args) => void` - A value which contains a function callback for logging. Default: `() => {}`

Inside your module/component providers, you can easily pass configuration to the child Facet Search Components:

```typescript
providers: [
    {
      provide: FACET_CONFIG, useFactory: () => new FacetConfig({
          loggingCallback: (...args) => {
            console.log(...args) // Log output to the console
          },
          identifierStrategy: FacetIdentifierStrategy.ParentID // Use the parent ID strategy
        }),
    }
  ]
```

You can also call the `reconfigure(config: Partial<FacetConfig> | FacetConfig, identifier?: string)` function on the component directly
if you need to change things on the fly:
```typescript
  @ViewChild(NgxMatFacetSearchComponent)
  facetSearch: NgxMatFacetSearchComponent;

// ....
  const newConfig = new FacetConfig({
    loggingCallback: (...args) => {
      console.log(...args) // Log output to the console
    },
    identifierStrategy: FacetIdentifierStrategy.Random // Use the Random strategy
  });
  
  this.facetSearch.reconfigure(newConfig); // Reconfigure directly

```

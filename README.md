# NgxMaterialFacetSearch
An Angular 9/Ivy port of [ng-material2-facet-search](https://github.com/fdeniz/ng-material2-facet-search).

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
public facets: Facet[] = [{
		// facet's object name
		name: 'userName',
		// label text for ui (optional)
		text: 'User Name',
		// type of the facet, options are;
		// "Text" (input), "Boolean" (checkbox),
		// "Category" (multi select), "CategorySingle" (single select),
		// "Typeahead" (multi select typeahead), "TypeaheadSingle" (single select typeahead)
		// "Date" (date picker) and "DateRange" (date pickers)
		type: FacetDataType.Text,
		// description text for ui (optional)
		description: 'Please enter your user name (simple text input example)',
		// name of the material icon (optional) (https://material.io/tools/icons)
		icon: 'person_outline',
		// you can set a facet as readonly to disable editing.
		readonly: false,

		// Typeahead related fields:
		// Typehaead function
		typeahead: function(txt){
			// Call to external service that maps to FacteOptions
			// See "Cities" Facet below
		},
		// Typehead debouce (in milliseconds) (default: 300)
		typeahedDebounce: 300

	}, {
		name: 'birthday',
		text: 'Birthday',
		icon: 'date_range',
		description: 'Please select your birthday (date select example)',
		type: FacetDataType.Date,
	}, {
		name: 'eventDays',
		text: 'Event Days',
		icon: 'event_available',
		description: 'Please select start and end dates (date range select example)',
		type: FacetDataType.DateRange,
	}, {
		name: 'isParticipant',
		text: 'Is a Participant?',
		icon: 'live_help',
		description: 'This is a test field, you can test boolean data type.',
		type: FacetDataType.Boolean,
	}, {
		name: 'state',
		text: 'State',
		description: 'Please select something (single select, http example)',
		type: FacetDataType.CategorySingle,
		icon: 'folder_open',
		/* mock http service call  */
		// you can define this facet's selection items as observable array, or fixed array.
		options: of([
			{ value: 'open', text: 'Open', count: 49 },
			{ value: 'closed', text: 'Closed', count: 23 }
		]).pipe(delay(700))
	}, {
		name: 'license',
		text: 'License(s)',
		description: 'Please select your licenses (multi select, http example)',
		type: FacetDataType.Category,
		icon: 'drive_eta',
		/* mock http service call  */
		options: of([
			{ value: 'a', text: 'Class A' },
			{ value: 'b', text: 'Class B' },
			{ value: 'c', text: 'Class C' }
		]).pipe(delay(1200))
	}, {
		name: 'city',
		text: 'Cities',
		description: 'Please select from cities.',
		type: FacetDataType.Typeahead,
		icon: 'location_city',
		/* mock http service call  */
		typeahead: function(txt){
			const params = {
				search: txt,
				size: 5 // Limit results to show in Typeahead
			}
			return this.MyRemoteService.query(params)
				.pipe(map((response) => {
					// Map results to FacetsOptions for selection
					response.results.map(item => ({
						text: item.name,
						value: item.value
					}))
				})
		}
	}
	];
```

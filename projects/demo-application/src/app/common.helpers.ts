import {of} from 'rxjs';
import {FacetOption} from 'ngx-mat-facet-search';
import {delay, map, tap} from 'rxjs/operators';

export const  testEmptyFilterTypeahead = (text: string) => {
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

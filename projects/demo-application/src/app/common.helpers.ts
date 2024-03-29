import {of} from 'rxjs';
import {FacetOption} from 'ngx-mat-facet-search';
import {delay, map} from 'rxjs/operators';

export const testEmptyFilterTypeahead = (text: string) => of([
    {value: '-a', text: ' A'},
    {value: '-b', text: ' B'},
    {value: '-c', text: ' C'}
  ] as FacetOption[]).pipe(
    map(values => {
      const filtered = values.filter(value => !!value.text && value.text.includes(text));

      if (filtered.length === 0) {
        return null;
      }

      return filtered;
    }),
    delay(300),
  );

const randomValueArray: FacetOption[] = [...new Set(Array.from({length: 40}, () => Math.floor(Math.random() * 40)).map(num => ({
  value: `${num}`,
  text: `${num}`
})))];

export const lotsOfValuesTypeAhead = (text: string) => of(randomValueArray).pipe(
    map(values => {
      const filtered = values.filter(value => {
        if (text.length > 0) {
          return !!value.text && value.text.includes(text);
        }

        return true;
      });

      if (filtered.length === 0) {
        return null;
      }

      return filtered;
    }),
    delay(300),
  );


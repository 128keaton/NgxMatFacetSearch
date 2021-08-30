import {NgxMatFacetSearchComponent} from './ngx-mat-facet-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {render} from '@testing-library/angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CSVPipe, FilterPipe, KeysPipe} from './pipes';

describe('NgxMatFacetSearchComponent', () => {
  test('should render component', async () => {
    await render(NgxMatFacetSearchComponent, {
      imports: [
        MatAutocompleteModule,
        MatTooltipModule,
        MatIconModule,
        MatChipsModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [
        CSVPipe,
        FilterPipe,
        KeysPipe,
      ]
    });
  })
});

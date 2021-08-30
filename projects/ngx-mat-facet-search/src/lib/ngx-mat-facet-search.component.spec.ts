import {NgxMatFacetSearchComponent} from './ngx-mat-facet-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {render} from '@testing-library/angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CSVPipe, FilterPipe, KeysPipe} from './pipes';
import {FacetDataType} from './models';

describe('NgxMatFacetSearchComponent', () => {
  test('should render component', async () => setup());
  test('should show facets', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;

    instance.source = [
      {
        name: 'userName',
        labelText: 'User Name',
        type: FacetDataType.Text,
        description: 'Please enter your user name (simple text input example)',
        icon: 'person_outline'
      }
    ];

    expect(instance.availableFacets.length).toBeGreaterThan(0);
    expect(instance.filteredFacets.length).toBeGreaterThan(0);
    expect(instance.selectedFacets.length).toEqual(0);
  });

  test('should emit selected event', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;
    const facet =  {
      name: 'userName',
      labelText: 'User Name',
      type: FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    };


    instance.source = [facet];

    instance.updateAvailableFacets();
    instance.addOrUpdateFacet(facet);

    expect(instance.selectedFacets.length).toBeGreaterThan(0);
  });

  test('should show default identifier', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;
    expect(instance.identifier).toEqual('default-facet');
  });

  test('should show custom identifier', async () => {
    const component = await setup();
    const instance = component.fixture.componentInstance;

    instance.identify('custom')
    expect(instance.identifier).toEqual('custom-facet');
  });
});

async function setup() {
  return await render(NgxMatFacetSearchComponent, {
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
    ],
  });
}

import {NgModule} from '@angular/core';
import {NgxMatFacetSearchComponent} from './ngx-mat-facet-search.component';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {CSVPipe, FilterPipe, KeysPipe} from './pipes';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {A11yModule} from '@angular/cdk/a11y';
import {FacetModalComponent} from './modals/facet-modal/facet-modal.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {FocusOnShowDirective} from './directives/focus-on-show.directive';

@NgModule({
  imports: [
    A11yModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [
    CSVPipe,
    FilterPipe,
    KeysPipe,
    NgxMatFacetSearchComponent,
    FacetDetailsModalComponent,
    FacetModalComponent,
    FocusOnShowDirective,
  ],
  exports: [NgxMatFacetSearchComponent],
  entryComponents: [FacetDetailsModalComponent],
})
export class NgxMatFacetSearchModule {
}

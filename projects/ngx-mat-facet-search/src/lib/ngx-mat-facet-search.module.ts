import {NgModule} from '@angular/core';
import {NgxMatFacetSearchComponent} from './ngx-mat-facet-search.component';
import {FacetDetailsModalComponent} from './modals/facet-details-modal/facet-details-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {CSVPipe, FilterPipe, KeysPipe} from './pipes';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
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
  ],
  declarations: [
    CSVPipe,
    FilterPipe,
    KeysPipe,
    NgxMatFacetSearchComponent,
    FacetDetailsModalComponent,
  ],
  exports: [NgxMatFacetSearchComponent],
  entryComponents: [FacetDetailsModalComponent]
})
export class NgxMatFacetSearchModule {
}

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxMatFacetSearchComponent} from './ngx-mat-facet-search.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

describe('NgxMatFacetSearchComponent', () => {
  let component: NgxMatFacetSearchComponent;
  let fixture: ComponentFixture<NgxMatFacetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ],
      imports: [MatDialogModule, MatAutocompleteModule],
      declarations: [NgxMatFacetSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatFacetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

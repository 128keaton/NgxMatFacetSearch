import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FacetDetailsModalComponent} from './facet-details-modal.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

describe('FacetDetailsModalComponent', () => {
  let component: FacetDetailsModalComponent;
  let fixture: ComponentFixture<FacetDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ],
      declarations: [FacetDetailsModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {debounceTime, tap} from 'rxjs/operators';
import {Facet, FacetDataType, FacetFilterType, FacetOption} from '../../models';
import {fromEvent, of} from 'rxjs';
import * as _ from 'lodash';
import {animate, style, transition, trigger} from '@angular/animations';

const MAX_TEXT_LENGTH = 60;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-mat-facet-details-modal',
  templateUrl: './facet-details-modal.component.html',
  styleUrls: ['./facet-details-modal.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0', height: 0 }),
        animate('.2s ease-out', style({ opacity: '1', height: '*' })),
      ]),
    ]),
    trigger('fadeOut', [
      transition(':leave', [
         animate('.2s ease-out', style({ opacity: '0', height: '0' })),
      ]),
    ])
  ],
})
export class FacetDetailsModalComponent implements OnInit, AfterViewInit {

  public isUpdate: boolean;
  public removeFacet: (facet: Facet) => void;
  public finished: (data: Facet) => void;
  public typeaheadText: string;

  public FacetDataType = FacetDataType;
  public FacetFilterType = FacetFilterType;

  @ViewChildren('typeAheadInput') typeAheadInputs: QueryList<ElementRef>;

  constructor(
    public dialogRef: MatDialogRef<FacetDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Facet) {

    switch (this.data.type) {
      case FacetDataType.Category:
        // this.data.values = this.data.values || [{ type: FacetFilterType.Contains }];
        break;

      case FacetDataType.CategorySingle:
        // this.data.values = this.data.values || [{ type: FacetFilterType.Equals }];
        break;

      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        // Go ahead and run query by default
        if (this.data.typeahead && this.data.typeahead.function) {
          this.data.typeahead.function('').subscribe(options => {
            if (options.length) {
              this.data.options = of(options);
            }
          });
        }
        break;

      case FacetDataType.Date:
        this.data.values = this.data.values || [{type: FacetFilterType.equal}];
        break;

      case FacetDataType.DateRange:
        this.data.values = this.data.values || [{type: FacetFilterType.startsWith}, {type: FacetFilterType.endsWith}];
        break;

      case FacetDataType.Boolean:
        this.data.values = this.data.values || [{type: FacetFilterType.equal}];
        break;

      case FacetDataType.Text:
        this.data.values = this.data.values || [{type: FacetFilterType.contains, value: ''}];
        break;

      default:
        this.data.values = this.data.values || [{}];
    }
  }

  ngOnInit() {
  }

  /**
   * Setup debounce on the TypeAhead search
   */
  ngAfterViewInit() {
    this.typeAheadInputs.changes.subscribe((inputs: QueryList<ElementRef>) => {
      if (inputs.first) {
        fromEvent(inputs.first.nativeElement, 'keyup')
          .pipe(
            tap(() => {
              this.data.options = undefined;
            }),
            debounceTime(this.data.typeahead.debounce || 300),
          )
          .subscribe((event: any) => {
            const txt = event.target.value;
            this.data.typeahead.function(txt).subscribe(options => {
                if (options.length) {
                  this.data.options = of(options);
                }
              }
            );
          });
      }
    });
  }


  truncateText(txt: string): string {
    if (txt && txt.length) {
      return txt.length > MAX_TEXT_LENGTH ?
        `${txt.substring(0, MAX_TEXT_LENGTH).trim()}...` :
        txt;

    } else {
      return txt;
    }

  }

  onOk(): void {
    this.finished(this.data);
  }

  onCancel(): void {
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  isItemSelected = (option: FacetOption): boolean => {
    return _.some(this.data.values, option);
  }

  addOptionToSelected = (facet: Facet, option: FacetOption): void => {

    if (_.some(facet.values, {value: option.value})) {
      _.remove(facet.values, {value: option.value});
    } else {
      option.selected = true;
      switch (facet.type) {
        case FacetDataType.Category:
        case FacetDataType.Typeahead:
          if (_.isNil(facet.values)) {
            facet.values = [];
          }
          option.type = FacetFilterType.contains;
          facet.values.push(option);
          break;
        case FacetDataType.CategorySingle:
        case FacetDataType.TypeaheadSingle:
          option.type = FacetFilterType.equal;
          facet.values = [option];
          break;
      }
    }
  }

  isUpdateButtonDisabled = () => {
    switch (this.data.type) {
      case FacetDataType.Category:
      case FacetDataType.CategorySingle:
        return !_.some(this.data.values, (val) => val.value);

      case FacetDataType.Date:
        return !_.some(this.data.values, (val) => val.value);

      case FacetDataType.DateRange:
        return !(this.data.values[0].value) || !(this.data.values[1].value);

      case FacetDataType.Text:
        return !_.some(this.data.values, (val) => val.value);

      case FacetDataType.Boolean:
        return !(this.data.values[0].value);

      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        return !_.some(this.data.values, (val) => val.value);
    }
  }

  emptyFunction() {

  }
}

import {AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {debounceTime, tap} from 'rxjs/operators';
import {Facet, FacetDataType, FacetFilterType, FacetOption, FacetResultType} from '../../models';
import {BehaviorSubject, of} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';
import {FacetModalRef} from '../facet-modal.ref';
import {FACET_MODAL_DATA} from '../facet-modal.data';
import {MatSelectionListChange} from '@angular/material/list';

const MAX_TEXT_LENGTH = 60;

@Component({
  selector: 'ngx-mat-facet-details-modal',
  templateUrl: './facet-details-modal.component.html',
  styleUrls: ['./facet-details-modal.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: '0', height: 0}),
        animate('.2s ease-out', style({opacity: '1', height: '*'})),
      ]),
    ]),
  ],
})
export class FacetDetailsModalComponent implements OnInit, AfterViewInit {

  @ViewChildren('typeAheadInput') typeAheadInputs: QueryList<ElementRef>;

  public isUpdate: boolean;
  public typeaheadText: string;
  public clearButtonDisabled = true;

  public FacetDataType = FacetDataType;
  public FacetFilterType = FacetFilterType;

  private typeAheadInputChanged = new BehaviorSubject<string>('');

  constructor(@Inject(FACET_MODAL_DATA) public data: Facet, public modalRef: FacetModalRef) {
    this.isUpdate = modalRef.config.isUpdate;
  }

  ngOnInit() {
    switch (this.data.type) {
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        // Go ahead and run query by default
        if (this.data.typeahead && this.data.typeahead.function) {
          this.data.options = this.data.typeahead.function('');
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

  /**
   * Setup debounce on the TypeAhead search
   */
  ngAfterViewInit() {
    if (this.typeAheadInputs.length > 0) {
      this.typeAheadInputChanged.pipe(
        tap(() => this.data.options = undefined),
        debounceTime(this.data.typeahead.debounce || 300),
      ).subscribe(search => {
        this.data.typeahead.function((search||'')).subscribe(options => {
            if (!!options) {
              this.data.options = of(options);
            } else {
              this.data.options = of([]);
            }
          }
        );
      });
    }
  }

  typeaheadValueChanged(event) {
    this.typeAheadInputChanged.next(event);
    this.clearButtonDisabled = (!!!event || event.length === 0);
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
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: this.data
    });
  }

  onRemove(): void {
    this.modalRef.close({
      type: FacetResultType.REMOVE,
      data: this.data
    });
  }

  onCancel(): void {
    this.modalRef.close({
      type: FacetResultType.CANCEL,
    });
  }

  onClose(): void {
    this.modalRef.close();
  }

  validateAndSubmit() {
    if (!this.isUpdateButtonDisabled()) {
      this.onOk();
    }
  }

  isItemSelected = (option: FacetOption): boolean => {
    return (this.data.values || []).some(o => o.value === option.value);
  };

  addOptionToSelected = (facet: Facet, option: FacetOption): void => {
    if ((facet.values || []).some(f => f.value === option.value) &&
      (facet.type === FacetDataType.Category || facet.type === FacetDataType.Typeahead)) {
      facet.values = facet.values.filter(f => f.value !== option.value);
    } else {
      option.selected = true;
      switch (facet.type) {
        case FacetDataType.Category:
        case FacetDataType.Typeahead:
          if (facet.values === null || facet.values === undefined) {
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
  };

  isUpdateButtonDisabled = () => {
    switch (this.data.type) {
      case FacetDataType.Category:
      case FacetDataType.CategorySingle:
      case FacetDataType.Date:
      case FacetDataType.Text:
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        return !(this.data.values || []).some(v => v.value);
      case FacetDataType.DateRange:
        return !(this.data.values[0].value) || !(this.data.values[1].value);
      case FacetDataType.Boolean:
        return !(this.data.values[0].value);
    }
  };

  emptyFunction() {}

  clearInput() {
    this.typeaheadText = null;
    this.typeaheadValueChanged(null);
  }

  selectionChange(selection: MatSelectionListChange, facet: Facet, options?: FacetOption[]) {
    selection.options.filter(option => option.selected)
      .map(selectedOption => (options || []).find(option => option.value === selectedOption.value))
      .filter(facetOption => !(facet.values || []).find(v => v === facetOption.value))
      .forEach(selectedOption => this.addOptionToSelected(facet, selectedOption));
  }
}

import {Observable} from 'rxjs';
import {FacetDataType, FacetOption, FacetFilterType} from '.';

export interface Facet {
  name?: string;
  labelText?: string;
  description?: string;
  readonly?: boolean;
  type?: FacetDataType;
  dataType?: 'boolean' | 'number' | 'string' | 'date';
  options?: Observable<FacetOption[]>;
  typeahead?: {
    function?: (txt: string) => Observable<FacetOption[]>,
    debounce?: number
  };
  values?: FacetOption[];
  fixedFilterType?: FacetFilterType;
  icon?: string;
  iconClass?: string;
  cssClass?: string;
  data?: any;
}

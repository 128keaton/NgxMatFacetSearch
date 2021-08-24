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
    function?: (searchText: string) => Observable<FacetOption[]>,
    debounce?: number,
    placeholder?: string
  };
  values?: FacetOption[];
  fixedFilterType?: FacetFilterType;
  icon?: string;
  iconClass?: string;
  cssClass?: string;
  data?: any;
  placeholder?: string;
}

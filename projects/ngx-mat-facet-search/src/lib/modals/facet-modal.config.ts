export interface FacetModalConfig<T = any> {
  backdropClass: string;
  data?: T;
  disableClose: boolean;
  panelClass: string | string[];
  offsetX?: number;
  offsetY?: number;
  isUpdate: boolean;
}


export const DefaultFacetModalConfig: FacetModalConfig = {
  backdropClass: '',
  disableClose: false,
  panelClass: '',
  isUpdate: false,
};

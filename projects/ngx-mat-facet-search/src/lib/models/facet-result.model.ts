export enum FacetResultType {
  REMOVE,
  CANCEL,
  ADD
}

export interface FacetResult {
  type: FacetResultType,
  data?: any
}

export enum FacetIdentifierStrategy {
  WindowURL = 'windowURL',
  ParentID = 'parentID',
  Random = 'random',
  Manual = 'manual'
}

export class FacetConfig {
  allowDebugClick = true;
  cookieExpiresOn = 1;
  identifierStrategy: FacetIdentifierStrategy = FacetIdentifierStrategy.ParentID;
  loggingCallback: () => void = () => {}

  constructor(config?: Partial<FacetConfig>) {
    if (!!config) {
      Object.assign(this, config);
    }
  }
}

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

  constructor(configuration?: Partial<FacetConfig>) {
    if (configuration) {
      if (configuration.hasOwnProperty('allowDebugClick')) {
        this.allowDebugClick = configuration.allowDebugClick;
      }

      if (configuration.hasOwnProperty('cookieExpiresOn')) {
        this.cookieExpiresOn = configuration.cookieExpiresOn;
      }

      if (configuration.hasOwnProperty('identifierStrategy')) {
        this.identifierStrategy = configuration.identifierStrategy;
      }

      if (configuration.hasOwnProperty('loggingCallback')) {
        this.loggingCallback = configuration.loggingCallback;
      }
    }
  }
}

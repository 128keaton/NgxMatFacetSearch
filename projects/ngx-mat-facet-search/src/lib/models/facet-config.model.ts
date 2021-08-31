export enum FacetIdentifierStrategy {
  WindowURL = 'windowURL',
  ParentID = 'parentID',
  Random = 'random',
  Manual = 'manual'
}

export class FacetConfig {
  allowDebugClick = true;
  identifierStrategy: FacetIdentifierStrategy = FacetIdentifierStrategy.ParentID;

  constructor(configuration?: Partial<FacetConfig>) {
    if (configuration) {
      if (configuration.hasOwnProperty('allowDebugClick')) {
        this.allowDebugClick = configuration.allowDebugClick || false;
      }

      if (configuration.hasOwnProperty('identifierStrategy')) {
        this.identifierStrategy = configuration.identifierStrategy || FacetIdentifierStrategy.ParentID;
      }

      if (configuration.hasOwnProperty('loggingCallback') && !!configuration.loggingCallback) {
        this.loggingCallback = configuration.loggingCallback;
      }
    }
  }

  loggingCallback: (...args: any[]) => void = () => {};
}

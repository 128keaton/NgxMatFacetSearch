import {InjectionToken} from '@angular/core';
import {FacetConfig} from './models';

export const FACET_CONFIG = new InjectionToken<FacetConfig>('Facet Configuration', {
  providedIn: 'root',
  factory: () => new FacetConfig()
});

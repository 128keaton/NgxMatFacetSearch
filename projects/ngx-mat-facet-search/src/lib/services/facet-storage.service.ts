import { Injectable } from '@angular/core';
import {Facet} from '../models';

@Injectable({
  providedIn: 'root'
})
export class FacetStorageService {


  private useLocalStorage = false;

  /**
   * Update the loggingCallback function
   */
  updateLoggingCallback(loggingCallback: (...args) => void) {
    this.loggingCallback = loggingCallback;
  }

  /**
   * Saves the selected facets to localStorage for our current identifier
   */
  updateSavedFacets(identifier: string, selectedFacets: Facet[]) {
    if (!identifier) {
      this.loggingCallback(`Cannot update ${this.mode}, no ID set`);
      return;
    }

    this.loggingCallback(`Saving facets in ${this.mode} for component with ID`, identifier);


    if (this.useLocalStorage) {
      localStorage.setItem(identifier, JSON.stringify(selectedFacets));
    } else {
      sessionStorage.setItem(identifier, JSON.stringify(selectedFacets));
    }
  }


  /**
   * Clears previously saved facets for this specific component
   */
  clearStorage(identifier: string) {
    if (!identifier) {
      return;
    }

    this.loggingCallback(`Clearing ${this.mode} for ID`, identifier);

    if (this.useLocalStorage) {
      localStorage.removeItem(identifier);
    } else {
      sessionStorage.removeItem(identifier);
    }
  }

  /**
   * Loads facets from storage for our current identifier
   */
  loadFacetsFromStorage(identifier: string): Facet[] {
    let sessionFacets = [];

    if (!!identifier && !!localStorage.getItem(identifier)) {
      if (this.useLocalStorage) {
        sessionFacets = JSON.parse(localStorage.getItem(identifier));
      } else {
        sessionFacets = JSON.parse(sessionStorage.getItem(identifier));
      }

      sessionFacets = (sessionFacets || []);

      this.loggingCallback('Loaded facets for component with ID', identifier, sessionFacets);
    } else if (!!!identifier) {
      this.loggingCallback('No identifier set on this component');
    } else if (this.checkStorage(identifier)) {
      this.loggingCallback(
        `No ${this.mode} variable set for component with ID`,
        identifier,
        localStorage.getItem(identifier)
      );
    }

    return sessionFacets;
  }

  private loggingCallback: (...args) => void = () => {
  };

  private get mode(): 'localStorage' | 'sessionStorage' {
    return (this.useLocalStorage ? 'localStorage' : 'sessionStorage');
  }

  private checkStorage(key: string): boolean {
    if (this.useLocalStorage) {
      return !!!localStorage.getItem(key);
    } else {
      return !!!sessionStorage.getItem(key);
    }
  }
}

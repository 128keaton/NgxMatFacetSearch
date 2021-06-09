import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  currentIdentifier: BehaviorSubject<string> = new BehaviorSubject<string>('default-facet');

  constructor() {
  }

  updateIdentifier(identifier: string) {

  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  currentIdentifier: BehaviorSubject<string> = new BehaviorSubject<string>('default-facet');

  updateIdentifier(identifier: string) {
    this.currentIdentifier.next(identifier);
  }
}

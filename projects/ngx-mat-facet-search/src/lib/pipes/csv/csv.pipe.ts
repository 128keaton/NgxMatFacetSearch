import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'csv',
  pure: false
})
export class CSVPipe implements PipeTransform {

  transform(value: Array<object>, objectKeyName: string, separator: string): any {
    return _.map(value,  (element) => {
      return objectKeyName ? element[objectKeyName] : element;
    }).join(separator || ',');
  }

}

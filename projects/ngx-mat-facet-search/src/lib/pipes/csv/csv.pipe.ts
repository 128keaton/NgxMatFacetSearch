import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'csv',
  pure: false
})
export class CSVPipe implements PipeTransform {

  transform(value: {[key: string]: any}[], objectKeyName?: string, separator?: string): any {
    return value.map(e => objectKeyName ? e[objectKeyName] : e).join(separator || ',');
  }

}

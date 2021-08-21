import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'csv',
  pure: false
})
export class CSVPipe implements PipeTransform {

  transform(value: Array<object>, objectKeyName: string, separator: string): any {
    return value.map(e => objectKeyName ? e[objectKeyName] : e).join(separator || ',');
  }

}

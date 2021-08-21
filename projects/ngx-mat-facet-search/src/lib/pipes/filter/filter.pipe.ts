import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(objectArray: Array<object>, fieldName: string, fieldValue: any): any {
    return objectArray.filter(obj => obj[fieldName] === fieldValue);
  }
}

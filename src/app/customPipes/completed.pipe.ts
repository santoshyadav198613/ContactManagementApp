import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed'
})
export class CompletedPipe implements PipeTransform {

  transform(completed: boolean, args?: any): any {
    if (completed) {
      return "Completed";
    }
    else {
      return "Pending";
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Appreciation } from '../models/appreciation.enum';

@Pipe({
  name: 'appreciationToColor'
})
export class AppreciationToColorPipe implements PipeTransform {

  transform(value: Appreciation): string {
    let border = "success";

    switch(value) {
      case Appreciation.AVERTISSEMENT : 
        border = "warning";
        break;
      case Appreciation.ERREUR : 
        border = "danger";
    }
    return border;
  }

}

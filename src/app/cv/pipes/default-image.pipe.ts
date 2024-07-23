import { Pipe, PipeTransform } from '@angular/core';
import { APP_CONST } from 'src/app/config/constantes.config';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    // Si on a un path vide ou qui contient que des espaces => imageParDefaut
    // Sinon on retourn le path qu'on a reçu
    return path.trim() ? path : APP_CONST.defaultImage;
  }
}

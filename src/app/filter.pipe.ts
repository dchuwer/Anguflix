import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie'

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(movies: Array<Movie>, filterString: string): Array<Movie> {
    return filterString == undefined ? movies : movies.filter((movies) => movies.title.toLowerCase().includes(filterString.toLowerCase()));
  }

}

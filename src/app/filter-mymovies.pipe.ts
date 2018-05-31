import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie'

@Pipe({
  name: 'filterMymovies'
})
export class FilterMymoviesPipe implements PipeTransform {

  transform(movies: Array<Movie>, filterString): Array<Movie> {
    return ( filterString.title == undefined && filterString.year == undefined) ? movies : movies.filter((movies) => 
    (filterString.title == undefined || movies.title.toLowerCase().includes(filterString.title.toLowerCase())) 
    &&
    (filterString.year == undefined || movies.year==filterString.year || filterString.year == "" ));
}
  

}

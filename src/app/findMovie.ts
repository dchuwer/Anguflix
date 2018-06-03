export class FindMovie {
    constructor() { }

    findIt(movie,arr){
        return  arr.find( x => x.id == movie.id )
    }
}

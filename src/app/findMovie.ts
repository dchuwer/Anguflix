export class FindMovie {
    constructor() { }

    findIt(movie,arr){
        console.log('entrei')
            return  arr.find( x => x.id == movie.id )
    }
}

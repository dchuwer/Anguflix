export class FindMovie {
    constructor() { }

    findIt(movie,arr){
        return  arr.find( x => x._id == movie._id )
    }
}


// Action Type 
export const ADD_MOVIES=ADD_MOVIES;
export const ADD_To_FAVOURITE=ADD_To_FAVOURITE;
export const REMOVE_FROM_FAVOURITE=REMOVE_FROM_FAVOURITE;
export const SET_SHOW_FAVOURITES=SET_SHOW_FAVOURITES;
// Action Creater
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies 
      }
}
export function addFavourite(movie){
    return{
        type:ADD_To_FAVOURITE,
        movie // short hand
      }
}
export function removeFromFavourite(movie){
    return{
        type:REMOVE_FROM_FAVOURITE,
        movie // short hand
      }
}
export function setShowFavourite(val){
    return{
        type:SET_SHOW_FAVOURITES,
        val // short hand
      }
}
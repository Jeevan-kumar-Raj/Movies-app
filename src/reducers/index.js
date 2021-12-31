
import { combineReducers } from "redux";

import { ADD_MOVIES,
    ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITE ,
     SET_SHOW_FAVOURITES,ADD_MOVIES_TO_LIST} from "../actions";

const initialMoviesState = {
    list: [],
    favourite: [],
    showFavourites:false
};
export  function movies(state = initialMoviesState, action) {
    // if(action.type == ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites:[action.movies ,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
            const filterdArray=state.favourites.filter(
                movies=>movies.Title !==action.movies.Title);
            return {
                ...state,
                favourites:filterdArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }    

        default:
            return state;
    }
}

const initialSearchState={
    result:{

    }

};

export function search (state=initialSearchState, action){
    return state;
}

const initialRootSate={
    movies: initialMoviesState,
    serach:initialSearchState
};

// export default function rootReducer(state=initialRootSate, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.serach, action)
//     }

// }

export default combineReducers({
     movies:movies,
     search:search
});
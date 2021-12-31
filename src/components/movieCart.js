import React, { Component } from "react"; 
import { addFavourite, removeFromFavourite } from "../actions";

class movieCart extends Component {
  
    handelFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie));
    }
handelUnfavouriteClick=()=>{
    const {movie}=this.props;
    this.props.dispatch(removeFromFavourite(movie));

}

  render() {
      const {movie, isFavortite}=this.props;
    return (
     <div className="movie-cart">
         <div className="left">
             <img alt="movies-poster" src={movie.poster} />
         </div>
         <div className="right">
             <div className="title">{movie.Title}</div>
             <div className="plot">{movie.Plot}</div>
             <div className="footer">
                 <div className="rating"> {moveBy.imdbRating}</div>
                 {
                     isFavortite
                     ?
                     <button className="unfavourite-btn" onClick={this.handelUnfavouriteClick}>Unfavourite</button>
                     :
                     <button className="favourite-btn" onClick={this.handelFavouriteClick}>Favourite</button>
                 }
             </div>
         </div>
       
     </div>
    );
  }
}

export default movieCart;
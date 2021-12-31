import React from "react";
// import { data } from "../data";//You need to download
import Navbar from "./Navbar";
import MovieCart from "./movieCart";
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {
  componentDidMount(){
    // to make API call here
    // dispatch action 

    const {store}=this.props; 
    store.subscribe(()=>{
     console.log('UPDATED');
     this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getStore());
  }
   
  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();

    const index=movies.favourite.indexOf(movie);
    if(index !==-1){
      // Found movies
      return true;
    }
    return false;

  }
  onChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourite(val))
  }

  render(){
    const {movies}=this.props.store.getState();
  const { list ,favourite, showFavourites } =movies;
  const displayMovies=showFavourites ? favourite : list;

  console.log('RENDER'this.props.store.getState());
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'action-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies  </div>
          <div className={`tab ${showFavourites ?  'action-tab' : '' }`} onClick={()=>this.onChangeTab(true)} >Favourites</div>

        </div>
         <div className="list">
           {displayMovies.map((movie,index)=>{
             <MovieCart movie={movie}
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
               isFavortite={this.isMovieFavourite(movie)}
              
              />
           })}
       

         </div>
         { displayMovies.length==0 ? <div className="no-movies"> No movie to Display !</div> :null}
      </div>
       
    </div>
  );
  }
}

export default App;

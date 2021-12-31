import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware} from "redux";
import './index.css';
import App from './components/App';
import rootReducer from "./reducers";


// Carred fun() Eg:- function logger(obj, next ,action) ..... to call redux
// const logger=function({dispatch , getState}){
//   return function(next){
//     return function(action){
//       //middelware code
//       console.log('ACTION_TYPE:', action.type);
//       next(action);
//     }
//   }
// }

// modify logger function
const logger = ({dispatch , getState})=>(next)=>(action)=>{
  //logger code
  console.log('ACTION_TYPE:', action.type);
  next(action);

}





const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store',store);
// console.log('Before STATE',store.getState);

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });
// console.log('After STATE',store.getState);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);



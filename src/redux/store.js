import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";
import {applyMiddleware, combineReducers, createStore} from 'redux';



const rootReducer = combineReducers({
    genres:genreReducer,
    movies:movieReducer,
})




 export default createStore(rootReducer,applyMiddleware(thunk));
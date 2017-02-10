import { createStore, applyMiddleware, combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

let logger =createLogger();

let reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

let store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));


export default store;
//, applyMiddleware(createLogger)

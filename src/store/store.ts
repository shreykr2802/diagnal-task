import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import movieReducer from './reducer/movieReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    movie: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


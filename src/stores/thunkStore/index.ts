import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../../reducers/index';
import { IAppState} from '../../interfaces/app';

const loggerMiddleware = createLogger();

export const store : Store<IAppState> = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware,
	),
);

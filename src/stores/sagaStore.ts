import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { IAppState} from '../interfaces/app';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export const store : Store<IAppState> = createStore(
	rootReducer,
	applyMiddleware(
		sagaMiddleware,
		loggerMiddleware,
	),
);

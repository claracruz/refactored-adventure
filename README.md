# Weather app UI

The app implementation has been updated to use both redux-saga and redux-thunk 
(obviously not at the same time) purely for the educational purpose of comparing
this two middleware libraries for Redux.

To use the app with redux-thunk, do the following;

* Replace the imports at lines 5 & 6 in src/index.tsx with;
```ecmascript
import { store } from './stores/thunkStore/';
// import { store } from './stores/sagaStore';
```

* Replace the imports at lines 6 & 7 in src/App/index.tsk with;
```ecmascript
// import { requestWeatherData }  from '../../actions';
import { requestWeatherData }  from '../../thunks';
```

* And at line 23 & 24 also in src/App/index.tsk with;
```ecmascript
// onSearch: (cityId: string) => dispatch(requestWeatherData(cityId))
	onSearch: (cityId: string) => dispatch(onRequestWeatherData(cityId))
```

Reverse commented out code to return to saga.


## Installation
First clone to your preferred directory
```shell
git clone https://github.com/claracruz/refactored-adventure.git
```

 * then install node modules by running the following command;
```shell
cd refactored-adventure
npm i
```

## Running the app.
 * Once node modules are installed, run the command below to run the app;
 ```shell
npm run start
```

 * To run tests, use the following command;
 ```shell
npm run test
```

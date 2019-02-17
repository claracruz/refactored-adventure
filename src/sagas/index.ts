import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchWeatherData } from '../utils/requests';
import { IActionRequestWeatherData } from '../interfaces/weather';
import {
	receiveWeatherData,
	weatherDataRequestFailed
} from '../actions';
import { actionTypes } from '../constants';


export function* getWeatherData(action: IActionRequestWeatherData) {
	try {
		const response = yield call(() => fetchWeatherData(action.city));
		yield put(receiveWeatherData(response.data));
	} catch (e) {
		yield put(weatherDataRequestFailed(e));
	}
}

export function* onRequestWeatherData() {
	yield takeLatest(actionTypes.REQUEST_WEATHER_DATA, getWeatherData);
}


import { IAppComponentState } from "../interfaces/app";
import { WeatherType } from "./types";

// Could use enum instead as shown below
export enum actionTypes {
	REQUEST_WEATHER_DATA,
	RECEIVE_WEATHER_DATA,
	WEATHER_DATA_REQUEST_FAILED
}

export const APP_INITIAL_STATE : IAppComponentState = {
	error: '',
	loading: false,
	weather: [] as WeatherType[]
};

// export const REQUEST_WEATHER_DATA = 'REQUEST_WEATHER_DATA';
// export type REQUEST_WEATHER_DATA = typeof REQUEST_WEATHER_DATA;
//
// export const RECEIVE_WEATHER_DATA = 'RECEIVE_WEATHER_DATA';
// export type RECEIVE_WEATHER_DATA = typeof RECEIVE_WEATHER_DATA;
//
//
// export const WEATHER_DATA_REQUEST_FAILED = 'WEATHER_DATA_REQUEST_FAILED';
// export type WEATHER_DATA_REQUEST_FAILED = typeof WEATHER_DATA_REQUEST_FAILED;

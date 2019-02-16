import { Action } from 'redux';

export interface IWeather {
	city?: string;
	twelveAM?: string;
	sixAM?: string;
	twelvePM?: string;
	sixPM?: string;
}

export interface IActionRequestWeatherData extends Action { city: string }
export interface IActionReceiveWeatherData extends Action { data: any; }
export interface IActionFetchWeatherDataError extends Action { error: any }
export interface IActionFetchWeatherData extends
	IActionRequestWeatherData, IActionReceiveWeatherData, IActionFetchWeatherDataError {}

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Grid } from '../../components/Grid';
import { SearchInput } from '../../components/SearchInput';
import { Loading } from '../../components/Loading';
import {
	fetchWeatherData
} from '../../actions/app';
import './index.css';
import { IAppState } from '../../interfaces';
import { IAppComponentProps } from '../../interfaces';
import { ISearchComponentProps } from '../../interfaces/search';

const mapStateToProps = (state: IAppState) => {
	const { app } = state;
	return {
		error: app.error,
		loading: app.loading,
		weather: app.weather,
	};
};

const mapDispatchToProps = (dispatch: any): ISearchComponentProps => ({
	onSearch: (cityId: string) => dispatch(fetchWeatherData(cityId, 'fetch weather data'))
});

export class App extends PureComponent<IAppComponentProps> {

	onSearch = (value: string) => {
		if (value) {
			this.props.onSearch(value);
		}
	};

	render() {
		const { error, loading, weather } = this.props;

		return (
			<div className="App">
				<header className="App-header">
					<h1>24 hour weather forecast</h1>
				</header>
				<section>
					<SearchInput onSearch={this.onSearch} />
					<Grid
						className="weather-grid"
						items={weather} />
				</section>
				{
					loading &&
					<Loading />
				}
				{
					error &&
					<div className="error">{error}</div>
				}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

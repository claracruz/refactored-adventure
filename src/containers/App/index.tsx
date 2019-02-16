import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Grid } from '../../components/Grid';
import { SearchInput } from '../../components/SearchInput';
import { Loading } from '../../components/Loading';
import { requestWeatherData }  from '../../actions';
// import { onRequestWeatherData }  from '../../thunks';
import './index.css';
import { IAppState } from '../../interfaces/app';
import { IAppComponentProps } from '../../interfaces/app';
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
	onSearch: (cityId: string) => dispatch(requestWeatherData(cityId))
	// onSearch: (cityId: string) => dispatch(onRequestWeatherData(cityId))
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
					{
						error !== '' &&
						<div className="error">{error}</div>
					}
					<Grid
						className="weather-grid"
						items={weather} />
				</section>
				{
					loading &&
					<Loading />
				}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

import { connect } from 'react-redux';
import { App } from '../../components/App';
import { IAppState } from '../../interfaces/app';
import { ISearchComponentProps } from '../../interfaces/search';
import { requestWeatherData }  from '../../actions';
// import { onRequestWeatherData }  from '../../thunks';

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

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;

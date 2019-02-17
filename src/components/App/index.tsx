import React, { PureComponent } from 'react';
import { Grid } from '../Grid';
import { SearchInput } from '../SearchInput';
import { Loading } from '../Loading';
import './index.css';
import { IAppComponentProps } from '../../interfaces/app';


export const App = ({ error, loading, onSearch, weather } : IAppComponentProps) => {

	const handleSearch = (value: string) => {
		if (value) {
			onSearch(value);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>24 hour weather forecast</h1>
			</header>
			<section>
				<SearchInput onSearch={handleSearch} />
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
};

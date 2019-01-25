import React, { PureComponent } from 'react';
import { IWeather } from '../../interfaces/weather';
import { IGridComponentProps } from '../../interfaces/grid';
import './index.css';

export class Grid extends PureComponent<IGridComponentProps> {

	displayWeatherData = () => {
		const { items } = this.props;

		return items.map((item: IWeather, index: number) => {
			return (
				<tr key={`${item.city}_${index}`}>
					<td>{item.city}</td>
					<td>{item.twelveAM}</td>
					<td>{item.sixAM}</td>
					<td>{item.twelvePM}</td>
					<td>{item.sixPM}</td>
				</tr>
			);
		})
	};

	render() {
		const {className} = this.props;

		return (
			<table className={`${className} grid`}>
				<thead>
					<tr>
						<th>City</th>
						<th>12am</th>
						<th>6am</th>
						<th>12pm</th>
						<th>6pm</th>
					</tr>
				</thead>
				<tbody>{this.displayWeatherData()}</tbody>
			</table>
		);
	}
}

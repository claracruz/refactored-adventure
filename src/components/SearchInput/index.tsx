import React, {PureComponent} from 'react';
import { ISearchComponentProps } from '../../interfaces/search';
import './index.css';

interface ISearchComponentState {
	searchTerm: string;
}

export class SearchInput extends PureComponent<ISearchComponentProps, ISearchComponentState> {

	constructor(props: ISearchComponentProps) {
		super(props);
		this.state = {
			searchTerm: ''
		}
	}

	handleButtonClick = () => {
		this.props.onSearch(this.state.searchTerm);
		this.setState({
			searchTerm: ''
		});
	};

	handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({
			searchTerm: e.currentTarget.value
		});
	};

	render() {
		return (
			<div className="search-input">
				<input
					value={this.state.searchTerm}
					onKeyPress={this.handleChange}
					onChange={this.handleChange}
					placeholder="Search a city"
					type="text" />
				<button onClick={this.handleButtonClick}>Search</button>
			</div>
		);
	}
}

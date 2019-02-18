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

	onSubmit = () => {
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

	handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			this.onSubmit();
		}
	};

	render() {
		return (
			<div className="search-input">
				<label>
					<input
						value={this.state.searchTerm}
						onKeyDown={this.handleKeyDown}
						onChange={this.handleChange}
						placeholder="Search a city"
						type="text" />
				</label>
				<button onClick={this.onSubmit}>Search</button>
			</div>
		);
	}
}

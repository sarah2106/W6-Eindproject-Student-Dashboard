import React from 'react';
import StudentData from './StudentData';
import BarChartData from './BarChartData';
//import StudentPagesDropDown from './StudentPagesDropDown';
class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			StudentData,
			Week: 'W1',
			DataType: 'allData'
		};
		this.onSubmitWeekHandler = this.onSubmitWeekHandler.bind(this);
		this.onSubmitDataHandler = this.onSubmitDataHandler.bind(this);
	}
	filterDataByName() {
		const filtered = this.state.StudentData.filter(name =>
			name.includes('Evelyn')
		);
		console.log(filtered);
	}
	onSubmitDataHandler(event) {
		console.log('data got clicked:', event.target.value);
		event.preventDefault();
		const dropDown = event.target.value;
		this.setState(prevState => {
			return {
				DataType: dropDown
			};
		});
	}
	onSubmitWeekHandler(event) {
		console.log('week got clicked:', event.target.value);
		event.preventDefault();
		const dropDown = event.target.value;
		this.setState(prevState => {
			return {
				Week: dropDown
			};
		});
	}

	render() {
		return (
			<div className="whatisthis">
				<BarChartData
					dataType={this.state.DataType}
					week={this.state.Week}
					onSubmitWeekHandler={this.onSubmitWeekHandler}
					onSubmitDataHandler={this.onSubmitDataHandler}
					data={this.state.StudentData}
				/>
			</div>
		);
	}
}

export default Container;

import React from 'react';
import StudentData from './StudentData';
import StudentPagesDropDown from './StudentPagesDropDown';
import StudentBarChartAverage from './StudentBarChartAverage';
class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			StudentData,
			Student: 'Evelyn'
		};
		this.selectStudentHandler = this.selectStudentHandler.bind(this);
	}
	selectStudentHandler(event) {
		//console.log('submit got clicked yo', event.target.value);
		event.preventDefault();
		const dropDown = event.target.value;

		console.log(dropDown);
		this.setState(prevState => {
			return {
				Student: dropDown
			};
		});
	}

	render() {
		return (
			<div className="Student-Page">
				<h1>{this.state.Student}</h1>
				<StudentPagesDropDown
					selectStudentHandler={this.selectStudentHandler}
					data={this.state.StudentData}
					student={this.state.Student}
				/>
				<StudentBarChartAverage
					data={this.state.StudentData}
					student={this.state.Student}
					
				/>
                
				<p>slide over de grafieken om alle opdrachten te zien..</p>
			</div>



		);
	}
}

export default Container;
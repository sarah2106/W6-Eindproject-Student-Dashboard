import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryGroup,
	VictoryAxis,
	VictoryLegend
} from 'victory';

const BarChartData = props => {
	const AssignmentNames = props.data.map(item => item.assignment);

	const assignmentNamesFiltered = AssignmentNames.filter(
		(name, index, names) => {
			return names.indexOf(name) === index;
		}
	);

	const filteredByWeek = assignmentNamesFiltered.filter(word =>
		word.includes(props.week)
	);

	console.log(props.dataType);
	console.log(props);
	const AssignmentAverages = filteredByWeek.map(name => {
		const AssignmentValues = props.data.filter(
			item => item.assignment === name
		);

		//if Data === "difficulty" return difficultyAverage
		//if Data === "fun" return funAverage
		//if Data === 'allData' return funAverage
		const difficultyAverage =
			props.dataType !== 'fun'
				? AssignmentValues.reduce(
						(prev, curr) => prev + curr.difficultyRating,
						0
				  ) / AssignmentValues.length
				: 0;
		const funAverage =
			props.dataType !== 'difficulty'
				? AssignmentValues.reduce((prev, curr) => prev + curr.funRating, 0) /
				  AssignmentValues.length
				: 0;

		return {
			assignment: name,
			difficultyAverage: difficultyAverage,
			funAverage: funAverage
		};
	});

	return (
		<div>
			<div className="Form-Div">
				<form>
					<select name="week" onChange={props.onSubmitWeekHandler}>

				        <option value="W1"> Week one</option>
						<option value="W2">Week Two</option>
						<option value="W3">Week Three</option>
						<option value="W4">Week Four</option>
						<option value="W5">Week Five</option>
						<option value="W6">Week Six</option>
						<option value="W">Week All</option>

					</select>
					<select name="dataSelector" onChange={props.onSubmitDataHandler}>
						<option value="allData">Compare Fun / Difficulty </option>
						<option value="fun"> Fun</option>
						<option value="difficulty"> Difficulty</option>
					</select>
				</form>
			</div>

			<VictoryChart height={200} width={850}>
				<VictoryAxis
					style={{
						tickLabels: {
							fontSize: 5,
							angle: 20
						}
					}}
				/>
				<VictoryLegend
					style={{
						labels: {
							fontSize: 3
						}
					}}
					x={50}
					y={5}
					orientation="horizontal"
					gutter={10}
					data={[
						{ name: 'FUN', symbol: { fill: '#8cff1c' } },
						{
							name: 'DIFFICULTY',
							symbol: { fill: '#f80000'}
						}
					]}
				/>
				<VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 5 } }} />
				<VictoryGroup offset={10}>
					<VictoryBar
						animate={{ duration: 500 }}
						color="#8cff1c"
						orientation="left"
						barWidth={10}
						data={AssignmentAverages}
						x="assignment"
						y="funAverage"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
					<VictoryBar
						color="#f80000"
						orientation="right"
						barWidth={10}
						data={AssignmentAverages}
						x="assignment"
						y="difficultyAverage"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default BarChartData;

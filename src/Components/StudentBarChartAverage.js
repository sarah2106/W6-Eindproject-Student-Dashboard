import React from 'react';
import {
	VictoryBar,
	VictoryChart,
	VictoryGroup,
	VictoryAxis,
	VictoryZoomContainer,
	VictoryLegend
} from 'victory';

const StudentBarChartAverage = props => {
	console.log(props.data);
	console.log(props.student);
	const studentNameData = props.data.filter(
		word => word.name === props.student
	);
	console.log(studentNameData);
	return (
		<div>
			<VictoryChart
				height={150}
				width={450}
				containerComponent={
					<VictoryZoomContainer
						allowZoom={false}
						zoomDomain={{ x: [0, 10], y: [0, 5] }}
					/>
				}
			>
				<VictoryAxis
					style={{
						tickLabels: {
							fontSize: 3
						}
					}}
				/>
				<VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 3 } }} />
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
							symbol: { fill: '#f80000' }
						}
					]}
				/>
				<VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 3 } }} />
				<VictoryGroup offset={10}>
					<VictoryBar
						animate={{ duration: 500 }}
						color="#8cff1c"
						orientation="left"
						barWidth={10}
						data={studentNameData}
						x="assignment"
						y="funRating"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
					<VictoryBar
						animate={{ duration: 500 }}
						color="#f80000"
						orientation="right"
						barWidth={10}
						data={studentNameData}
						x="assignment"
						y="difficultyRating"
						/* tickValues={[1, 2, 3, 4, 5]} */
					/>
				</VictoryGroup>
			</VictoryChart>
		</div>
	);
};

export default StudentBarChartAverage;

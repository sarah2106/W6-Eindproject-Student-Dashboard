import React from 'react';
import MakeDropDownItems from './MakeDropDownItems';

const StudentPagesDropDown = props => {
	const namesNames = props.data.map(item => item.name);
	const namesFiltered = namesNames.filter((name, index, names) => {
		return names.indexOf(name) === index;
	});
	const dropDownItems = namesFiltered.map(item => (
		<MakeDropDownItems name={item} />
	));
	//console.log('StudentPagesDropDown', props);
	return (
		<select onChange={props.selectStudentHandler} name="students">
			{dropDownItems}
		</select>
	);
};

export default StudentPagesDropDown;

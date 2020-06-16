import React from 'react';

const MakeDropDownItems = props => {
	//console.log('StudentPagesDropDown', props);
	return <option value={props.name}>{props.name}</option>;
};

export default MakeDropDownItems;

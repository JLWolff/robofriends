import React from 'react';

const scroll = (props) => {
	return(
		<div style={{overflowY: 'scroll', height:'490px'}}>
			{props.children}
		</div>
	); 
};

export default scroll;
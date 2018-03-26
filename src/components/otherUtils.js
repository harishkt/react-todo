import React from 'react';

export const RemoveAll = ({ handleRemoveAll }) => {
	return(
		<button
			onClick={handleRemoveAll}
		>
			Remove All Items
		</button>
	);
}

export const ResetList = ({ handleReset }) => {
	return(
		<button
			onClick={handleReset}
		>
			Reset ToDO list
		</button>
	);
}

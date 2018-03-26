import React from 'react';

const SearchBox = ({ value, handleSubmit, handleChange }) => {
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={value}
					onChange={handleChange}
				/>
				<button
					type="submit"
				>
				ADD To list
				</button>
			</form>
		</div>
	);
}

export default SearchBox;
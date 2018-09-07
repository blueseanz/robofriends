import React from 'react';

const SearchBox = ({searchfiled, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--greenbg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;
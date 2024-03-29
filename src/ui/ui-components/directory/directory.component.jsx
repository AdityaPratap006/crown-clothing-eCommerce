import React  from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../../redux/directory/directory.selectors';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';


const renderMenuItems = (sections) => {
	return  sections.map(({id,...otherSectionProps})=>{

		return (
				<MenuItem 
				key={ id} 
				{...otherSectionProps}
				/>
			)
	})	
}

const  Directory  = ({sections}) => {
	
	return (
			<div className='directory-menu'>
				{renderMenuItems(sections)}
			</div>
		);
	 
}

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
}) 

export default connect(
	mapStateToProps
)(Directory);
import React  from 'react';
import './directory.styles.scss';
import sectionData from './directory.data.js';
import MenuItem from '../menu-item/menu-item.component.jsx';

export  default class Directory extends React.Component{

	constructor(){
		super();

		this.state={
			sections: sectionData,
			
			
		}
	}

	
	

	renderMenuItems = () => {
		return this.state.sections.map(({id,...otherSectionProps},index)=>{

			return (
					<MenuItem 
					key={ id} 
					{...otherSectionProps}
					/>
				)
		})	
	}


	render() {
		return (
			<div className='directory-menu'>
				{this.renderMenuItems()}
			</div>
		);
	}
}
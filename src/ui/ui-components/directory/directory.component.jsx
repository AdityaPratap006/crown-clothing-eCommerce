import React  from 'react';
import './directory.styles.scss';
import sectionData from './directory.data.js';

import MenuItem from '../menu-item/menu-item.component.jsx';

export  default class Directory extends React.Component{

	constructor(){
		super();

		this.state={
			sections:sectionData
		}
	}

	renderMenuItems = () => {
		return this.state.sections.map((section,index)=>{

			return (
					<MenuItem 
					key={section.id} 
					title={section.title}
					imageUrl={section.imageUrl}
					size={section.size}
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
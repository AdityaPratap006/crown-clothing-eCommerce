import React from 'react';

import Directory from '../../ui-components/directory/directory.component.jsx';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
	<HomePageContainer className = 'homepage'>
		<Directory />
	</HomePageContainer>
	
);


export default HomePage;
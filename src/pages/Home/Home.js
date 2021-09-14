import React from 'react';
import './Home.scss';
import TodoCard from '../../components/structure/TodoCard/TodoCard';

function Home() {
	return (
		<div className='section-center content'>
			<div className='container'>
				<TodoCard />
			</div>
		</div>
	);
}

export default Home;

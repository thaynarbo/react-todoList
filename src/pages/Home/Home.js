import React from 'react';
import './Home.scss';
import TodoCard from '../../components/structure/TodoCard/TodoCard';

function Home() {
	return (
		<div className='section-center'>
			<div className='container'>
				<TodoCard></TodoCard>
			</div>
		</div>
	);
}

export default Home;

import React, { useState } from 'react';
import './Home.scss';
import TodoCard from '../../components/structure/TodoCard/TodoCard';
import { TaskContext } from '../../components/shared/TaskContext/TaskContext';
function Home() {
	const [taskC, setTasksC] = useState(0);

	return (
		<div className='section-center content'>
			<div className='container'>
				<TaskContext.Provider value={{ taskC, setTasksC }}>
					<TodoCard />
				</TaskContext.Provider>
			</div>
		</div>
	);
}

export default Home;

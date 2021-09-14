import React, { useState, useEffect } from 'react';
import './TodoCard.scss';
import Buttons from '../Buttons/Buttons';
import Task from '../Task/Task';
import { Api } from '../../../apis/api';

function TodoCard() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTask();
	}, []);

	const getTask = async () => {
		const response = await Api.fetchGet();
		const data = await response.json();
		setTasks(data);
	};

	return (
		<div className='card'>
			{tasks.map((task, index) => (
				<Task task={task} key={task._id} />
			))}

			<Buttons />
		</div>
	);
}
export default TodoCard;

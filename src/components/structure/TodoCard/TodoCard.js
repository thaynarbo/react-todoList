import React, { useState, useEffect } from 'react';
import './TodoCard.scss';
import Buttons from '../Buttons/Buttons';
import Task from '../Task/Task';

function TodoCard() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTask();
	}, []);

	const url = 'https://backend-todolist-thay.herokuapp.com/todo';

	const getTask = async () => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
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

import React, { useState, useEffect, useContext } from 'react';
import './TodoCard.scss';
import { TaskContext } from '../../shared/TaskContext/TaskContext';
import Buttons from '../Buttons/Buttons';
import Task from '../Task/Task';
import { Api } from '../../../apis/api';

function TodoCard() {
	const { taskC } = useContext(TaskContext);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTask();
	}, []);
	// Esse useEffect está sendo usado para atualizar a página quando o elemento taskC muda. O taskC está vindo do componente global
	// utilizei o taskC dentro deste e do componente Task já que gostaria de alterar o valor de taskC caso o componente fosse deletado do banco de dados e o componente task é o responsável pela deleção.
	useEffect(() => {
		getTask();
	}, [taskC]);

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

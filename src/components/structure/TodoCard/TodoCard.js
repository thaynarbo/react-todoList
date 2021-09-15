import React, { useState, useEffect, useContext } from 'react';
import './TodoCard.scss';
import { TaskContext } from '../../shared/TaskContext/TaskContext';
import Buttons, { ButtonForm } from '../Buttons/Buttons';
import Task from '../Task/Task';
import { Api } from '../../../apis/api';

function TodoCard() {
	const { taskC } = useContext(TaskContext);
	const [tasks, setTasks] = useState([]);
	const [priority, setPriority] = useState(false);

	useEffect(() => {
		getTask();
	}, []);
	// Esse useEffect está sendo usado para atualizar a página quando o elemento taskC muda. O taskC está vindo do componente global
	// utilizei o taskC dentro deste e do componente Task já que gostaria de alterar o valor de taskC caso o componente fosse deletado do banco de dados e o componente task é o responsável pela deleção.
	useEffect(() => {
		getTask();
	}, [taskC]);

	useEffect(() => {
		if (priority) {
			getTaskbyPriority();
		} else {
			getTask();
		}
	}, [priority]);

	const getTask = async () => {
		const response = await Api.fetchGet();
		const data = await response.json();
		setTasks(data);
		return data;
	};
	const getTaskbyPriority = async () => {
		const response = await Api.fetchGetSorted();
		const data = await response.json();
		setTasks(data);
	};

	return (
		<div className='card'>
			<div className='order-btns-container'>
				<button
					className='order-btn'
					onClick={() => {
						setPriority(false);
					}}
				>
					Criação
				</button>
				<button
					className='order-btn'
					onClick={() => {
						setPriority(true);
					}}
				>
					Prioridade
				</button>
			</div>
			{tasks.map((task, index) => (
				<Task task={task} key={task._id} />
			))}
			<Buttons />
		</div>
	);
}
export default TodoCard;

import React from 'react';
import './Task.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Api } from '../../../apis/api';

function Task(props) {
	const task1 = props.task;
	const id = task1._id;
	const history = useHistory();
	const submit = (evento) => {
		evento.preventDefault();

		confirmAlert({
			title: 'Excluindo item',
			message: 'Você tem certeza que quer deletar a tarefa?',
			buttons: [
				{
					label: 'Yes',
					onClick: async () => {
						const resposta = await Api.fetchDelete(id);
					},
				},
				{
					label: 'No',
					onClick: () => history.push('/'),
				},
			],
		});
	};

	return (
		<div className='task'>
			<h2>{task1.titulo}</h2>
			<div className='icons'>
				<div className='edit-btn'>
					<Link to={`/view/${task1._id}`} className='eye-icon'>
						<FontAwesomeIcon
							icon={faEye}
							color='rgba(240, 248, 255, 0.8);'
						/>
					</Link>
				</div>

				<div className='delete-btn' onClick={submit}>
					<FontAwesomeIcon icon={faTrash} />
				</div>
			</div>
		</div>
	);
}

export default Task;

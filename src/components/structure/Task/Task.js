import React from 'react';
import './Task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Task(props) {
	const task1 = props.task;
	return (
		<div className='task'>
			<h2>{task1.titulo}</h2>
			<div className='icons'>
				<div className='edit-btn'>
					<FontAwesomeIcon icon={faPen} />
				</div>
				<div className='delete-btn'>
					<FontAwesomeIcon icon={faTrash} />
				</div>
			</div>
		</div>
	);
}

export default Task;

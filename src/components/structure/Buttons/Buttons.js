import React from 'react';
import './Buttons.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function Buttons() {
	return (
		<>
			<Link to='/addTask' className='btn'>
				<div className='icon-container'>
					<FontAwesomeIcon icon={faPlus} className='plus' />
				</div>
			</Link>
		</>
	);
}

export function ButtonForm(props) {
	return (
		<>
			<button
				className='btn-enviar'
				type={props.type}
				onClick={props.onClick}
			>
				{props.name}
			</button>
		</>
	);
}
export default Buttons;

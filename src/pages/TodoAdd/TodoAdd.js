import React, { useState } from 'react';
import './TodoAdd.scss';
import { Link } from 'react-router-dom';
import { Api } from '../../apis/api';
import DatePicker from 'react-datepicker';
import { ButtonForm } from '../../components/structure/Buttons/Buttons';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns/esm';

function TodoAdd(props) {
	const [startDate, setStartDate] = useState(new Date());
	const handleSubmit = async (evento) => {
		evento.preventDefault();

		const titulo = evento.target.titulo.value;
		const descricao = evento.target.descricao.value;
		const status = evento.target.status.value;
		const prioridade = parseInt(evento.target.prioridade.value);
		const prazo = format(startDate, 'dd/MM/yyyy');

		const Task = {
			titulo: titulo,
			descricao: descricao,
			status: status,
			prioridade: prioridade,
			prazo: prazo,
		};

		const response = await Api.fetchPost(Task);
		const data = await response;
	};

	const submit = () => {
		confirmAlert({
			title: 'Confirme para adicionar',
			message: 'Você tem certeza que quer adicionar uma nova tarefa?',
			buttons: [
				{
					label: 'Sim',
					onClick: () => props.history.push('/'),
				},
				{
					label: 'Não',
					onClick: () => props.history.push('/addTask'),
				},
			],
		});
	};

	return (
		<div className='section-center form-center'>
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='titulo'>Titulo</label>
				<input type='text' name='titulo' id='titulo' />
				<label htmlFor='descricao'>Descrição</label>
				<input type='text' name='descricao' id='descricao' />
				<div className='status-container'>
					<label>Status</label>
					<div className='btn-container'>
						<div className='item'>
							<input
								className='radio-btn'
								type='radio'
								name='status'
								value='fazer'
								id='fazer'
							/>
							<label htmlFor='fazer' className='label'>
								fazer
							</label>
						</div>
						<div className='item'>
							<input
								type='radio'
								name='status'
								value='fazendo'
								id='fazendo'
								className='radio-btn'
							/>
							<label htmlFor='fazendo' className='label'>
								fazendo
							</label>
						</div>
						<div className='item'>
							<input
								type='radio'
								name='status'
								value='feito'
								id='feito'
								className='radio-btn'
							/>
							<label htmlFor='feito' className='label'>
								feito
							</label>
						</div>
					</div>
				</div>
				<div className='status-container'>
					<label>Prioridade</label>
					<div className='btn-container'>
						<div className='item'>
							<input
								type='radio'
								name='prioridade'
								value='1'
								id='baixa'
								className='radio-btn'
							/>
							<label htmlFor='baixa' className='label'>
								baixa
							</label>
						</div>
						<div className='item'>
							<input
								type='radio'
								name='prioridade'
								value='2'
								id='media'
								className='radio-btn'
							/>
							<label htmlFor='media' className='label'>
								média
							</label>
						</div>
						<div className='item'>
							<input
								type='radio'
								name='prioridade'
								value='3'
								id='alta'
								className='radio-btn'
							/>
							<label for='alta' className='label'>
								alta
							</label>
						</div>
					</div>
				</div>

				<label>Prazo</label>
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					dateFormat='dd/MM/yyyy'
					minDate={new Date()}
				/>
				<div className='btn-container btn-section'>
					<Link to='/'>
						<ButtonForm name='Cancelar' />
					</Link>
					<ButtonForm name='Enviar' type='submit' onClick={submit} />
				</div>
			</form>
		</div>
	);
}

export default TodoAdd;

import React, { useState, useEffect } from 'react';
import './TodoEdit.scss';
import { Link } from 'react-router-dom';
import { Api } from '../../apis/api';
import DatePicker from 'react-datepicker';
import { ButtonForm } from '../../components/structure/Buttons/Buttons';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'react-datepicker/dist/react-datepicker.css';

const TodoEdit = (props) => {
	const [startDate, setStartDate] = useState(new Date());
	const id = props.match.params.id;
	const [fields, setFields] = useState({});

	const getTaskById = async () => {
		const response = await Api.fetchGetById(id);
		const data = await response.json();
		setFields(data);
	};

	useEffect(() => {
		getTaskById();
	}, []);

	const handleFieldsChange = (evento) => {
		const newValues = { ...fields };
		newValues[evento.target.name] = evento.target.value;
		setFields(newValues);
	};

	const handleSubmit = async (evento) => {
		evento.preventDefault();
		const dados = { ...fields };
		const result = await Api.fetchPut(dados, id);
		const response = await result.json();
		props.history.push('/');
	};

	const submit = () => {
		confirmAlert({
			title: 'Atualização',
			message: 'Você quer mesmo atualizar?',
			buttons: [
				{
					label: 'Sim',
					onClick: () => props.history.push('/'),
				},
				{
					label: 'Não',
					onClick: () => props.history.push(`/editTask/${id}`),
				},
			],
		});
	};

	return (
		<div className='section-center form-center'>
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='titulo'>Titulo</label>
				<input
					type='text'
					name='titulo'
					id='titulo'
					value={fields.titulo}
					onChange={handleFieldsChange}
				/>
				<label htmlFor='descricao'>Descrição</label>
				<input
					type='text'
					name='descricao'
					id='descricao'
					value={fields.descricao}
					onChange={handleFieldsChange}
				/>
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
								onChange={handleFieldsChange}
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
								onChange={handleFieldsChange}
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
								onChange={handleFieldsChange}
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
								onChange={handleFieldsChange}
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
								onChange={handleFieldsChange}
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
								onChange={handleFieldsChange}
							/>
							<label for='alta' className='label'>
								alta
							</label>
						</div>
					</div>
				</div>

				<label htmlFor='data'>Prazo</label>
				<DatePicker
					id='data'
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
};

export default TodoEdit;

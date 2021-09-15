import React, { useEffect, useState } from 'react';
import './TodoDetail.scss';
import DetailInfo from '../../components/structure/DetailInfo/DetailInfo';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../../components/structure/Buttons/Buttons';
import { Api } from '../../apis/api';

function TodoDetail(props) {
	const [task, setTask] = useState({});
	useEffect(() => {
		getTaskById();
	}, []);

	const id = props.match.params.id;

	const getTaskById = async () => {
		const response = await Api.fetchGetById(id);
		const data = await response.json();
		setTask(data);
	};

	switch (task.prioridade) {
		case 1:
			task.prioridade = 'baixa';
			break;
		case 2:
			task.prioridade = 'média';
			break;
		case 3:
			task.prioridade = 'alta';
			break;
	}

	return (
		<div className='section-center detail-section'>
			<div className='detail-container'>
				<h1>Detalhes da tarefa</h1>
				<div>
					<DetailInfo
						titulo={task.titulo}
						status={task.status}
						desc={task.descricao}
						prioridade={task.prioridade}
						dataCriacao={new Date(task.dataCriacao).toLocaleString(
							'pt-BR'
						)}
						prazo={task.prazo}
						className='detail-info'
					/>
				</div>
				<div>
					<Link to={`/editTask/${task._id}`}>
						<ButtonForm name='Editar' />
					</Link>
					<Link to='/'>
						<ButtonForm name='voltar' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default TodoDetail;

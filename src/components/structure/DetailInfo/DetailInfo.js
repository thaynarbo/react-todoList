import React from 'react';

function DetailInfo(props) {
	return (
		<div>
			<h2>Título</h2>
			<p>{props.titulo}</p>
			<h2>Descrição:</h2>
			<p>{props.desc}</p>
			<h2>Status:</h2>
			<p>{props.status}</p>
			<h2>Prioridade</h2>
			<p>{props.prioridade}</p>
			<h2>Prazo</h2>
			<p>{props.prazo}</p>
			<h2>Data de criação:</h2>
			<p>{props.createdAt}</p>
		</div>
	);
}

export default DetailInfo;

export const Api = {
	url: 'https://backend-todolist-thay.herokuapp.com/todo',
	fetchGet: () => fetch(Api.url),
	fetchGetById: (id) => fetch(Api.url + '/taskID/' + id),
	fetchPost: (body) => {
		return fetch(Api.url + '/new', {
			method: 'POST',
			headers: new Headers({
				'Content-type': 'application/json',
			}),
			body: JSON.stringify(body),
		});
	},
	fetchDelete: (id) => {
		return fetch(Api.url + '/delete/' + id, {
			method: 'DELETE',
		});
	},
	fetchPut: (body, id) => {
		return fetch(Api.url + '/update/' + id, {
			method: 'PUT',
			headers: new Headers({
				'Content-type': 'application/json',
			}),
			body: JSON.stringify(body),
		});
	},
};

import axios from 'axios';

function setConfig() {
    const token = localStorage.getItem('token');

    return {
        url: 'http://localhost:4000/api/todo',
        token: token,
        config: {
            headers: {
                'authorization': 'Bearer ' + token,
            }
        }
    }
}
export function addTodoService(todo) {
    let api = setConfig();
    return axios.post(api.url, todo, api.config);
}

export function deleteAllTodoService() {
    let api = setConfig();
    return axios.delete(api.url, api.config)
}

export function getTodosService() {
    let api = setConfig();
    return axios.get(api.url, api.config);
}

export function deleteTodoService(id) {
    let api = setConfig();
    return axios.delete(`${api.url + '/' + id}`, api.config)
}
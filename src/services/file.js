import axios from 'axios';

function setConfig() {
    const token = localStorage.getItem('token');

    return {
        url: 'http://localhost:4000/api/upload',
        config: {
            headers: {
                'authorization': 'Bearer ' + token,
            }
        }
    }
}

export function showFilesService() {
    let api = setConfig();
    return axios.get(api.url);
}

export function uploadFileService(file) {
    let api = setConfig();
    const formData = new FormData();
    let config = api.config;
    config.headers['content-type'] = 'multipart/form-data';
    formData.append('file', file);
    return axios.post(api.url, formData, config);
}


export function downloadFile(fileName) {
    let api = setConfig();
    return axios.get(api.url + '/' + fileName);
}

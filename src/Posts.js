import axios from 'axios';

export const getPost = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => res.data);
}
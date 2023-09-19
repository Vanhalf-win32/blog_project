import axios from "axios";

export default class PostService {
    static async getAll(limit, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    }

    static async getComments(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }


    static async getUsers(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        return response;
        
    }
    static async getGender(users) {
        const response = await axios.get(`https://api.genderize.io/?name=${users}`);
        return response;
    }
}


import axios from "axios";

const USERS_API_REST_URL = 'http://localhost:8080/api/user';

class UserService{
    getUsers(){
        return axios.get(USERS_API_REST_URL);
    }
}

export default new UserService();
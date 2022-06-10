import axios from 'axios';

class UserRegistrationService{
    baseUrl = 'http://localhost:8080/bookstoreApi'

    registerUser = (user) => {
        console.log(user);
        return axios.post(`${this.baseUrl}`+"/register",user);
    }

    loginUser = (user) => {
        console.log(user);
        return axios.post(`${this.baseUrl}`+"/login",user);
    }
}

export default new UserRegistrationService();
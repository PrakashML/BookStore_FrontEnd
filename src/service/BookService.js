import axios from 'axios';
class Bookservice{
    loginUser(userData){
        return axios.post("http://localhost:8080/users/login",userData)
    }

}

export default new Bookservice();
import axios from "axios";

class BookService {
  baseUrl = "http://localhost:8080/book";
  token = localStorage.getItem('token');

  getAllBooks() {
    
    return axios.get(`${this.baseUrl}` + "/getAllBooks");
  }
//for request header authorisation
  authAxios = axios.create({
    baseURL:this.baseUrl,
    headers: {
        token:`${this.token}`
    }
  })

  addBook(userData) {
    console.log(this.token)
    // return authAxios.post(`${this.baseUrl}` + "/addBook/",userData);
    return this.authAxios.post(`/addBook/`,userData);
  }
}

export default new BookService();

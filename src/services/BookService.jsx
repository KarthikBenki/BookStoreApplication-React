import axios from "axios";


class BookService {
    baseUrl = 'http://localhost:8080/book'


    getAllBooks() {
        return axios.get(`${this.baseUrl}`+"/getAllBooks");
    }
}

export default new BookService();
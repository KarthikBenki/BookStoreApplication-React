import axios from 'axios'

class BookService{
    baseUrl = "http://localhost:8080/cartApi";


    authAxios = axios.create({
        baseURL:this.baseUrl,
        headers: {
            // token:`${this.token}`
            token:"test"
        }
      })

    addBookToCart(bookId){
        return this.authAxios.post('/addBookToCart/'+bookId)
    }

    getCartDetails(){
        return axios.get(`${this.baseUrl}`+"/getAll")
    }
}

export default new BookService();
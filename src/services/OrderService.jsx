import axios from 'axios'

class OrderService{
    baseUrl = "http://localhost:8080/orderApi";

    placeOrder(orderItem){
      return  axios.post(`${this.baseUrl}`+"/placeOrder",orderItem);
    }

}

export default new OrderService();
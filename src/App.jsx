import "./App.css";
import Login from "./components/User/login/Login";
import SignUp from "./components/User/signUp/SignUp";
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ResetPassword from "./components/User/reset password/ResetPassword";
import ForgotPassword from "./components/User/forgot password/ForgotPassword";
import Home from "./components/User/home/Home";
import AddBook from "./components/Book/AddBook/AddBook";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/'  component={Home}></Route>
      <Route path='/signUp' component={SignUp}></Route>
      <Route path='/resetPassword' component={ResetPassword}></Route>
      <Route path='/forgotPassword' component={ForgotPassword}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/addBook' component={AddBook}></Route>
      {/* <Route exact path="/form/:id" component={Form}></Route> */}
    </Switch>
 </BrowserRouter>

 

  );
}

export default App;

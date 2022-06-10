import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter,Route,Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login}></Route>
      <Route path='/'  component={SignUp}></Route>
      <Route path='/signUp' component={SignUp}></Route>
      {/* <Route exact path="/form/:id" component={Form}></Route> */}
    </Switch>
 </BrowserRouter>
  );
}

export default App;

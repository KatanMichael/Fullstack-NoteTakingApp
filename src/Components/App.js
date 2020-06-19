import React from 'react';
import './App.css';
import Client from '../Client/Client';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from "./LoginScreen"
import MainScreen from "./MainScreen"
import {BrowserRouter as Router, NavLink, Link, Switch} from "react-router-dom"


const client = new Client();
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = 
    {
      signIn: false,
      userId : "",
      userName:""

    }
    this.users = []

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(id, firstName)
  {
    console.log("User Id: ",id);

    this.setState(
      {
        signIn : true,
        userId: id,
        userName: firstName
      }
    )
  }

  componentDidMount()
  {

  }


  render()
  {
    if(this.state.signIn === true)
    {
      return(
        <MainScreen userId = {this.state.userId} userName = {this.state.userName}/> 
      )
    }else{
      return (
        <LoginScreen handleLogin = {this.handleLogin}/>
      )
    }
  }

}

export default App;

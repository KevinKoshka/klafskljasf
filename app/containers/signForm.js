import React from 'react';
import $ from 'jquery';

class SignForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username : "",
      password : ""
    }

    this.onLogIn = this.onLogIn.bind(this);
  }

  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username"  onChange={(e) => this.setState({username : e.target.value})} />
        <input type="password" name="password" placeholder="••••••" onChange={(e) => this.setState({password : e.target.value})} />
        <input type="submit" value="Log In" onClick={(e) => this.onLogIn(e)} />
      </form>
    );
  }

  onLogIn(e) {
    e.preventDefault();
    $.ajax({
      method : 'POST',
      url : '/api/auth',
      data : {
        username : this.state.username,
        password : this.state.password
      }
    }).done(function(data){
      console.log(data);
    });
  }
}

export default SignForm;
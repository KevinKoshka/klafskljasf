import React from 'react';
import $ from 'jquery';

class SignForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user : {
        username : "",
        password : ""
      }
    }

    this.onLogIn = this.onLogIn.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username"  onChange={(e) => this.usernameChange(e)} />
        <input type="password" name="password" placeholder="••••••" onChange={(e) => this.passwordChange(e)} />
        <input type="submit" value="Log In" onClick={(e) => this.onLogIn(e)} />
      </form>
    );
  }

  usernameChange(e) {
    this.setState({user : { username : e.target.value }});
    console.log(this.state.user)
  }

  passwordChange(e) {
    this.setState({user : { password : e.target.value }});
  }

  onLogIn(e) {
    e.preventDefault();
    $.ajax({
      method : 'POST',
      url : '/api/auth',
      data : {
        username : this.state.user.username,
        password : this.state.user.password
      }
      }).done(function(data){
    });
  }
}

export default SignForm;
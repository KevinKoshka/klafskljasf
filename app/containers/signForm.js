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
  }

  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username"  value={this.state.user.username} />
        <input type="password" name="password" placeholder="••••••" value={this.state.user.password} />
        <input type="submit" value="Log In" onClick={(e) => this.onLogIn(e)} />
      </form>
    );
  }

  onLogIn(e) {
    console.log(this.state.user);
    e.preventDefault();
    $.ajax('/api/authenticate').done(function(data){
      console.log(data);
    });
  }
}

export default SignForm;
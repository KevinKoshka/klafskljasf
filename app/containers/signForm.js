import React from 'react';
import $ from 'jquery';

class SignForm extends React.Component {
  constructor(props){
    super(props);

    this.onLogIn = this.onLogIn.bind(this);
  }

  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="••••••" />
        <input type="submit" value="Log In" onClick={(e) => this.onLogIn(e)} />
      </form>
    );
  }

  onLogIn(e) {
    e.preventDefault();
    $.ajax('/api/logIn').done(function(data){
      console.log(data);
    });
  }
}

export default SignForm;
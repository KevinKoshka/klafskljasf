import React from 'react';
import $ from 'jquery';

class SignForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username : "",
      password : "",
      valMessage : ""
    }
    this.goodMessage = "Congratulations!"
    this.badMessage  = "Contraseña o Usuario incorrecto."

    this.onLogIn = this.onLogIn.bind(this);
  }

  render() {
    return(
      <div className="form-container">
        <p className="val-message">{this.state.valMessage}</p>
        <form className="user-form">
          <input type="text" name="username" placeholder="Usuario"  onChange={(e) => this.setState({username : e.target.value})} />
          <input type="password" name="password" placeholder="••••••" onChange={(e) => this.setState({password : e.target.value})} />
          <input type="submit" value="Log In" onClick={(e) => this.onLogIn(e)} />
        </form>
      </div>
    );
  }

  onLogIn(e) {
    var that = this;
    e.preventDefault();
    $.ajax({
      method : 'POST',
      url : '/api/auth',
      data : {
        username : this.state.username,
        password : this.state.password
      }
    }).done(function(data){
      console.log(that)
      if(!data[0]){
        that.setState({valMessage : that.badMessage});
      } else {
        that.setState({valMessage : that.goodMessage});
      }
    });
  }
}

export default SignForm;
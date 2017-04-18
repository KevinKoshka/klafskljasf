import React from 'react';

class SignForm extends React.Component {

  render() {
    return(
      <form>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="••••••" />
        <input type="submit" value="Log In" onSubmit= />
      </form>
    );
  }
}

export default SignForm;
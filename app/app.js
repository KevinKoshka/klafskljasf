import React from 'react';
import ReactDOM from 'react-dom';
import SignForm from './containers/signForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <SignForm />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#content'));
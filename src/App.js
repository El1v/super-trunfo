import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    // state = {
    //   cardTrunfo: false,
    // };

    // onInputChange = ({ target }) => {
    //   const { name } = target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   this.setState({ [name]: value });
    // };
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
      </div>
    );
  }
}

export default App;

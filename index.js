import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      data: null
    };
  }

  componentDidMount = () => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data })
      })
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <ul>
          {this.state.data && this.state.data.map(user => <li id={user.id}>{ user.name }</li>)}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

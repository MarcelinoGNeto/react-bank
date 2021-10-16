import React from 'react';
import './styles.css'

import Button from '@material-ui/core/Button';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  decrementar(){
    this.setState({
      contador: this.state.contador - 1,
    });
  }

incrementar(){
    this.setState({
      contador: this.state.contador + 1,
    });
  }


  render() {
    return (
        <div className="Main">
            <div>
            <Button variant="contained" color="primary" onClick={this.decrementar.bind(this)}>-</Button>
            <Button variant="contained" color="primary" onClick={this.incrementar.bind(this)}>+</Button>
            </div>
            <h1>{this.state.contador}</h1>
        </div>
    );
  }
}

/* 
  return (

    <div className="Main">
      <div>
        <p>Contador: </p>
      </div>
      <div>
        <Button variant="contained" color="primary">Hello World</Button>
      </div>
    </div>
  )
 */
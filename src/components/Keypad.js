import React, {Component} from 'react';


export default class Keypad extends Component {

  handleKeyUp = event => {
    console.log('Entering password...')
  }


  render() {
    return(
      <div className='password-input'>
        <input type='password' onKeyUp={this.handleKeyUp}></input>
      </div>

    )
  }
}
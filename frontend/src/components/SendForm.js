import React, { Component } from "react";
import ReactDOM from "react-dom";
import {ref, set} from "firebase/database"
import { db } from "..";

function writeUserData(Input) {
  set(ref(db, 'message/' ), {
    message: Input
  });
}


export default class SendForm extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this)

    this.state = {
      message: "",
    };
  }

  changeMessage(e) {
    this.setState({ message: e.target.value })
    set(ref(db, 'message/' ), {
      message: e.target.value
    });
  }

  sendMessage = () => {
    this.props.socket.emit(this.state.message);
    this.setState({message: ""})
  }

  render() {

    return (
      <div style={{position: "fixed", bottom: 10}}>
        <input value={this.state.message} onChange={e => this.changeMessage(e)} size="64" />
        <button onClick={this.sendMessage} disabled={!this.state.message}>Send</button>
      </div>
    );
  }
}
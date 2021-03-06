import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {};

export class Provider extends Component {
  state = {
    cards: [],
    edit: false,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios.get("/api/display").then(res => {
      this.setState({
        cards: res.data
      });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;

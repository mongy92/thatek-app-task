

import React, { Component } from 'react';
import Navigation from "./navigation";
import { Provider } from "react-redux";
import Store from "./redux/store"

export default class App extends Component {
  render() {
    return <Provider store={Store}  >
      <Navigation />
    </Provider>
  }
}


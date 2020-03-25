import React, { Component } from 'react';

import { Example, Hosts } from 'foreman-insights';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Example text="Is it working?" />
        <Hosts />
      </div>
    );
  }
}

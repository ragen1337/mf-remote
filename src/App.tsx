import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Header} from './Header/Header';

const App = () => (
  <div className="container">
    <Header></Header>
    <div>Name: mf-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));

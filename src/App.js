import React from 'react';
import './App.scss'
import Register from './Register'
import UserList from './UserList'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
const ReactCSSTG = CSSTransitionGroup;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      value: ''
    }
  }

  render() {
    return <ReactCSSTG transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      <Router>
        <div>
        <Route exact path="/" component={Register} />
        <Route exact path="/about" component={UserList} />
        </div>
      </Router>
    </ReactCSSTG>
  }
}

export default App;

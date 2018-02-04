import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home.jsx'
import Scoreboard from './Scoreboard.jsx'
import NoMatch from './NoMatch.jsx'
import Layout from './Layout.jsx'
import GameContainer from './GameContainer.jsx'

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/scoreboard" component={Scoreboard}/>
          <Route exact path="/game/:username" component={GameContainer}/>
          <Route component={NoMatch}/>
        </Switch>
      </Layout>
    )
  }
}

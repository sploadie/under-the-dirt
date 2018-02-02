import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home.jsx'
import NoMatch from './NoMatch.jsx'
import Layout from './Layout.jsx'

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </Layout>
    )
  }
}

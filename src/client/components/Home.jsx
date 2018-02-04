import React, { Component } from 'react';
import { Header, Icon, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div>
        <Header className="game-title" as='h1'>Under the Dirt</Header>
        <div className="menu-link-container">
          <Input transparent inverted placeholder="Enter Name" value={this.state.name} onChange={(_event, { value }) => this.setState({ name: value })} />
          <Header className="menu-link" as='h2' textAlign='center'>
            {this.state.name.length !== 0 && <Link onClick={e => this.state.name.length === 0 && e.preventDefault()} to={`/game/${this.state.name}`}>Play</Link>}
          </Header>
          <Header className="menu-link" as='h2' textAlign='center'>
            <Link to="/scoreboard">Scoreboard</Link>
          </Header>
        </div>
      </div>
    )
  }
}

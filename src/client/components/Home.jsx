import React from 'react';
import { Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => (

  <div>

    <Header className="game-title" as='h1'>Under the Dirt</Header>

    <div className="menu-link-container">

      <Header className="menu-link" as='h2' textAlign='center'>

        <Link to="/game">Play</Link>

      </Header>

      <Header className="menu-link" as='h2' textAlign='center'>

        <Link to="/scoreboard">Scoreboard</Link>

      </Header>

      <Header className="menu-link" as='h2' textAlign='center'>

        <Link to="/credits">Credits</Link>

      </Header>

    </div>

  </div>

)

export default Home

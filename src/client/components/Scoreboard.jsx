import React, { Component } from 'react'
import { Card, Feed, List, Label } from 'semantic-ui-react'
import { map, orderBy } from 'lodash'
import fetch from 'isomorphic-fetch'

import maps from '../../maps.js'

export default class CardScoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scoreboard: []
    }
  }

  componentDidMount() {
    fetch(`/scoreboard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(data => data.json())
      .then(data => this.setState({ scoreboard:  data }, () => console.log(data)))
  }

  render() {
    const {scoreboard} = this.state
    return (
      <div className="center-container">
      <Card.Group textAlign="center">
        {map(maps, (board, level) => (
          <Card key={level}>
            <Card.Content>
              <Card.Header>
                Level {level}{board.solution.message && `: ${board.solution.message}`}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <List>
                {map(orderBy(scoreboard[level], 'score', 'asc'), (score, i) => (
                  <List.Item key={i}>
                    <Label>
                      {score.name}
                      <Label.Detail>{`${score.score}`}</Label.Detail>
                    </Label>
                  </List.Item>
                ))}
              </List>
              {/* <Feed>
                {map(scoreboard[level], (score, i) => (
                  <Feed.Event key={i}>
                    <Feed.Content>
                      <Feed.Date content={`${score.score}`} />
                      <Feed.Summary>
                        {score.name}
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                ))}
              </Feed> */}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      </div>
    )
  }
}

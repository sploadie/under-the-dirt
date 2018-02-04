import React from 'react'
import { Card } from 'semantic-ui-react'

const CardScoreboard = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardScoreboard

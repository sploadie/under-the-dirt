import React from 'react';
import { Link } from 'react-router-dom'

const NoMatch = () => (
  <div>
    <h1>404 Not Found</h1>
    <Link to="/">Go home, you're lost</Link>
  </div>
)

export default NoMatch

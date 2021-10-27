import React from 'react'

import './App.css'

import Team from './component/Team'
import teams from './teams.json'

class App extends React.Component {
  render() {

    let mappedTeams = teams.map(team => 
      <Team team={team}/>)

    return (
      <div>
        <h1>Football Teams (UK)</h1>
        <div class="container">
          {mappedTeams}
        </div>
      </div>
    )
  }
}

export default App
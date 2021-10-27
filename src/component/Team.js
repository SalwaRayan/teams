import React from "react"

import '../styles/team.css'

class Team extends React.Component {
  render() {
    const {name, crestUrl, address, phone, email, founded, venue} = this.props.team

    return (
      <div className="box">
        <div>
          <h2>{name}</h2>
          <img src={crestUrl} alt="" />
        </div>
        <div>
          <p>{address}</p>
          <p>{venue}</p>
          <p>Tel: {phone}</p>
          <p>Mail: {email}</p>
          <p>Founded on {founded}</p>
        </div>
      </div>
    )
  }
}

export default Team
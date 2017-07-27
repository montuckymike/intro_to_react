import React from "react";

// SMART / Container / has State
// DUMB / Presentational / return HTML
// this.setState({})

const UsersList = (props) => {
  return (
    <div>
      <h1> Found Users List </h1>
      <ul>
        {
          props.usersData.map((user, index) => {
            return <li key={index}> { user.name } </li>
          })
        }
      </ul>
    </div>
  )
}

class PlaygroundApp extends React.Component {

  state = {
    name: "Doug",
    counter: 0,
    users: null,
  }

componentDidMount() {
  this.fetchUsersFromServer()
}

fetchUsersFromServer() {
  // pretend this is an AJAX function
  const users = [
    { name: "Doug", id: 1, },
    { name: "Hannah", id: 2, },
    { name: "Jette", id: 3, },
    { name: "Joseph", id: 4, },
  ]

  setTimeout(() => {
        this.setState({ users: users })
      }, 3000);
}


increaseCounter(){
  this.setState(
    { counter: this.state.counter +=1})
}

decreaseCounter(){
  this.setState(
    { counter: this.state.counter -=1})
}


  render() {
    return(
      <div className="playground-main">
        <h1> { this.state.name } </h1>
        <p> { this.state.counter } </p>
      <div>
        <button onClick={() => this.increaseCounter()
          }>
            Increase likeABoss
        </button>

        <button onClick={() =>
          this.decreaseCounter ()}>
            Decrease likeABoss
        </button>

        <button onClick={() =>
        this.setState(
          { counter: this.state.counter *=2})}>
            Double Dat
        </button>

        <button onClick={() =>
        this.setState(
          { counter: this.state.counter =0})}>
            Reset
        </button>
      </div>
      {
        this.state.users
        ? <UsersList usersData={this.state.users} />
        : <h1> Users Being Loaded </h1>
      }
      </div>
    )
  }
}

export default PlaygroundApp

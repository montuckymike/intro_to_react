import React from "react";
import faker from "faker";
import Counter from "./Counter";
import UserList from "./UserList";

// SMART / Container / has State
// DUMB / Presentational / return HTML
// this.setState({})







class PlaygroundApp extends React.Component {

  state = {
    firstName: null,
    lastName: null,
    img: null,
    counter: 0,
    users: null,
    showCounter: true,
  }

increaseCounter = this.increaseCounter.bind(this)

componentDidMount() {
  this.fetchUsersFromServer();
//   const randomName = faker.name.firstName();
//   const randomProduct= faker.commerce.product();
// alert(randomProduct);
}
fetchUsersFromServer = () => {
  // pretend this is an AJAX function
  //temporary array to hold people
  // for loop to create person and push into temp array
  // set state of user to temp array
  const temporaryArray = [];
  for(var i=0; i<20; i++){
    temporaryArray.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      img: faker.random.image(),
    })
  }
  this.setState({ users: temporaryArray})
}



increaseCounter(){
  this.setState(
    { counter: this.state.counter +=1})
}
decreaseCounter = () => {
  this.setState(
    { counter: this.state.counter -=1})
}
toggleCounter = () => {
  this.setState({ showCounter: !this.state.showCounter })
}
updateFirstName = (event) => this.setState({firstName: event.target.value})
updateLastName = (event) => this.setState({lastName: event.target.value})
updateImg = (event) => this.setState({img: event.target.value})

handleFormSubmit = (event) => {
  event.preventDefault()
  const person = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    img: this.state.img
  }
  let users = this.state.users
  users.push(person)
  console.log("users", users)
  this.setState({users})
}



  render() {
    return(
      <div className="playground-main">

        <form onSubmit={this.handleFormSubmit}>
          <input onChange={this.updateFirstName}
          />
          <input onChange={this.updateLastName} />
          <input onChange={this.updateImg} />
          <button type="submit"> Submit </button>
        </form>

        <button
          className={this.state.showCounter ? "open-btn" : "close-btn"}
          onClick = { this.toggleCounter }>
        {
          this.state.showCounter ? "Hide" : "Show"}
        </button>
        {
          this.state.users
          ? <UserList usersData={this.state.users} />
          : <h1> Users Being Loaded </h1>
        }
        {
          this.state.showCounter
          ? <Counter
          counter={this.state.counter}
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.decreaseCounter}
          /> : null
        }
      </div>
    )
  }
}

export default PlaygroundApp

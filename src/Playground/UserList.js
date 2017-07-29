import React from "react";

const UserList = (props) => {
  return (
    <div>
      <h1> Found Users List </h1>
      <div className="user-card-container">
        {
          props.usersData.map((user, index) => (
            <div className="user-card">
            <h3>{ user.firstName }</h3>
            <h4>{ user.lastName } </h4>
            <img src={ user.img } />
            </div>
        )
      )
    }
      </div>
    </div>
  )
}

export default UserList

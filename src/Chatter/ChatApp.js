import React from "react";

// const ChatApp = (props) => {
//   const chatItems = props.data.chats
//   return (
//     <div>
//       <h1> {props.data.chats[0].username} </h1>
//     </div>
//   )
// }

const ChatApp = (props) => {
  const chatItems = props.data.chats.map(function(item){
    return (
      <div>
      <h3> {item.username} </h3>
      <p> {item.chat} </p>
      </div>
    )
  })
  return (
    <div>
      <h3> Some Chats </h3>
      <div className="chat-container">
        { chatItems }
      </div>
    </div>
  )
}



export default ChatApp;

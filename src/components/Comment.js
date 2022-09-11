import React from "react";

function Comment({ user, comment }) {
  
  return (
    <div>
      <h5>{user}</h5>
      <p>{comment}</p>
    </div>
  )
}

export default Comment;


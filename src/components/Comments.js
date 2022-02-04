import React from 'react';

function Comments({ comment }) {
   return (
      <div>
         <h2>{comment.user}</h2>
         <h3>{comment.comment}</h3>
      </div>
   );
}

export default Comments;

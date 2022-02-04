import React from 'react';
import Comments from "./Comments";

function CommentsSection({ commentSec }) {
   const renderingComments = commentSec.map(comment =>
      <Comments
         key={comment.id}
         comment={comment}
      />
   );

   return (
      <div>
         <h2>{commentSec.length} Comments</h2>
         <div>{renderingComments}</div>
      </div>
   );
}

export default CommentsSection;

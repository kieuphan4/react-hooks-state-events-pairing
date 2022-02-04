import React, { useState } from 'react';
import CommentsSection from "./CommentsSection";

function VideoInfo({ data }) {
   const [videoInfoState, setVideoInfoState] = useState(data); // State object is the one being modified
   const [isVisible, setIsVisible] = useState(true);

   function handleUpLikes() {
      const video = {...videoInfoState};
      video.upvotes = video.upvotes + 1;
      setVideoInfoState(video);
   }

   function handleDownLikes() {
      const video = {...videoInfoState};
      video.downvotes = video.downvotes + 1;
      setVideoInfoState(video);
   }

   function handleComments() {
      setIsVisible(!isVisible);
   }

   return (
      <div>
         <iframe
            width="919"
            height="525"
            src={videoInfoState.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoInfoState.title}
         />
         <h1>{videoInfoState.title}</h1>
         <span>{videoInfoState.views} Views | Uploaded {videoInfoState.createdAt}</span>
         <button onClick={handleUpLikes}>{videoInfoState.upvotes} 👍</button>
         <button onClick={handleDownLikes}>{videoInfoState.downvotes} 👎</button>
         <button onClick={handleComments}>{isVisible ? "Hide Comments" : "Show Comments"}</button>
         {isVisible ? <CommentsSection commentSec={videoInfoState.comments} /> : ""}
      </div>
   );
}

export default VideoInfo;

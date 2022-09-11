import React, {useState} from "react"
import video from "../data/video.js";
import Details from "./Details"
import Likes from "./Likes"
import Comments from "./Comments"

// App.js
//     details -> title, views, createdAt 
//     like -> upvotes, downvotes
//     comments -> comments
//         comment -> id, user, comment


function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  

  console.log("Here's your data:", video);

  const Video = () => {
    return (
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
    )
  }

  return (
    <div className="App">
      <Video />
      <Details title={video.title} views={video.views} createdAt={video.createdAt} />
      <Likes upvotes={upvotes} downvotes={downvotes} setUpvotes={setUpvotes} setDownvotes={setDownvotes} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;

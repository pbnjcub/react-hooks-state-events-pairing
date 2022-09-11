import React from "react"

function Likes( { upvotes, downvotes, setUpvotes, setDownvotes }) {

    function handleVote(e) {
       return e.target.value === "upvotes" ? setUpvotes(upvotes + 1) : setDownvotes(downvotes + 1)
    }


    const RenderLikes = () => {
        return (
            <div className="likes">
                <button value="upvotes" onClick={handleVote}>{upvotes}</button>
                <button value="downvotes" onClick={handleVote}>{downvotes}</button>
            </div>
        )
    }
    
    return (
        <RenderLikes />
    )
}

export default Likes
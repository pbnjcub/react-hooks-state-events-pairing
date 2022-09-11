import React, {useState} from "react"
import Comment from "./Comment"

function Comments( { comments }) {
    const [commentsOn, setCommentsOn] = useState(true)
    const [numComments, setNumComments] = useState(comments.length)

    function handleBtnClick() {
        setCommentsOn((commentsOn) => !commentsOn)
    }

    const ShowComments = () => {
        if(commentsOn === true) {
            return comments.map((comment) => (
                <Comment key={comment.id} user={comment.user}  comment={comment.comment} />
        ))} else {
                return <p></p>
        }
    }

    
    return (
        <div className="comments">
            <button value={commentsOn ? "Hide Comments" : "Show Comments"} onClick={handleBtnClick}>{commentsOn ? "Hide Comments" : "Show Comments"}</button>
            <h4>{numComments} Comments</h4>
            <div>
                <ShowComments />
            </div>
        </div>
    )
}
    

export default Comments
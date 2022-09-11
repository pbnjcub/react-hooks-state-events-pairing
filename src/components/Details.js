import React from "react"

function Details( { title, views, createdAt }) {

    const RenderDetails = () => {
        return (
            <div className="details">
                <h3>{title}</h3>
                <p>VIEWS: {views} | CREATED AT: {createdAt} </p>
            </div>
        )
    }
    
    return (
        <RenderDetails />
    )
}

export default Details
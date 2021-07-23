import React from 'react'

export default function Data(props) {
    return (
        <div  className="text-start">
            <p>Location</p>
            <h2>{props.myItem.location}</h2>
            <p>Eats</p>
            <h2>{props.myItem.foodType}</h2>
            <p>Age</p>
            <h2>{props.myItem.age}</h2>
            <p>Likes</p>
            <h2>{props.myItem.likes}</h2>
            <p>Twitter</p>
            <a className="color-blue link" href="https://twitter.com/{props.myItem.twitterUsername}"><h2>@{props.myItem.twitterUsername}</h2></a>
            
        </div>
    )
}

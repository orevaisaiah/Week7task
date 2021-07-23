import React from 'react'

export default function Name(props) {
    return (
        <div  className="text-start">
            <h1 className="color-blue" >{props.myItem.name}</h1>
        </div>
    )
}

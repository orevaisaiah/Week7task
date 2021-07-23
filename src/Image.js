import React from 'react'

export default function Image(props) {
    return (
        <div className="text-start">
            <img src={props.myItem.avatar} alt="user avatar" />
        </div>
    )
}

import React from 'react'

export default function CommentCard(props) {
  return (
    <div className='card'>
      <img
        src={`https://ui-avatars.com/api/?name=${props.name}`}
        alt='avatar'
        id='avatar'
      />
      <div className='wrapper'>
        <span>
          <strong>{props.name}</strong> {props.date}
        </span>
        <span id='comment'>{props.comment}</span>
      </div>
    </div>
  )
}

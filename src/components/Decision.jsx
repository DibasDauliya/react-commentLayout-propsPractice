import React from 'react'

export default function Decision(props) {
  return (
    <div>
      {props.children}
      <div className='decision'>
        <button className='btn btn-accept'>Accept</button>
        <button className='btn btn-decline  '>Decline</button>
      </div>
    </div>
  )
}

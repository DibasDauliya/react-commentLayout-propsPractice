import React from 'react'
import Decision from './components/Decision'
import CommentCard from './components/CommentCard'

function App() {
  return (
    <div>
      <Decision>
        <CommentCard
          name='Ram'
          date='2nd June, 2020'
          comment='Hi this is comment'
        />
      </Decision>

      <Decision>
        <CommentCard
          name='John'
          date='2nd June, 2020'
          comment='Hi this is comment'
        />
      </Decision>

      <Decision>
        <CommentCard
          name='Hari'
          date='2nd June, 2020'
          comment='Hi this is comment'
        />
      </Decision>

      <Decision>
        <CommentCard
          name='Goman Silwal'
          date='2nd June, 2020'
          comment='Hi this is comment'
        />
      </Decision>
    </div>
  )
}

export default App

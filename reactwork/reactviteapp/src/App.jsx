import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
import ImageManipulation from './ImageManipulation'

function App() {
  return (
    <div>
      <div>
        <h2 style={{color:'red'}} >hello react js
        </h2>
        <div>
          <ImageManipulation />
        </div>
        {/* <div>
          <Student image={<img src='https://cdn.dummyjson.com/recipe-images/7.webp'/>} name="Rahul Kumar" roll="1234" college="abes"/>
        </div> */}
        
      </div>
    </div>
  )
}

export default App

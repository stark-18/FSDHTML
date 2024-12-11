import React from 'react'

function StateHandling() {
    const[count,setCount]= useState(20);
    function doIncremnent(){
        setCount(count+20)
    }
    function doDecrement(){
        setCount(count-20)
    }
  return (
    <div>
      <div>StateHandling
        <h2>counter value:{count}</h2>
      </div>
      <div>
        <button onClick= {doIncremnent}>Incremnent</button>
        <button onClick={doDecrement}>decrement</button>

      </div>
    </div>
  )
}

export default StateHandling

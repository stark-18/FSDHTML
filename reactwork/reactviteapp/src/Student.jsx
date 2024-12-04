import React from 'react'
import './style.css'
function Student(props) {
  return (
    <div className='icard'>
        <table>
            <th style={{backgroundColor:'brown', color:'white'}} colSpan={2} >Student information</th>
            <tbody>
                <tr><td colSpan={2}> {props.image}</td></tr>
                <tr><td> Name : </td> <td>{props.name}</td></tr>
                <tr><td> RollNo : </td> <td>{props.roll}</td></tr>
                <tr><td> College : </td> <td>{props.college}</td></tr>

            </tbody>
        </table>
      {/* <h2>Student information</h2> */}
      <h3>
      </h3>
    </div>
  )
}

export default Student

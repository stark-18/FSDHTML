import React, { useState } from 'react'
import cat from './images.jpeg'
import './imgman.css';
function ImageManipulation() {
    const[height,setHeight]=useState(100);
    const[angle,setAngle]= useState(30);
    const[red,setRed] = useState();
    const[green,setGreen] = useState();
    const[blue,setBlue] = useState();

    function enhanceHeight(){
        setHeight(height+20)
    }

    function doRotate(){
        setAngle(angle+30);
    }
    function changeColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }


  return (
    <div className='container'>
      <div style={{backgroundColor:`RGB(${red},${green},${blue})` ,marginLeft:'200px',marginTop:'70px',height:'200px',width:'200px', border:'2px solid red'}} >
        <img src={cat} height={height} width={200} style={{transform:`rotate(${angle}deg)`}} alt="cat image" />
      </div>
      <div style={{border:'2px solid red', marginTop:'100px', paddingLeft:'60px'}}>

        <button onClick={enhanceHeight} style={{backgroundColor:"cyan", color:'red'}}>Enhance Height</button>
        &nbsp;&nbsp;&nbsp;

        <button>Enhance width</button>
        &nbsp;&nbsp;&nbsp;

        <button onClick={changeColor}>colour change</button>
        &nbsp;&nbsp;&nbsp;

        <button onClick={doRotate}>rotate</button>


      </div>
    </div>
  )
}

export default ImageManipulation

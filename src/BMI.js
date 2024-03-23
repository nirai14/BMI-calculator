import React from 'react'
import './bmi.css'
import over from './over.png'
import under from './under.png'
import normal from './normal.png'

const BMI = () => {
    const[height,setHeight]=React.useState(0)
    const[weight,setWeight]=React.useState(0)
    const[bmi,setBmi]=React.useState('')
    const[message,setMessage]=React.useState('')
    const[img,setImg]=React.useState('')

 function heightChange(e){
    setHeight(e.target.value)
   
 }
 function weightChange(e){
    setWeight(e.target.value)
   
 }
  
function clear(){
    setHeight("")
    setWeight("")
    setBmi("")
    setMessage("")
}

 const calculate=(e)=>{
    e.preventDefault()
 let calculateBmi=(weight/(height/100*height/100)).toFixed(2)
setBmi(calculateBmi)
if(calculateBmi>25){
setMessage("You are Overweight")
setImg(over)
}else if(calculateBmi>18){
    setMessage("You are Normal")
    setImg(normal)
    }
    else if(calculateBmi<18){
        setMessage("You are Underweight")
        setImg(under)
        }
else if(height===0 || weight===0){
    setBmi(0)
    setMessage("Please enter your Height and Weight to calculate your BMI")
setImg("")
}
    }
  return (
   
    <div className='enter'>
        <center>
        <h3 className='TITLE'>BMI CALCULATOR</h3>
        </center>
         <form action="">
            <div>

        <div className='height'>
            <label htmlFor="height">Height:</label>
            <input   id="measure" value={height} onChange={heightChange} />cm
        </div>
        <div className='weight'>
            <label htmlFor="" >Weight:</label>
            <input id="measure" value={weight} onChange={weightChange} />kg
        </div>
        <div className='button'>
        <button className='cal' onClick={calculate}>Calculate BMI</button>
        <button className='clear'onClick={clear}>Clear</button>
        </div>
        </div>
        </form>
      
        <div>
       {height && weight !==0? 
            <h3 className='value'>Your BMI is:{bmi}</h3>
            :null}
            <p className='message'>{message}</p>
        </div>
        <center>
            <img src={img} alt="" className='image' />
        </center>
        </div>
  )
}

export default BMI
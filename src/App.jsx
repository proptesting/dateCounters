import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const[count,setCount]=useState(0)
  const [dateMsg,setDateMsg]=useState('Today is :')
 
  useEffect(()=>             {
                console.log("Current count :"+count); handleDateMsg()
                },[count])

  const date=new Date()
  date.setDate(date.getDate()+count)
  
  const handleCountBackward=()=>{
    setCount((count)=>count-`${step>0?step:1}`);
    console.log("Backward function count : "+count)
   // handleDateMsg()
  }

  const handleCountForward=()=>{
    setCount((count)=> count+ +`${step>0?step:1}`);
    console.log("Forward function count : "+count)
   // handleDateMsg()
}

const handleDateMsg=()=>{
    console.log("Handle msg count  : "+count)

  if (count<0){
    if(count===-1)
    setDateMsg(" day ago :")
  else
  setDateMsg(" days ago :")
  }
  else if(count===0){
    setDateMsg("Today is :")
  }
  else if(count>0){
    if (count===1)
    setDateMsg(" day from today 😊:")
  else
    setDateMsg(" days from today :")
  }
  else {setDateMsg('haha hhaa')}
}

  return (
    <>
    <div>
      <button onClick={()=>{setStep(step-1) }}>-</button>Step:{step}<button onClick={()=>setStep(step+1)}>+</button>
    </div>
   
    <div>
      <button onClick={handleCountBackward}>-</button>
       Count:{count}
      <button onClick={handleCountForward}>+</button>
    </div>


    <div> Final Step={step}</div>
    <div>Final count={count}</div>
    <div>{Math.abs(count)>0?Math.abs(count):""}
    {dateMsg}
    
    <b>{date.toDateString()}  </b></div>
{/* 
    <div>
      <span>{count===0?"Today is : ":
      count>0?
      (count===1?`${Math.abs(count)} day after :`:`${Math.abs(count)} days after :` )
      :
      (count===-1?`${Math.abs(count)} day ago : `:`${Math.abs(count)} days ago : `)}
      </span>
      <span><b>{date.toDateString()}</b></span>
    </div> */}
    </>
  )
}

export default App

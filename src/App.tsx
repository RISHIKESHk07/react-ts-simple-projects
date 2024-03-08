import useMultistepForm from './useMultistepForm'
import { useState } from 'react'
import Form from './form';
import Form1 from './form2';
import Form2 from './form3';
type formdata ={
  name:string,
  email:string,
  age:number,
  password:string,
  username:string,
}
function App() {
  const updateDetails = (fields : Partial<formdata>) =>{
    setdata(prev=>{return {...prev,...fields }})
  }
 const INTIAL :formdata ={
  name:"",age:0,email:"",password:"",username:""
};

const [data,setdata]=useState(INTIAL);
const {next,back,gotoIndex,currentindex,steps,firstindex,lastindex} =useMultistepForm([<Form {...data} updateDetails={updateDetails} />,<Form1 {...data}  updateDetails={updateDetails}/>,<Form2 {...data}/>]);

  return (
    <>
       <div style={{ position:"relative",padding:"20px",width:"40%",height:"60%",margin:"0px auto",display:"flex",justifyContent:"center",border:"0.5rem solid black",borderRadius:"30px"}}>
           <div style={{position:"absolute",top:"0px",right:"0.1rem"}}>
            {currentindex+1}/{steps.length}
           </div>
           {steps[currentindex]}
           <div>
            {!lastindex && <button onClick={next}>N</button>}
            {!firstindex && <button onClick={back}>B</button>}
           </div>
        </div>       
    </>
  )
}

export default App

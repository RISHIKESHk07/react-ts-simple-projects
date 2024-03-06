import useMultistepForm from './useMultistepForm'


function App() {
const {next,back,gotoIndex,currentindex,steps,firstindex,lastindex} =useMultistepForm([<div>one</div>,<div>two</div>,<div>three</div>])


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

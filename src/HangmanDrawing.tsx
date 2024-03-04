const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

type hangdrawing = {
       numberofguesses:number
}
const BODYPARTS =[HEAD, BODY,RIGHT_ARM,LEFT_ARM,LEFT_LEG,RIGHT_LEG]
function HangmanDrawing({numberofguesses}:hangdrawing) {
 
  return (
    <div style={{position:"relative"}}>
      

      {BODYPARTS.slice(0,numberofguesses)}

      <div style={{ position:'absolute',height:'50px',width:"10px",backgroundColor:"black",top:'0px',right:'0px'}}>
      
      </div>

      <div style={{ height:'10px',width:"160px",backgroundColor:"black",marginLeft:'130px'}}>

      </div>
      
      <div style={{ height:'350px',width:"10px",backgroundColor:"black",marginLeft:'130px'}}>

      </div>
      <div style={{ height:'10px',width:"280px",backgroundColor:"black",}}>

      </div>
    </div>
  )
}

export default HangmanDrawing

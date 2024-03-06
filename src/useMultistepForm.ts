import { ReactElement ,useState} from "react"
function useMultistepForm(steps: ReactElement[]){
  const [currentindex ,setcurrentindex] = useState(0)

  function next(){
     setcurrentindex(i => {
        if (i >= steps.length-1 ) return i
        return i+1 

  })
  }
  function back(){
    setcurrentindex(i => {
        if (i <= 0 ) return i
        return i-1 

  })
  }
  function getcurrentindex(){
       return currentindex
  }
  function gotoIndex(index:number){
      setcurrentindex(index) 
  }
    return {
      currentindex,
      gotoIndex,
      getcurrentindex,
      next,
      back,
      steps,
      firstindex: currentindex === 0,
      lastindex: currentindex === steps.length-1,

    }
}

export default useMultistepForm

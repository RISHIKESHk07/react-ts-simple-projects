import { useState ,useEffect } from 'react'
import './App.css'
import Keyboard from './Keyboard'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import list from '../public/words.json'
function genrateword(){
    console.log(list);
    return list[Math.floor(Math.random() * list.length)]
}  
function App() {
  const [wordguess,setwordguess]= useState(()=>{
    return genrateword()
  }) 
  const [guessletters,setguessletters]= useState<string[]>([])
  
  const incorrectletters  = guessletters.filter(letter=>
         !wordguess.includes(letter)
    )
  function addguessedletter (letter:string){
    if(guessletters.includes(letter)) return
    setguessletters(current => [...current,letter])
  }  
  useEffect(()=>{
       const handler =(e)=>{
        const key = e.key;
        if(!key.match(/^[a-z]$/)) return
        e.preventDefault()
        addguessedletter(key)
       }
  })   
  return (
    <>
      <div style={{
         maxWidth: "800px",
         display: "flex",
         flexDirection: "column",
         gap:"2rem",
         alignItems: "center",
      }}>
      {/* the winning state will be here */}
      <HangmanDrawing numberofguesses={incorrectletters.length} />
      <HangmanWord guessedletters={guessletters} wordtoguess={wordguess}/>
      <div style={{ alignSelf :"stretch"}}>
      <Keyboard/>
      </div>
      </div> 
    </>
  )
}

export default App

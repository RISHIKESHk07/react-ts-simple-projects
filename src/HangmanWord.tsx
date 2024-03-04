type hangamanpropes ={
   guessedletters:string[],
   wordtoguess:string
}
function HangmanWord({guessedletters ,wordtoguess}:hangamanpropes){ 
  const word=wordtoguess
  const guessWord:string[]=guessedletters
  return (
    <div style={{ display : "flex",gap:"2.5rem",fontSize:"4rem" , fontWeight:"bold" }}>
      {word.split("").map((letter)=>{
              return (
                <span style={{ borderBottom:"0.5rem solid black "}}>
                  <span style={{ visibility : guessWord.includes(letter) ? "visible" :"hidden"  }} >
                  {letter.toUpperCase()}
                  </span>
                  
                </span>
                )
      })}
    </div>
  )
}

export default HangmanWord

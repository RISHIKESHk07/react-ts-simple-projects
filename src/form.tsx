type DATAtypeform1={
    name:string,
    age:number,
    password:string,

}
type dt = DATAtypeform1 & {
    updateDetails : (fields:DATAtypeform1) => void  
}

function Form({name , age , password, updateDetails} : dt) {
   function handleSubmit(e) {
     e.preventDefault();
     
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name}/>
        <label htmlFor="age">Age:</label>
        <input type="text" name="age" value={age}/>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={password}/>
        <button type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default Form

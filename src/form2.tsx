type datatypeform2 = {
    password:string,
    username:string,
}
type dt2 = datatypeform2 & {
    updateDetails: (fields:Partial<datatypeform2>) => void
}

function Form2({password , username, updateDetails} : dt2) {
    function handleSubmit(e) {
        e.preventDefault();
        
      }
     return (
       <div>
           <form onSubmit={handleSubmit}>
           <label htmlFor="password">Pass:</label>
           <input type="password" name="password" value={password} onChange={(e)=>{
            updateDetails({password : e.target.value});
           }}/>
           <label htmlFor="username">Id:</label>
           <input type="text" name="username" value={username} />
           <button type="submit">Submit</button>
           </form>
           
       </div>
     )
}

export default Form2

import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const handleRes =(e)=>{
        setResult(result.concat(e.target.name));
  };
  const clear =()=>{
        setResult("");
  };
  const backspace =()=>{
      setResult(result.slice(0,-1));
  };
  const caluclate=()=>{
   try {
    setResult(eval(result).toString());
   } catch (error) {
    setResult("Error")
   }
  }

  return (
      <>
      <h1>MY CALUCLATOR</h1>
      <div className='container'>
        <form>
          <input type="text" value={result}/> 
        </form>
     
      <div className="keyboard">
        <button className="remove" onClick={clear} id="clear">Clear</button>
        <button className="remove" onClick={backspace} id="backspace">C</button>
        <button className ="operation" name="/" onClick={handleRes} >&divide;</button>
        <button name="7" onClick={handleRes} >7</button>
        <button name="8" onClick={handleRes} >8</button>
        <button name="9" onClick={handleRes} >9</button>
        <button className ="operation" name="*" onClick={handleRes} >&times;</button>
        <button name="4" onClick={handleRes} >4</button>
        <button name="5" onClick={handleRes} >5</button>
        <button name="6" onClick={handleRes} >6</button>
        <button className ="operation" name="-" onClick={handleRes} >&ndash;</button>
        <button name="1" onClick={handleRes} >1</button>
        <button name="2" onClick={handleRes} >2</button>
        <button name="3" onClick={handleRes} >3</button>
        <button className ="operation" name="+" onClick={handleRes} >+</button>
        <button name="%" onClick={handleRes} >%</button>
        <button name="0" onClick={handleRes} >0</button>
        <button name="." onClick={handleRes} >.</button>
        <button className="heighlight" onClick={caluclate} id="result" >=</button>
      </div>
      </div>
    </> 
  )
}

export default App

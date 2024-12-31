import "./style.css";
import copyIcon from './assets/img/copy.svg';
import { useState, useRef } from "react";
function App() {
  const [state, setState] = useState({
    screenValue: "",
  });

  function handlebuttonClick(event)
  {
    const number = event.target.textContent;
    setState((prevState) => ({
      screenValue: prevState.screenValue + number,
    }));
  }

  function allClear()
  {
    if(state.screenValue == "")
    {
      return;
    }
    setState({
      screenValue: "",
    });


  }

  function clear()
  {
    if(state.screenValue == "")
    {
      return;
    }
    setState((prevState) => ({
      screenValue: prevState.screenValue.slice(0, -1),
    }))
  }

  const inputRef = useRef("");
  function handleCopy()
  {
    if(state.screenValue == "")
    {
      return;
    }
    navigator.clipboard.writeText(state.screenValue);
    inputRef.current.select();
  }

  return (
  <div className="calc-body mt-5">
    <div className="calc-screen p-3">
      <input type="text" ref={inputRef} id="calc-typed" value={state.screenValue} />
    </div>
    <div className="calc-button-row">
      <button className="ac" onClick={allClear}>AC</button>
      <button onClick={clear}>&#9003;</button>
      <button onClick={handleCopy}><img src={copyIcon} alt="" title="Copy"/></button>
      <button onClick={handlebuttonClick} className="opt">&#247;</button>
      <button onClick={handlebuttonClick}>7</button>
      <button onClick={handlebuttonClick}>8</button>
      <button onClick={handlebuttonClick}>9</button>
      <button onClick={handlebuttonClick} className="opt">&#215;</button>
      <button onClick={handlebuttonClick}>4</button>
      <button onClick={handlebuttonClick}>5</button>
      <button onClick={handlebuttonClick}>6</button>
      <button onClick={handlebuttonClick} className="opt">&#8722;</button>
      <button onClick={handlebuttonClick}>1</button>
      <button onClick={handlebuttonClick}>2</button>
      <button onClick={handlebuttonClick}>3</button>
      <button onClick={handlebuttonClick} className="opt">&#43;</button>
      <button onClick={handlebuttonClick}>0</button>
      <button onClick={handlebuttonClick}>00</button>
      <button onClick={handlebuttonClick}>.</button>
      <button className="opt">&#61;</button>
    </div>
  </div>
  );
}

export default App;

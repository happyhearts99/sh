import logo from './logo.svg';
import './App.css';
import React, { useState,useRef } from "react";

function App() {
    const refinbed = useRef(0);
    const resleep = useRef(0);
    const refbutton = useRef(0);
    const refoutput = useRef(0);

    const [text, setButtonText] = useState("");
    const [btenable, setButtonEnable] = useState(false);
    var timespan= [["select",0]];
    for(let i=0;i<24;i++){
        timespan.push([i.toString()+":00",i]);
        timespan.push([i.toString()+":30",i+0.5]);
    }
    const change=()=>{
      if(resleep.current.value!="0"&&refinbed.current.value!="0")
          setButtonEnable(true);
    }
    const calculate=()=>{
        setButtonText(()=>Math.round(100 * resleep.current.value/refinbed.current.value));

    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<label for="durationbed">Duration in bed</label>
       <select ref={refinbed} name="durationbed" onChange={change}>
    {timespan.map((value, index) => <option value={value[1]} key={index} >{value[0]}</option>)}
  )}</select>
<label for="durationasleep">Duration Asleep</label>
       <select ref={resleep} name="durationbed" onChange={change}>
    {timespan.map((value, index) => <option value={value[1]} key={index} >{value[0]}</option>)}
  )}</select>
<input type="button" ref={refbutton} disabled={!btenable} value="calculate"   onClick={calculate} />
    <input type="text" ref={refoutput} placeHolder="output" value={text}/>
      </header>
    </div>
  );
}

export default App;

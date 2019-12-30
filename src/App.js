import React, { useRef, useState, useReducer } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './hello';
import userContext from './myContext';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import home from './Home';
import about from './About';



const initialState = {
  counter: 0
}

function App() {

  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREAMENT":

        return {
          ...state,
          counter: initialState.counter + 1
        }
      case "DECREAMENT":
        return {
          ...state,
          counter: initialState.counter - 1
        }

      default:
        return state;
    }
  }


  const [values, handleChange] = useForm({ email: " ", passowrd: " " });
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  const [count, dispatchCount] = useReducer(countReducer, initialState);
  const [value , setValue] = useState("from my context")
  // useEffect(()=>{
  //   console.log("render");

  // },[values.passowrd])


  return (
    <Router>


      <button onClick={() => { setShowHello(!showHello); inputRef.current.focus() }}>toggle</button>
      {showHello && <Hello />}
      <div className="App">
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          ref={inputRef}
        />
        <input
          name="passowrd"
          type="number"
          value={values.passowrd}
          onChange={handleChange}
        />
      </div>
      <h1>count : {count.counter}</h1>
      <button onClick={() => dispatchCount({ type: "INCREAMENT" })}>Increament</button>
      <button onClick={() => dispatchCount({ type: "DECREAMENT" })}>Decreament</button>

      <Link to="/home" >home</Link><br />
      <Link to="/about" >about</Link>

      <userContext.Provider value={{value , setValue}}>
        <Route path="/home" component={home} />
        <Route path="/about" component={about} />
      </userContext.Provider>

    </Router>
  );
}

export default App;

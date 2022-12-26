import React, { useState } from "react";

function App() {
  function increase() {
     //setCount(count+1); => count = 1
     //setCount(count+1); => count = 1
     //setCount(count+1); => count = 1

     //we need to pass prevState in Callback

     // syntax:
    //  setState((prevState) = > {
    //      updatedState = prevState + 1
    //      return updatedState
    // })
    
     setCount(prevCount => prevCount+ 1); //count = 1
     setCount(prevCount => prevCount+ 1); //count = 2
     setCount(prevCount => prevCount+ 1); //count = 3
  }
  function decrease(){
    setCount((count) => {
      return count-1
    })
    console.log(count);
   }
  function reset(){
    setCount((count) => {
      return 0;
    })
    console.log(count);
   }

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Rst</button>
    </div>
  );
}

export default App;

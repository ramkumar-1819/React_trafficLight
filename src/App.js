import './App.css';
import React, { Component,useEffect,useState } from 'react';

function App() {
  const [state,setState]=useState([3000,1000,2000]) //this state actually holds the array of timer of each signal color
  const[currentLight,setCurrentLight]=useState(0)   //hold which signal we are in [0-red,1-yellow,2-green]
  
  //In useeffect we inially set the opactity of selected signal to 1
  //Then we have a timer initialzed using settimeout which changes the signal based on the signal time we declared
  
  useEffect(()=>{
    document.getElementsByClassName("trafficColor")[0].children[currentLight].style.opacity=1             
    const timer=setTimeout(()=>{
                              setCurrentLight((currentLight+1)%3)
                              document.getElementsByClassName("trafficColor")[0].children[currentLight].style.opacity=0.3
                              }
                          ,state[currentLight])
    return ()=>clearInterval(timer)
  })

  return (
    <div className="trafficColor">
        <div></div>
        <div></div>
        <div></div>
    </div>
  );
}

export default App;

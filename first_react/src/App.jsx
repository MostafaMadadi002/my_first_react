import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const name = "mostafa madadi";
const time = new Date();
const hours = time.getHours();
console.log(hours);
let greting = "";
let st = {
  color : "red",
  fontSize :"20px"
}
if (hours < 12){
  greting = "moning";
  st.color = "red";
}else if(hours > 12 ){
  greting = "after noon";
  st.color = "green";
  console.log(greting,st.color)
}else{
  greting = "night";
  st.color = "blue";
}

function App() {
return (
<div>
  <h1 style={st}>good {greting}</h1>
</div>
)
}
export default App

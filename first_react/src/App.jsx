import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './card'
import info from './info'
import info2 from './info2'
function creatcard(cont) {

  return <Card
    key={cont.id}
    img={cont.img}
    name={cont.name}
    email={cont.email}
  />
}
function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {info.map(creatcard)}
      {info2.map(creatcard)}
      {info2.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}
      {info.map(creatcard)}

    </div>
  )
}
export default App

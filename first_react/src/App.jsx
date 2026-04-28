import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './card'
import info from './info'
import info2 from './info2'

function App() {
  const [conatact, setcontact] = useState({
    fname: "",
    last: "",
    pass: ""
  })

  function handle(event) {
    const { name, value } = event.target;
    setcontact((pre) => {
      return (
        {
          ...pre,
          [name]: value
        }
      )
    })
  }

  return (
    <div>
      <h1>hello {conatact.fname}  {conatact.last}</h1>
      <p>{conatact.pass}</p>
      <input onChange={handle} type="text" placeholder='name' name='fname' />
      <input onChange={handle} type="text" placeholder='last' name='last' />
      <input onChange={handle} type="password" placeholder="password" name='pass' />
    </div>
  );
}
export default App;

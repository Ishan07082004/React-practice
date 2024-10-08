import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ishan",
    age: 20
  }
  let newArr = [1, 3, 5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card userName="Understanding React" btnText="click Me" />
      <Card userName="Ishan" />
    </>
  )
}

export default App

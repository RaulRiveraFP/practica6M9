import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from '../public/tailwind.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Integració de continguts interactius
      </h1>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={tailwindLogo} className="logo" alt="Tailwind logo" />
        </a>
      </div>
    </>
  )
}

export default App



import { LineChart } from 'recharts'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNev from './Components/DaisyNav/DaisyNev'

function App() {


  return (
    <>
    <NavBar></NavBar>
      {/* <DaisyNev></DaisyNev> */}
      <h1 className='text-7xl bg-rose-50'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>

     
    
    </>
  )
}

export default App

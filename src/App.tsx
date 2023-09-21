import './App.css'
import 'react-awesome-button/dist/styles.css'
import Banner from './components/Banner'
import { AwesomeButton } from 'react-awesome-button'
import ParticleBackground from './components/Particles'

function App() {
  return (
    <>
    <ParticleBackground/>
      <div className='main w-[100vw] h-[100vh] bg-black flex flex-col items-center '>
        <Banner/>
        <div className='buttons flex justify-around w-[100%]'>
          <AwesomeButton type="danger">Jogue Agora 🎮</AwesomeButton>
          <AwesomeButton type="danger">Saiba mais 🚀</AwesomeButton>
        </div>
      </div>
    </>
  )
}

export default App

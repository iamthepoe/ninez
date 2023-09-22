import './App.css'
import 'react-awesome-button/dist/styles.css'
import Banner from './components/Banner'
import { AwesomeButton } from 'react-awesome-button'
import ParticleBackground from './components/Particles'
import Lore from './pages/Lore'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <ParticleBackground />
      <div className='main w-[100%] h-[80vh] bg-black flex flex-col items-center '>
        <Banner />
        <div className='buttons flex justify-around w-[100%]'>
          <AwesomeButton type="danger">Jogue Agora 🎮</AwesomeButton>
          <AwesomeButton type="danger">Saiba mais 🚀</AwesomeButton>
        </div>
      </div>
      <Lore />
      <Footer />
    </>
  )
}

export default App

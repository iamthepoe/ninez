import '../App.css'
import LoreBox from '../components/LoreBox';

function Lore() {
  return (
    <>
      <div className='w-[100%] h-[50vh] flex justify-center items-center flex-col'>
      <div className='logo'>
        <h1 className='font-black text-white text-6xl'>
            <span className='text-red-600'>L</span>ORE
        </h1>
      </div>
        <span className='text-white text-1xl '>A História do Jogo.</span>
        <LoreBox></LoreBox>
      </div>
    </>
  )
}

export default Lore;


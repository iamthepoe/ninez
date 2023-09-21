import '../App.css'
import {TypeAnimation} from 'react-type-animation';

function Banner() {
  return (
    <>
      <div className='w-[100%] h-[50vh] flex justify-center items-center flex-col'>
      <div className='logo'>
        <h1 className='font-black text-white text-6xl'>
            NINE<span className='text-red-600'>Z</span>
        </h1>
      </div>
        <TypeAnimation
            sequence={[
                'As pétalas ainda sangram...',
                  2000,
                  'Um jogo da Gamejam:',
                  2000,
                  'A decadência das rosas 🌹',
                  2000
                ]}
                speed={20}
                className='text-white text-2xl'
                wrapper='span'
            repeat={Infinity}
        />
      </div>
    </>
  )
}

export default Banner;


import '../App.css'
import { TypeAnimation } from 'react-type-animation';

function LoreBox() {
  return (
    <>
      <div className='
            w-3/6 max-sm:w-[80vw] max-md:w-[70vw] h-4/6 flex justify-center items-center bg-black/40 my-10 p-10 text-justify
        '>
        <p className='text-white text-1xl' id='loreText'>
          <span className='text-2xl'>
            Guerra das Rosas <span className='text-red-300'>(1455 - 1487)</span>
          </span>
          <br /><br />
          Situada na Europa do final da época medieval, a história retrata a guerra das rosas, um conflito
          entre duas famílias da dinastia, a casa de York e a casa de Lancaster, pelo trono da Inglaterra.
          Eduardo IV enfrentará o reinado de Henrique VI com o objetivo de vingar seu pai e retomar o
          trono que julgar ser seu por direito<TypeAnimation sequence={['...', 1000]} wrapper='span' />
        </p>
      </div>
    </>
  )
}

export default LoreBox;


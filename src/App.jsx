import React, { useState } from 'react'
import LoveBg from './assets/lovebg.jpg'
import Ilu from './assets/ILU.svg'

const App = () => {
  const [isActive, setIsActive] = useState(false)
  const [topPosition, setTopPosition] = useState(346)
  const [leftPosition, setLeftPosition] = useState(650)

  const handleClick = () => {
    setTopPosition(Math.floor(Math.random() * (window.innerHeight - 50)))
    setLeftPosition(Math.floor(Math.random() * (window.innerHeight - 100)))
  }

  const handleMouseEnter = () => {
    setTopPosition(Math.floor(Math.random() * (window.innerHeight - 50)))
    setLeftPosition(Math.floor(Math.random() * (window.innerWidth - 100)))
  }

  return (
    <div className={`relative h-[100vh] flex justify-center items-center`}>
      <img src={LoveBg} alt="" className={`relative h-full w-full`} />

      <div className='absolute'>
        {!isActive && <p className='text-black font-extrabold rounded-md uppercase'>Do you love me ?</p>}
        {isActive && <img src={Ilu} alt="" className={`w-[450px] h-[450px]`} />}

        {!isActive && (
          <button
            className={`px-4 py-2 bg-black text-white font-extrabold rounded-md mt-[150px]`}
            onClick={() => setIsActive(!isActive)}
          >
            Yes
          </button>
        )}
      </div>
      {!isActive && (
        <div
          className="absolute"
          style={{
            top: `${topPosition}px`,
            left: `${leftPosition}px`,
          }}
        >
          <button
            className={`px-4 py-2 bg-black text-white font-extrabold rounded-md`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
          >
            No
          </button>
        </div>
      )}
    </div>
  )
}

export default App
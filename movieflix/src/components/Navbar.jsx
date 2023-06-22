import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-yellow-600 text-4xl font-bold cursor pointer'>MOVIEFLIX</h1>
        <div>
            <button className='text-white pr-4'>Entrar</button>
            <button className='bg-yellow-600 px-4 py-2 rounded cursor-pointer text-white'>Inscrever-se</button>
        </div>
    </div>
  )
}

export default Navbar
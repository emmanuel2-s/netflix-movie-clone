import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full z-[100] absolute p-4'>
            <h1 className='text-[#00df9a] text-4xl font-bold cursor-pointer'>MovieMaze</h1>
            <div>
                <button type='button' className='text-white border border-[#00df9a] font-bold rounded cursor-pointer px-4 py-2 hover:shadow-[0_0_15px_#00df9a] hover:text-[#00df9a]'>Sign In</button>
                <button className='text-white bg-[#00df9a] rounded px-4 py-2 font-bold cursor-pointer ml-4 hover:shadow-[0_0_15px_#00df9a]'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
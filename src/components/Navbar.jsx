import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handlerNav = () => {
        setNav(!nav)
    }
    return (
        <div className='rounded-div flex items-center justify-between h-20 font-bold mt-2'>
            <Link to='/'>
                <h1 className='text-2xl'>CoinBase</h1>
            </Link>
            <div className='hidden md:block '>
                <Toggle />
            </div>
            <div className='hidden md:block '>
                <Link to='/signin' className='p-4 hover:text-teal-700'> Sign In </Link>
                <Link to='/signup' className='bg-button text-btnText px-5 py-2 ml-2 mr-4  shadow-lg rounded-sm hover:shadow-2xl'> Sign Up </Link>
            </div>


            <div onClick={handlerNav} className='block md:hidden cursor-pointer z-10'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>


            <div className={nav
                ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in-out duration-500 z-10' :
                'fixed left-[-100%] top-20 h-[90%] justify-between flex flex-col items-center ease-in-out duration-500'
            }>
                <ul className='w-full p-4'>
                    <li className='border-b py-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='border-b py-4'>
                        <Link to='/'>Account</Link>
                    </li>
                    <li className=' py-4'>
                        <Toggle />
                    </li>
                </ul>
                <div className='flex flex-col w-full p-4'>
                    <Link to='/signin'> <button className='w-full my-2 p-3 bg-primary text-primary border-secondary rounded-md shadow-2xl'>Sign In</button> </Link>
                    <Link to='/signup'><button className='w-full my-2 p-3 text-btnText bg-button rounded-md shadow-2xl '> Sign Up</button> </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar
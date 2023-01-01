import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='rounded-div mt-8 mb-4 pb-0 pt-8 text-primary h-max'>
            <p className='text-center md:text-left px-2 font-bold'>Sign up for crypto news</p>

            <div className='grid  md:grid-rows-2'>

                <div className='py-4'>
                    <form>
                        <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-md md:w-auto' type='email' placeholder='Enter your email' />
                        <button onClick={(e)=>{e.preventDefault()}} className='bg-button text-btnText px-4 p-2 w-full rounded-md shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign up</button>
                    </form>
                </div>
                <div className='flex  pt-4 gap-8 md:gap-12 justify-between mx-auto text-accent'>
                    <AiOutlineInstagram size={20} />
                    <FaFacebookF size={20} />
                    <FaTwitter  size={20}/>
                    <FaGithub  size={20}/>
                </div>
                <p className='text-center md:pb-6 py-6'>Developed by @<a href='https://twitter.com/sharma_shubamm' >shubam</a></p>
            </div>
        </div>
    )
}

export default Footer
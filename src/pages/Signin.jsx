import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='rounded-div h-full my-6 md:my-12'>
      <div className='py-12'>
        <h1 className='text-center font-bold text-2xl'>Sign In</h1>
        <div className='w-fit mx-auto'>
          <form>
            <div className='py-4'>
              <label className='text-xl'>Email</label>
              <div className='flex items-center pt-2'>
                <input className='bg-primary border border-input p-2 mr-2 w-full shadow-2xl rounded-xl md:w-auto' type='text' placeholder='Enter your email' />
                <AiOutlineMail size={20} />
              </div>
            </div>

            <div className='items-center py-4'>
              <label className='text-xl py-2'>Password</label>
              <div className='flex items-center pt-2'>
                <input className='bg-primary border border-input p-2 mr-2 w-full shadow-2xl rounded-xl md:w-auto' placeholder='Enter your password' type='password' />
                < AiFillLock size={20} />
              </div>
            </div>
            <button className='bg-button text-btnText px-4 p-2 w-full rounded-xl shadow-2xl hover:shadow-2xl md:w-auto my-2'>Sign In</button>

          </form>
          <p className='py-4 text-center'>Don't have an Account ? <Link className='font-bold' to="/signup">Sign Up</Link></p>
        </div>

        
      </div>
    </div>
  )
}

export default Signin
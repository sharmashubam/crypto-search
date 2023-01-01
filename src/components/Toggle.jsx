import React from 'react'
import { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { ThemeContext } from '../context/Theme'

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className='p-2'>
            {theme === 'dark' ?
                <div className='flex items-center cursor-pointer' onClick={()=>{setTheme(theme=='dark'?'light':'dark')}}>
                    <HiSun  className='text-primary text-2xl mr-2'/>Light Mode
                </div> :
                <div className='flex items-center cursor-pointer' onClick={()=>{setTheme(theme=='dark'?'light':'dark')}}>
                    <HiMoon className='text-primary text-2xl mr-2' />Dark Mode
                </div>}
        </div>
    )
}

export default Toggle
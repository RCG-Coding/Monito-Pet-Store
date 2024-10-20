import React from 'react'
import {Link} from 'react-router-dom';
import logo from './images/Frame.png';

const Flooter = () => {
  return (
    <div className='bg-pink-100 rounded-t-[30px] mt-10 lg:px-40 pt-20 md:px-20 sm:px-10'>
        <div className='bg-blue-950 py-8 px-10 rounded-xl flex items-center justify-between'>
            <p className='text-xl text-white font-bold'>Register Now So Don't Miss<br/> Our Programs</p>
            <div className='flex p-3 bg-white lg:w-2/3 rounded-xl'>
                <input type='text' placeholder='Enter Your Email' className='border-2 w-[450px] h-10 px-5 py-3 rounded-lg'/>
                <button className='bg-blue-950 text-white ml-3 rounded-lg py-2 px-5'>Subcribe Now</button>
            </div>
        </div>

        <div className='flex py-8 justify-between border-b-2 border-slate-300'>
            <div className='flex justify-between items-center space-x-10 font-semibold'>
                <Link to='/home'>Home</Link>
                <Link to='/category'>Category</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div className='flex justify-between w-1/5'>
            <svg class="w-6 h-6 rounded-full text-pink-100 bg-gray-800" 
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
            </svg>

            <svg class="w-6 h-6 text-gray-800 dark:text-white" 
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
            </svg>


            <svg class="h-6 w-6 text-black"  width="24" height="24" 
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
            fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>

            <svg class="w-6 h-6 text-gray-800 dark:text-white" 
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
            </svg>
            </div>
        </div>
        <div className='flex justify-between items-center py-10'>
            <p>2022 Monito All rights reserved,</p>
            <img src={logo} alt='logo'/>
            <div className='flex space-x-8'>
                <p>Term of Service</p>
                <p>Provacy Policy</p>
            </div>
        </div>

    </div>
  )
}

export default Flooter;
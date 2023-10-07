import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import black from '../images/black.png';

function Navbar() {
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img src={black} class="h-20 mr-3 p-0" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zcase</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul  className=" flex justify-between">
                    <li className='mr-2 hover:text-orange-600'>
                        <a aria-current="page" href="#">Devices</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Prints</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Co-Lab</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Customization</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Products</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">New & Featured</a>
                    </li>

                </ul>
                </div>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className=' flex justify-between'>
                    <li className='mr-2 hover:text-orange-600'><FaRegUser /></li>
                    <li className='mr-2 hover:text-orange-600'><FaGlobe /></li>
                    <li className='mr-2 hover:text-orange-600'><FaOpencart /></li>
                    <li className='mr-2 hover:text-orange-600'><FaSearch /></li>

                </ul>
                </div>
            </div>
        </nav>
    )
}
{/*
        <nav className='p-3 w-full flex justify-between'>
            <div className='flex-none'> <h1>ZCase</h1></div>
           
            <div>
                <ul  className=" flex justify-between">
                    <li className='mr-2 hover:text-orange-600'>
                        <a aria-current="page" href="#">Devices</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Prints</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Co-Lab</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Customization</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">Products</a>
                    </li>
                    <li className='mr-2  hover:text-orange-600'>
                        <a href="#">New & Featured</a>
                    </li>

                </ul>
            </div>
            <div>
                <ul className=' flex justify-between'>
                    <li className='mr-2 hover:text-orange-600'><FaRegUser /></li>
                    <li className='mr-2 hover:text-orange-600'><FaGlobe /></li>
                    <li className='mr-2 hover:text-orange-600'><FaOpencart /></li>
                    <li className='mr-2 hover:text-orange-600'><FaSearch /></li>

                </ul>
            </div>

        </nav>
 
   
    )
}
   */}
export default Navbar;










import React from 'react'
import { AiFillTwitterCircle} from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import {CgMail} from 'react-icons/cg';
import { Link } from 'react-router-dom'
const Navbar = () => {
    
    return (
      <div class="navbar bg-base-300 sticky top-0">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="/register" >Register</Link></li>
          <li><Link to="/" >About Us</Link></li>
          </ul>
        </div>
        <h1 class="text-3xl text-blue-700 italic">Tesla</h1>
      </div>
      <div class="navbar-center hidden lg:flex justify-evenly">
        <ul tabindex="0" class=" menu-horizontal p-0 text-lg ">
        <li class="hover:text-blue-900 font-bold  active text-lg"><Link to="/" >Home</Link></li>
          <li class="hover:text-blue-900 font-bold  active text-lg mx-7"><Link to="/login" >Login</Link></li>
          <li class="hover:text-blue-900 font-bold  active text-lg"><Link to="/register" >Register</Link></li> 
          <li class="hover:text-blue-900 font-bold  active text-lg mx-7"><Link to="/" >About Us</Link></li> 
          </ul>
      </div>
      <div class="navbar-end lg-flex">
        <a class="hover:text-blue-700 text-2xl px-3" target="_blank" href=""><SiFacebook></SiFacebook></a>
        <a class="hover:text-blue-700 text-3xl px-3" target="_blank" href=""><AiFillTwitterCircle></AiFillTwitterCircle></a>
        <a class="hover:text-blue-700 text-3xl px-3" target="_blank" href=""><CgMail></CgMail></a>
      </div>
    </div>
  )
}

export default Navbar
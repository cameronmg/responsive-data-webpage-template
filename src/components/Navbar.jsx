//ADD A TRANISTION FOR CLOSING THE NAVBAR
import React, {useState} from 'react'
//importing react icons for mobile navbar
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    //create a use state to give the navbar animation (nav is the specified state of the navbar and setNav will set the navbar to a certain state)
    const [nav, setNav] = useState(false)
    //create  arrow function for the navbar use state so when we click on the menu navbar we will run the handle nav function
    const handleNav = () => {
        //set the navbar to the opposite state so if its open then close it 
        setNav(!nav)
    }

  return (
     //use the div as a wrapper and justify the space between the links
     //center the items and give the items spaceing from the top of the webpage(h-24)
     //set the max width (max-w-[1240px]) and use margin auto (mx-auto) so the links sit in the middle of the screen always
     //give the items padding so they sit well (px-4)
    <div className = 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/*creating the logo in the top left corner and can easily style the name by typing th classnames*/}
        {/*can style the logo within the class definition*/}
        <h1 className ='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        {/*create links to other componenets on webpage and put them in flex box so they are alligned horizontally*/}
        {/*anything above the median the show the flex box*/}
        <ul className = 'hidden md:flex'>
            {/*defining links and create padding for the links so they have spacing*/}
            <li className = 'p-4'>Home</li>
            <li className = 'p-4'>Company</li>
            <li className = 'p-4'>Resources</li>
            <li className = 'p-4'>About</li>
            <li className = 'p-4'>Contact</li>
        </ul>
        {/*creating div for Ai outline menu(react icon for mobile navbar)*/}
        {/*onClick (when the use clicks the icon) run the handleNav function*/}
        {/*only show the menu when it is under a certain size (md)*/}
        <div onClick={handleNav} className ='block md:hidden'>
            {/*if(?) the navbar is not(!) true then show the close icon for the navbar else(:) show the regular hamburger icon*/}
            {nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        {/*MOBILE MENU CODE BELOW*/}
        {/*using use state hook for mobile drop down menu*/}
        {/*making the navbar fixed and it will be at the top left (left-0 top-0) of the screen it will take up 60%(w-[60%]) of the screen and their will be subtle gray border around the menu( border-r-gray-900)*/}
        {/*(h-full) makes the menu fill up the entire screen and bg sets the background color*/}
        {/*if(?) the navbar is not true(closed) then show the navbar else(:) hide the navbar(left-[-100%])*/}
        {/*(ease-in-out duration-500 ) is the animation*/}
        <div className = {nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
            {/*this is for the logo on the mobile navbar*/}
        <h1 className ='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            {/*give the links padding from the top (pt) so they are spaced out (uppercase make sall the text uppercase)*/}
            <ul className ='uppercase p-4'>
                {/*border-b gives the links a border on the base and  (border-gray-600) set the brightness of the border*/}
                <li className = 'p-4 border-b border-gray-600'>Home</li>
                <li className = 'p-4 border-b border-gray-600'>Company</li>
                <li className = 'p-4 border-b border-gray-600'>Resources</li>
                <li className = 'p-4 border-b border-gray-600'>About</li>
                <li className = 'p-4'>Contact</li>  
            </ul>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react';
//import react typed animation
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
        <div className='text-white'>
            {/*(max-w) is the max width of the div class (mt) is how far the div is from the top of the screen (mx-auto) auto adjusts the div to the middle of the screen*/}
            {/*(text-center) center the div in the middle of the screen (flex flex-col) place the items in a column*/}
            <div className ='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            {/*(p-2) gives padding*/}
                <p className='text-[#00df9a] font-bold p-2'> GROWING WITH DATA ANALYTICS</p>
                {/*when the screen is above (md) make the text 7xl(extra large) anything over small(sm) screen make the text 6xl when the screen is above medium give the text a padding (py) of 6*/}
                {/*on anything else (mobile devices) make the screen text-4xl*/}
                <h1 className = 'md:text-7xl sm:text-6xl text-4xl font bold md:py-6'>Grow with data.</h1>
                {/*put the items on same line with (flex) and center them*/}
                <div className='flex justify-center items-center'>
                    {/*for the changing text animation were using REACT-TYPED*/}
                    {/*py-4 gives padding all around the text*/}
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing</p>
                    {/*creating the typing animation*/}
                    <Typed
                    //making the text bold and responsive as well as give the text pading on the left(pl-2) 2 = 2rems
                    //if its aboce medium give the text 4 rems of padding on the left
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    //the words that are being typed
                    strings = {['BTB', 'BTC', 'SASS']}
                    //typing speed of animation
                    typeSpeed ={120}
                    backSpeed={140}
                    //loop forever
                    loop 
                    />
                </div>
                {/*anything above medium(md) make the text 2xl and everything else make it xl*/}
                <p className = 'md:text-2xl text-xl font-bold text-gray-500'> Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                {/*create a button and give it a specific color for the background (bg)*/}
                {/*set the width of the button (w-[200px] and make the edges rounded (rounded))*/}
                {/*(mx-auto) makes the button sit in the middle of the screen// (my-6) gives the button paddding // (py-3) fills the button with padding 
                so more of the background color is show*/}
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero


import React from 'react';

const Newsletter = () => {
  return (
    //make the width(w-full) take up the entire screen and implement padding (py-16)// (px-4) so the input box does not hit the edge of the screen
    <div className='w-full py-16 text-white px-4'>
    {/*set the constant width for the container(max-w-[1240px] place the content in the middle(mx-auto) have the display be a grid(grid))*/}
    {/*anything over large(lg:1000px) implement 3 grid columns*/}
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        {/*if the screen is above large(lg) change the column span from from 1 to 2 so it takes up more space*/}
        <div className='lg:col-span-2 my-4'>
            {/*if the screen is above medium(md) nmake the text 5xl// if the screen is above small(sm) make the text 4xl// anything else make the text xl*/}
            {/*make the font bold and implement padding with 2 rems(py-2)*/}
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        {/*creating the container for the user input box*/}
        <div className='my-4'>
            {/*create the input box for email*/}
            {/*create a flex box that a col(flex-col) and if the size of the screen is above small(sm) make the box a row(flex-row) instead of a column*/}
            {/*(items-center)center the items in the box//(justify-between)=? and //(w-full)=?*/}
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            {/*(p-3) to expand the input box// make the widthfull(w-full) and have rounded corners (rounded-md)//make the text black so you can see the enter email text*/}
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            {/*create a button and give it a specific color for the background (bg)*/}
            {/*set the width of the button (w-[200px] and make the edges rounded (rounded))*/}
            {/*(mx-auto) makes the button sit in the middle of the screen// (my-6) gives the button paddding // (py-3) fills the button with padding 
            so more of the background color is show*/}
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          {/*span makes the text look like a link*/}
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
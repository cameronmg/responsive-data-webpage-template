import React from 'react'
//import images
import Inspire from '../assets/inspire.svg'
import Stats from '../assets/stats.svg'
import Think from '../assets/think.svg'


const Cards = () => {
  return (
    //setting the width so it take sup the whole screen(w-full)
    //setting big padding (py-[10rem])
    //background white
    <div className='w-full py-[10rem] px-4 bg-white'>
        {/*Creating the container for the cards*/}
        {/*defining the max width(max-w-[1240px])//make the container auto center to the page//create a grid box with 3 columns(grid grid-cols-3)// make a gap of 8 between the columns(gap-8)*/}
        {/*only show 3(md:grid-cols-3) columns when you get above a medium breakpoint*/}
        <div className ='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {/*make the cards all the same size*/}
            {/*create a drop shadow(shadow-xl)// create a flex conatiner that is a column(flex flex-col)//define padding(p-4)//for the top and bottom (my-4)*/}
            {/*(rounded-lg) rounds the corners of the container*/}
            {/*create a hover effect that increases the size of the container when mouse is over it(hover:scale-105 duration-300)*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/*set the image to size 20(80px) //and auto adjust to middle (mx-auto)//want it to be just above border so (mt-[-3rem])*/}
                <img className ='w-20 mx-auto mt-[-3rem] bg-white'src={Inspire} alt=""/>
                {/*creating properties for card*/}
                {/*define the size of the text(text-2xl)//make the font bold and centered(font-bold text-center)//and implement padding(py-8)*/}
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                {/*center the text(text-center) set the text size(text-4xl ) and make the text bold(font-bold)*/}
                <p className='text-center text-4xl font-bold'>$149</p>
                {/*edit the whole segment make the text centered and the font medium(font-medium)*/}
                <div className='text-center font-medium'>
                    {/*give the items padding(py-2) //create a border on the bottom of the text(border-b)// create margin on top of first item (mt-8)*/}
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>           
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            {/*SECOND CARD*/}
            {/*make the margin-y to size 8(my-8) so the card is bigger and there is no overlay on of cards mobile devices
            // and anything above medium size for screen change margin to 0// and make the background of the middle card gray so it stands out more*/}
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                {/*set the image to size 20(80px) //and auto adjust to middle (mx-auto)//want it to be just above border so (mt-[-3rem])*/}
                <img className ='w-20 mx-auto mt-[-3rem] bg-transparent'src={Stats} alt=""/>
                {/*creating properties for card*/}
                {/*define the size of the text(text-2xl)//make the font bold and centered(font-bold text-center)//and implement padding(py-8)*/}
                <h2 className='text-2xl font-bold text-center py-8'>Multi User</h2>
                {/*center the text(text-center) set the text size(text-4xl ) and make the text bold(font-bold)*/}
                <p className='text-center text-4xl font-bold'>$1000</p>
                {/*edit the whole segment make the text centered and the font medium(font-medium)*/}
                <div className='text-center font-medium'>
                    {/*give the items padding(py-2) //create a border on the bottom of the text(border-b)// create margin on top of first item (mt-8)*/}
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 5 GB</p>           
                </div>
                {/*make the middle card stand out by changing the color of the button to black*/}
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            {/*THIRD CARD*/}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/*set the image to size 20(80px) //and auto adjust to middle (mx-auto)//want it to be just above border so (mt-[-3rem])*/}
                <img className ='w-20 mx-auto mt-[-3rem] bg-white'src={Think} alt=""/>
                {/*creating properties for card*/}
                {/*define the size of the text(text-2xl)//make the font bold and centered(font-bold text-center)//and implement padding(py-8)*/}
                <h2 className='text-2xl font-bold text-center py-8'>Buissness Plan</h2>
                {/*center the text(text-center) set the text size(text-4xl ) and make the text bold(font-bold)*/}
                <p className='text-center text-4xl font-bold'>$10,000</p>
                {/*edit the whole segment make the text centered and the font medium(font-medium)*/}
                <div className='text-center font-medium'>
                    {/*give the items padding(py-2) //create a border on the bottom of the text(border-b)// create margin on top of first item (mt-8)*/}
                    <p className='py-2 border-b mx-8 mt-8'>10000 GB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 100 GB</p>           
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>       
    </div>
  )
}

export default Cards
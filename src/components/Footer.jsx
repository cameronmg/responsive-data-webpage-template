import React from 'react'
//import the react icons
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    //define the max width of the compononent (max-w-[1240px]) automatically center the div(mx-auto)
    //make the y-padding 16(py-16) and the x-padding 4 (px-4)
    //create grid box and if the screen bigger than large create a grid with 3 columns (lg:grid-cols-3)
    //create gaps in the grid of size 8(gap-8)
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className ='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            {/*create padding on y-axis of 4*/}
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea harum accusamus magni, soluta unde beatae, tempora a 
                maiores alias odit quis nobis optio perspiciatis nisi quaerat 
                ducimus atque? Sunt, delectus!</p>
            {/*wrap all the icons in a div*/}
            {/*create a flex box// if the screen above medium downsize the icon component to 75% (md:w-[75%]) of its size*/}
            {/*(justify-between) gives space between compononents */}
            {/*set margin-y to 6(my-6)*/}
            <div className='flex justify-between md:w-[75%] my-6'>
                {/*set the size of the icons to 30*/}
                <FaFacebookSquare size={30}/>
                <FaDribbbleSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        {/*anything above the large size we want it to be 3 columns (lg:col-span-2) otherwize have the items stacked*/}
        {/*spread out everything on the list(justify-between)*/}
        {/*give space from top of margin(mt-6)*/}
        <div className ='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className = 'font-medium text-gray-400'>Soultions</h6>
                {/*creating list of items*/}
                <ul>
                    {/*give list items y-axis paddding of 2 and make the text small*/}
                    <li className ='py-2 text-sm'>Analytics</li>
                    <li className ='py-2 text-sm'>Marketing</li>
                    <li className ='py-2 text-sm'>Commerce</li>
                    <li className ='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className = 'font-medium text-gray-400'>Support</h6>
                {/*creating list of items*/}
                <ul>
                    {/*give list items y-axis paddding of 2 and make the text small*/}
                    <li className ='py-2 text-sm'>Pricing</li>
                    <li className ='py-2 text-sm'>Documentation</li>
                    <li className ='py-2 text-sm'>Guides</li>
                    <li className ='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className = 'font-medium text-gray-400'>Company</h6>
                {/*creating list of items*/}
                <ul>
                    {/*give list items y-axis paddding of 2 and make the text small*/}
                    <li className ='py-2 text-sm'>About</li>
                    <li className ='py-2 text-sm'>Blog</li>
                    <li className ='py-2 text-sm'>Jobs</li>
                    <li className ='py-2 text-sm'>Press</li>
                    <li className ='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className = 'font-medium text-gray-400'>Legal</h6>
                {/*creating list of items*/}
                <ul>
                    {/*give list items y-axis paddding of 2 and make the text small*/}
                    <li className ='py-2 text-sm'>Claim</li>
                    <li className ='py-2 text-sm'>Policy</li>
                    <li className ='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
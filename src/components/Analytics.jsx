import React from 'react'
//import the images
import Image from '../assets/predict.svg'

const Analytics = () => {
  return (
    //take up the whole width of the page with (w-full)
    //(py-16) gives 4 rem top and bottonm
    <div className='w-full bg-white py-16 px-4'>
        {/*keep conistent with max w of 1240// mx-auto sits in the middle */}
        {/*once the screen increases pass the medium(md) breakpoint expand the grid columns to 2*/}
        <div className = 'max-w-[1240px] mx-auto grid md:grid-cols-2'>
            {/*import the image*/}
            {/*set the size of the image(w-[500px])//have it sit in the middle (mx-auto)//give the image padding my-4*/}
            <img className ='w-[500px] mx-auto my-4'src={Image} alt="/"/>
            {/*create the left side of the page next to the image*/}
            {/*want the image to sit in the middle vertically so make a (flex-col) and place it in the center (justify-center)*/}
            <div className='flex flex-col justify-center'>
                {/*set text color and make bold*/}
                <p className='text-[#00df9a] font-bold'> DATA ANALYTICS DASHBOARD</p>
                {/*if the screen is above medium(md) make the text 4xl// if the screen size is above small(sm) make the text 3xl// and on phones make the text 2xl*/}
                {/*define padding of 2rems (py-2)*/}
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'> Manage Data Analytics Centrally</h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ullam, id nisi, doloribus cum iusto ratione,
                    unde consequatur alias non eligendi dolorum ad voluptas voluptate. 
                    Possimus esse voluptates eius quae eligendi.
                </p>
                {/*create button*/}
                {/*anything above medium(desktop) get rid of the margin auto*/}
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
        </div>
        
    </div>
  )
}

export default Analytics
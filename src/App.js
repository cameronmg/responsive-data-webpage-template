//import react lib
import React from 'react'
//import the analytics section for the webpage
import Analytics from './components/Analytics';
//import hero component
import Hero from './components/Hero';
//import navbar component
import Navbar from './components/Navbar';
//import the newsletter component
import Newsletter from './components/Newsletter';
//import card component
import Cards from './components/Cards';
//import the footer component
import Footer from './components/Footer';


function App() {
  return (
    <div >
        {/*importing the navbar*/}
        <Navbar/>
        {/*importing the hero*/}
        <Hero/>
        {/*importing the analytics*/}
        <Analytics/>
        {/*importing the newsletter*/}
        <Newsletter/>
        {/*importing the cards*/}
        <Cards/>
        {/*importing the footer*/}
        <Footer/>
    </div>
  );
}

export default App;

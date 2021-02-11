import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/index'
import Navbar from '../components/Navbar/index'
import HeroSection from '../components/HeroSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
        </div>
    )
}

export default Home

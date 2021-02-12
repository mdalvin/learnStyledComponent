import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/index'
import Navbar from '../components/Navbar/index'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

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
            <InfoSection/>
        </div>
    )
}

export default Home

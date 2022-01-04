import React, {useState} from 'react'
import Contact from '../components/Contacts';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Technical from '../components/Technical';
import TimeLine from '../components/TimeLine';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Technical/>
        {/* <InfoSection {...homeObjTwo}/> */}
        <Services/>
        {/* <InfoSection {...homeObjThree}/> */}
        <TimeLine/>
        <Contact/>
        <Footer />

        </>
    )
}

export default Home

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import './header.scss'
import { MdMenu, MdOutlineClose } from "react-icons/md";
import logo from '../resources/logo.png';
const Header = () => {
    // show navbar in mobile view
    const [showNavbar, setShowNavbar] = useState(false)
    const [menuicon, seticon] = useState(<MdMenu />)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        if (!showNavbar)
        {
            seticon(<MdOutlineClose />)
        }
        else
        {
            seticon(<MdMenu />)
        }
    }

    // Nav bar on scroll
    function navchange() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("navbar").style.backgroundColor = "rgba(254,247,229,0.45)";
            document.getElementById("navbar").style.backdropFilter = "blur(4px)";
        } else {
            document.getElementById("navbar").style.backgroundColor = "#fef7e5";
        }
    }
    window.addEventListener("scroll", navchange);

    return (
        <nav className="navbar" id='navbar'>
        <div className="container">
        <motion.div className="logo-container"
            initial = {{x: -100}}
            animate={{ x: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
        >
                <img src={logo} className="logo" />
                <h1>Jeffrey Lonzanida</h1>
            </motion.div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                {menuicon}
            </div>
            <motion.div
                className={`nav-elements  ${showNavbar && 'active'}`}
                id="nav-elements"
                initial = {{x: 100}}
                animate={{ x: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
            >
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
            </ul>
            </motion.div>
        </div>
        </nav>
    )
}

export default Header;
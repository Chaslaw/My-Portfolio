import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillFolderOpen} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {

 const [activeNavigation, setActiveNavigation] = useState('#')

    return ( 
    <nav>
        <a href="#" onClick={()=> setActiveNavigation('#')} 
                    className={activeNavigation === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNavigation('#about')} 
                        className={activeNavigation === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#portfolio" onClick={()=> setActiveNavigation('#portfolio')} 
                        className={activeNavigation === '#portfolio' ? 'active' : ''}><AiFillFolderOpen/></a>
        <a href="#quotegame" onClick={()=> setActiveNavigation('#quotegame')} 
                        className={activeNavigation === '#quotegame' ? 'active' : ''}><FaGamepad /></a>
        <a href="#contact" onClick={()=> setActiveNavigation('#contact')} 
                        className={activeNavigation === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>)
}
 
export default Nav;
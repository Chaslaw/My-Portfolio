import {AiOutlineMenu} from 'react-icons/ai'
import './hamburger.css'

const Hamburger = () => {
    
 const toggleMenu = () => {
     const menu = document.querySelector('.menu__small');
     menu.classList.toggle('show_case');
 }
    
    return ( 
    
    <div className='hamburger' onClick={toggleMenu}><AiOutlineMenu/></div> 
    
    
    );
}
 
export default Hamburger;
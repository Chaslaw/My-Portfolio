import {GiHamburgerMenu} from 'react-icons/gi'
import './hamburger.css'

const Hamburger = () => {
    
 const toggleMenu = () => {
     const menu = document.querySelector('.menu__small');
     menu.classList.toggle('show_case');
 }
    
    return ( 
    
    <div className='hamburger' onClick={toggleMenu} ><GiHamburgerMenu /></div> 
    
    
    );
}
 
export default Hamburger;
import footer from './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (  
<footer>
    <a href="#about" className="logo">CHAZZ</a>
    <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#quotegame">Quote game</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer-socials">
        <a href="https://github.com/Chaslaw"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/caslav-lazic-9abb9b30/"><FaLinkedin /></a>
    </div>

    <div className="copy-footer">
        <small> Caslav Lazic &copy; 2022.</small>
    </div>
</footer>
    );
}
 
export default Footer;
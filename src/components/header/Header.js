import './header.css'
import Buttons from './Buttons';
import MyPic from '../../assets/me-matrix.png'
import HeadSoc from './HeaderSoc';
import Hamburger from '../hamburger/Hamburger';
import HamMenu from '../HamMenu/HamMenu';

const Header = () => {
    return ( 
        <header>
            <div className="container header__container">
                <Hamburger />
                <HamMenu />
                <h1>Caslav Lazic</h1>
                <h5 className="text-light">React developer</h5>
                <Buttons />
                <HeadSoc />
                <div className="my-pic">
                    <img src={MyPic} alt="my-pic" className='my-pic fade-in-image'/>
                </div>
                <div className="scroll">
                <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>
                
            </div>
        </header>
     );
}
 
export default Header;
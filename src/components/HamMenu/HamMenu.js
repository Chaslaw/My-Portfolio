import './hammenu.css'

const HamMenu = () => {


    const closeMenu = () => {
          const openMenu = document.querySelector('.menu__small')
          openMenu.classList.remove('show_case');
    }
 
    return (
        <div className="menu__small" >
            <ul onClick={closeMenu}>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#quotegame">Quote Game</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default HamMenu;
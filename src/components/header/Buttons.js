import CV from '../../assets/caslav-lazic-cv.pdf'

const Buttons = () => {
    return ( 
        <div className="buttons">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Send me a message</a>
        </div>
     );
}
 
export default Buttons;
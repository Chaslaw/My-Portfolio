import './about.css';
import ABOUT from '../../assets/desktop-setup.jpg'

const About = () => {
    return (
        <section id='about'>
            <div className="heading">
                <h5>Meet my desktop setup dude</h5>
                <h2>About my work</h2>
            </div>
            <div className="about__container">
                <div className="image_content">
                    <img src={ABOUT} alt="desktop-setup" />
                </div>
                <div className="content">
                    <h2>Short Bio</h2>
                    <p>Hello, my name is Časlav Lazić, start programming 5 years ago, 
                        focusing my work on Front End technologies such as JavaScript and React.</p>
                    <p>I consider my job a life choice and a magnificent opportunity for changing the world in better. 
                       My favorite motto is: "Stop talking, show me the code"!
                    </p>
                    <p>In that manner, let's just start, and see what I got!</p>
                </div>
            </div>
        </section>
    );
}

export default About;
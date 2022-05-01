import CONT from '../../assets/contact-img.jpg'
import { MdOutlineMail } from 'react-icons/md'
import {FaViber} from 'react-icons/fa'
import './contact.css'

const Contact = () => {
    return (
        <section id="contact">
            <div className="heading">
                <h5>Let's talk</h5>
                <h2>Send me a message</h2>
            </div>
            <div className="contact-container">
                <div className="contact-tools">
                    <div className="contact-card">
                        <MdOutlineMail />
                        <h4>Email</h4>
                        <h5>caslavlazic@gmail.com</h5>
                        <a href="mailto: caslavlazic@gmail.com">Send a message</a>
                    </div>
                    <div className="contact-card">
                        <FaViber />
                        <h4>Viber</h4>
                        <h5>+381 64 1295 196</h5>
                        <a href="viber://chat?number=+381641295196">Send a message</a>
                    </div>
                </div>
                <div className="contact-img">
                    <img src={CONT} alt="contact-img" className="contact" />
                </div>
            </div>
        </section>
    )
}

export default Contact;
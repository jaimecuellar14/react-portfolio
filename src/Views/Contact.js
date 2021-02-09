import Navbar from "../Components/Navbar";
import "../styles/contact.css";
const Contact = () =>{
    return(
        <div className="contact-container">
            <Navbar home={true}/>
            <div className="contact-info">
                <p>Feel free to check out my profiles and get in touch with me.
                    You can find me here:

                    
                </p>
                <ul class="contact-platforms">
                        <li>
                            jamescuellar14@gmail.com
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/in/jaime-cuellar-ba2096138/">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/jaimecuellar14">Github</a>
                        </li>
                        <li>
                            <a href="https://www.kaggle.com/jaimec14">Kaggle</a>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Contact;
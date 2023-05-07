import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedinIcon } from "../../assets/icons8-linkedin.svg";
import { ReactComponent as GmailIcon } from "../../assets/icons8-gmail.svg";
import { ReactComponent as Twitter } from "../../assets/icons8-twitter.svg";
import Qiita from "../../assets/icons8-qiita.png";
import ContactLink from "../../components/contact-link/contact-link.component";
import "./contact.styles.scss";
const Contact = () => {
    const twitter = "https://twitter.com/linmiya0504";
    const linkedin = "https://www.linkedin.com/in/%E3%83%A4%E3%83%AA%E3%83%B3-%E3%82%B5%E3%82%A4-6597a4275/";
    const gmail = "mailto:guirec0417@gmail.com";
    return (
        <div className="contact">
            <motion.div className="contact-container"
                animate={{ opacity: 1, y: [50, 0] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <h1 className="contact-title responsive">CONTACT</h1>
                <div className="icon-container">
                    <ContactLink targetUrl={twitter}>
                        <Twitter className="icon icon-size" />
                    </ContactLink>
                    <ContactLink targetUrl={linkedin}>
                        <LinkedinIcon className="icon icon-size" />
                    </ContactLink>
                      <ContactLink targetUrl={gmail}>
                            <GmailIcon className="icon icon-size" />
                     </ContactLink>
                    {/*<FactbookIcon className="icon-size" />*/}
                    {/* <img src={Qiita} className="image-size"></img>*/}
                </div>

            </motion.div>
        </div>
    )
}

export default Contact;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactLink = (prop) => {

    const { targetUrl, children } = prop;
    let targetLink = targetUrl;
    const linkStyle = {
        width:"200px"
    }
    if(targetUrl.includes("mailto")){
        targetLink = "#";
    }
    return (
        <motion.div
            whileHover={{ x: 10,y:-20 }}
            transition={{ type: "spring", damping: 10 }}
            style={linkStyle}
        >
            <Link to={targetLink} 
                  target="_blank"
                  onClick={(e) => {
                    if(targetUrl.includes("mailto")){
                        window.location.href = targetUrl;
                        e.preventDefault();
                    }                 
                  }}  
            >
                {children}
            </Link>
        </motion.div>
    )
}

export default ContactLink;
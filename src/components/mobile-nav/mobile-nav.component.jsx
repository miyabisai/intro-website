import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleContext } from '../../context/toggle.context';
import { motion } from "framer-motion";
import './mobile-nav.styles.scss';

const MobileNav = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(ToggleContext);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="mobile-nav">
            <div className="mobile-nav-content">
                <div className="mobile-nav-links-group">
                    <Link to="/" onClick={toggleMenu}>ABOUT</Link>
                    <Link to="/resume" onClick={toggleMenu}>RESUME</Link>
                    <Link to="/portfolio" onClick={toggleMenu}>PORTFOLIO</Link>
                   {/* <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>*/}
                </div>
            </div>

        </div>

    )

}

export default MobileNav;
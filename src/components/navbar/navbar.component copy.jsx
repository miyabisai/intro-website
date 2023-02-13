import { Fragment,useState} from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../burger/burger.component";

import { ReactComponent as Pointer } from '../../assets/pointer.svg';
import "./navbar.styles.scss";
const Navbar = () => {

    const [linkClass,setLinkClass] = useState('');
    const moveArrow = (e) => {
        //    console.log(e.target.getBoundingClientRect());
        const link = e.target.getBoundingClientRect();
        
        // console.log(link);
        const x_pos = link.left;
        const y_pos = link.top;
        const translate  = `transform: rotate(90deg) translate(0rem,5rem)`;
        // console.log(hovered);
        // setLinkClass('pointed')
    }

    return (
        <Fragment>
            <div className="navbar">
                <div className="hide-navbar-content">
                    <div className="hide-navbar">
                        <BurgerMenu />
                    </div>
                </div>

                <div className="nav-content">
                    <div className="title">
                        <h1>LIN MIYA</h1>
                        <div className="occupation">Web & Software Developer</div>
                    </div>
                    <div className="link-group">
                        <div ><Link className={linkClass} onMouseEnter={moveArrow}  to="/">ABOUT</Link></div>
                        <div ><Link  className={linkClass}  onMouseEnter={moveArrow} to="/resume">RESUME</Link></div>
                        <div><Link  className={linkClass}  onMouseEnter={moveArrow} to="/portfolio">PORTFOLIO</Link></div>
                        <div><Link  className={linkClass} onMouseEnter={moveArrow} to="/contact">CONTACT</Link></div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default Navbar;
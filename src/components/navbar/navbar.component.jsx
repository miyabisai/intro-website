import { Fragment, useState, useEffect, useMemo } from "react";
import BurgerMenu from "../burger/burger.component";
import NavLink from "../nav-link/nav-link.component";
import Pointer from "../pointer/pointer.component";
import Contact from "../../routes/catact/contact.component";


import "./navbar.styles.scss";


const Navbar = () => {
    const [startPos, setStartPos] = useState(1);
    const [endPos, setEndPos] = useState(1);
    const [clicked,setClicked] = useState(false);

    const hoverEnterHandler = (linkIdx) => {
        setEndPos(linkIdx);

    }
    const hoverLeaveHandler = (linkIdx) => {
        setStartPos(linkIdx);

    }
    const clickHandler = () => {
        console.log(clicked);
        setClicked(!clicked);
    }
    return (
        <div className="navbar" >
            <div className="hide-navbar-content">
                <div className="hide-navbar">
                    <BurgerMenu />
                </div>
            </div>

            <div className="nav-content" >
                <div className="title">

                    <h1>LIN MIYA</h1>
                    <div className="occupation">Web & Software Developer</div>
                </div>
                <div class="link-container">
                    <div className="link-group">
                        {/*<Pointer className="pointed"/>*/}
                        <NavLink mouseEnter={() => hoverEnterHandler(1)} mouseLeave={() => hoverLeaveHandler(1)} linkPath={"/"} pageName={"ABOUT"} />
                        <NavLink mouseEnter={() => hoverEnterHandler(2)} mouseLeave={() => hoverLeaveHandler(2)} linkPath={"/resume"} pageName={"RESUME"} />
                        <NavLink mouseEnter={() => hoverEnterHandler(3)} mouseLeave={() => hoverLeaveHandler(3)} linkPath={"/portfolio"} pageName={"PORTFOLIO"} />
                        <NavLink  mouseEnter={() => hoverEnterHandler(4) }  mouseLeave={() => hoverLeaveHandler(4) } linkPath={"/contact"} pageName={"CONTACT"} /> 
                        <Pointer step={{ start: startPos, end: endPos }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
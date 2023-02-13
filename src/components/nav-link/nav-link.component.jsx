// import { useState } from "react";
import { Link } from "react-router-dom";

import './nav-link.styles.scss';

const NavLink = (props) => {
    const { linkPath, pageName,mouseEnter,mouseLeave,click } = props;
    // const [isHovered,setIsHovered] =  useState(false);
    return (
        <div className="link-style">
            <Link
                to={`${linkPath}`}
                className={`navLink`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onClick={click}
            >
                {pageName}
            </Link>
        </div>
    )
}

export default NavLink;
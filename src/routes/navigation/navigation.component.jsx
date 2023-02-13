import { useState, useContext,useEffect,Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ToggleContext } from "../../context/toggle.context";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/navbar.component";
import MobileNav from '../../components/mobile-nav/mobile-nav.component';

import { ReactComponent as UpArrow } from '../../assets/up_arrow.svg';
import './navigation.styles.scss';
const Navigation = () => {
    const { isMenuOpen } = useContext(ToggleContext);
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll',()=>{
          (window.scrollY>200)?setShowTopBtn(true):setShowTopBtn(false);
      })
    }, []);
    const goToTop=()=>{
        window.scrollTo({
            top:0,behavior:'smooth'
        });
    };
    
    return (
        <div>
            <div className="container">
                <div className="nav">
                    <Fragment>
                        <Navbar />
                    </Fragment>
                </div>
                <div className="main">
                    {
                        isMenuOpen ? <MobileNav /> :
                            <Outlet />
                    }
                </div>
                {showTopBtn? (
                    <div className="back-top-buttom" onClick={goToTop}>
                        <UpArrow />
                    </div>):null
                }

            </div>
        </div>
    )
}

export default Navigation;
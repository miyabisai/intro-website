import { useState,useContext } from 'react';
import {ToggleContext} from '../../context/toggle.context';

import './burger.styles.scss';

const BurgerMenu = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const openMenu = () => {
    //     setIsOpen(!isOpen);
    // }
    const {isMenuOpen,setIsMenuOpen} = useContext(ToggleContext);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div onClick={toggleMenu}>
            <div className='menu-button-container' >
                <div className="burgermenu-container">
                    <button
                        className={`burgermenu ${isMenuOpen ? `opened` : ``}`}

                    >
                        <span></span>
                    </button>
                </div>
            </div>
            <div className='menu-word'>
                MENU
            </div>
        </div>
    )
}

export default BurgerMenu;
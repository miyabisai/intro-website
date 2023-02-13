import { useState,useEffect } from 'react';
import { motion } from "framer-motion";

import { ReactComponent as WebLink } from '../../assets/icon-link.svg';
import { ReactComponent as GitRepo } from '../../assets/icons8-github.svg';

import './portfolio-item.styles.scss';

const PortfolioItem = ({ imgSrc, repoLink, webLink }) => {
    const [hovered, setHovered] = useState(false);
    useEffect(()=>{
        if(window.innerWidth<941){
            setHovered(true);
        }   
    });
    const hoverHandler = () => {
        if(window.innerWidth>940){
            setHovered(!hovered);
        }      
    }
    return (
        <div className="portfolio-item"
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
        >
            <div
                style={{ backgroundImage: `url(${imgSrc})` }}
                className={`portfolio-item-img`}
                animate={{ x: 100 }} initial={false}
            >
                {
                    hovered? <motion.div
                            className="portfolio-item-shield"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className='portfolio-item-shield-link' >
                                <a href="www.google.com">
                                    <GitRepo className='git-repo' />
                                </a>
                            </div>
                            <div className='portfolio-item-shield-link'>
                                <a href={repoLink}>
                                    <WebLink className='web-link' />
                                </a>
                            </div>
                        </motion.div> : null
                }
            </div>
            <div className="portfolio-item-text">
                <p>ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            </div>
        </div>
    )
};


export default PortfolioItem;



import { useState } from 'react';
import {motion} from "framer-motion";

import { ReactComponent as WebLink } from '../../assets/icon-link.svg';
import { ReactComponent as GitRepo } from '../../assets/icons8-github.svg';

import './portfolio-item.styles.scss';

const PortfolioItem = ({ imgSrc, repoLink, webLink }) => {
    const [hovered, setHovered] = useState(false);
    const hoverHandler = () => {
        setHovered(!hovered);
    }
    return (
        <div className="portfolio-item"
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
        >
            <div
                style={{ backgroundImage: `url(${imgSrc})` }}
                className={`portfolio-item-img`}
            >
                {
                    hovered && <div className="portfolio-item-shield">
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
                    </div>}
            </div>
            <div className="portfolio-item-text">
                <p>ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            </div>
        </div>
    )
};


export default PortfolioItem;



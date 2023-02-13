import TestComponent from "../../components/test-component/testComponent.component";
import { motion } from 'framer-motion';

import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";
import project1 from './project1.png';
import './portfolio.styles.scss';

const Portfolio = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="portfolio"
        >
            <div className="portfolio-container">
                <h1 className="portfolio-title responsive">PORTFOLIO</h1>
                <div className="portfolio-block">
                    <PortfolioItem imgSrc={project1} />
                    <PortfolioItem imgSrc={project1} />
                    
                </div>            
            </div>
        </motion.div>
    )
}

export default Portfolio;
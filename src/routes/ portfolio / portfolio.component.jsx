import TestComponent from "../../components/test-component/testComponent.component";
import { motion } from 'framer-motion';

import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";
import project1 from './project1.png';
import './portfolio.styles.scss';

const Portfolio = () => {

    return (
        <div className="portfolio">
            <motion.div className="portfolio-container"
                animate={{ opacity: 1, y: [50, 0] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <h1 className="portfolio-title responsive">PORTFOLIO</h1>
                <div className="portfolio-block">
                    <PortfolioItem imgSrc={project1} />
                    <PortfolioItem imgSrc={project1} />

                </div>
            </motion.div>
        </div>
    )
}

export default Portfolio;
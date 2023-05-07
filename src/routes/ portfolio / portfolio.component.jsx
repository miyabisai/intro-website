
import { motion } from 'framer-motion';

import PortfolioItem from "../../components/portfolio-item/portfolio-item.component";
import production1 from '../../assets/portfolio/info-web-v2.png';
import production2 from '../../assets/portfolio/word-card.png';
import production3 from '../../assets/portfolio/manager-system.png';
import production4 from '../../assets/portfolio/eshop.png';
import production5 from '../../assets/portfolio/exhibition.png';
import production6 from '../../assets/portfolio/white.jpg';
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
                    <h1 className="gener-title">React</h1>
                    <div className="gener-block">
                        <PortfolioItem
                            initial="false"
                            imgSrc={production1}
                            webLink="https://linmiya.online"
                            repoLink="https://github.com/miyabisai/intro-website"
                            text="職歴を描くポートフォリオサート。使用する技術はReact。"
                        />
                        <PortfolioItem
                            imgSrc={production2}
                            webLink="https://celebrated-parfait-44b726.netlify.app/"
                            repoLink="https://github.com/miyabisai/word-card"
                            text="語学の学習スピードを上げるために作られた単語カードサービス。使用する技術はReact、firebase。"
                        />
                    </div>
                </div>
                <h1 className="gener-title">Layout</h1>
                <div className="gener-block">

                    <PortfolioItem
                        imgSrc={production3}
                        webLink="https://rainbow-cactus-91baca.netlify.app/"
                        repoLink="https://github.com/miyabisai/manager-system-design"
                        text="画面レイアウトの練習。使用する技術はhtml、SCSS、gulp。"
                    />

                    <PortfolioItem
                        imgSrc={production4}
                        webLink="https://miyabisai.github.io/glasses-eshop/"
                        repoLink="https://github.com/miyabisai/glasses-eshop"
                        text="ECサート画面レイアウトの練習。使用する技術はhtml、SCSS、gulp。"
                    />
                    <PortfolioItem
                        imgSrc={production5}
                        webLink="https://miyabisai.github.io/art-exhibition/"
                        repoLink="https://github.com/miyabisai/art-exhibition"
                        text="LP画面レイアウトの練習。使用する技術はhtml、SCSS、gulp。"
                    />

                </div>
                <h1 className="gener-title">Nodejs</h1>
                    <div className="gener-block">
                        <PortfolioItem
                            imgSrc={production6}
                            webLink=""
                            repoLink="https://github.com/miyabisai/ecomm-api"
                            text="ECサイトのバックエンドを作ってみました。使用する技術はNodejs、mongodb。"
                        />

                    </div>
                    <h1 className="gener-title">Python </h1>
                    <div className="gener-block">
                        <PortfolioItem
                            imgSrc={production6}
                            webLink=""
                            repoLink="https://github.com/miyabisai/stock-crawler"
                            text="ストッククローラーを作ってみますた。使用する技術はpython。"
                        />
                    </div>
                   
            </motion.div>
        </div>
    )
}

export default Portfolio;
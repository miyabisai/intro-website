import { motion } from "framer-motion";
import TestComponent from "../../components/test-component/testComponent.component";
import PersonalImage from "../../components/personal-iamge/personal-image.component";

import './about.styles.scss';
const About = () => {
    return (
        <div  className="about">
            <motion.div className="about-container"
                animate={{ opacity: 1, y: [50, 0] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >

                {/*<TestComponent content={"about me"} />*/}
                <div className="head">
                    <PersonalImage />
                </div>
                <div className="content">
                    <h1 className="page-title">ABOUT ME</h1>
                    <p className="about-text">
                        私は6年ほどエンジニアとしての経験を持っています。自社開発、ECサイト運営、Slerなど、様々な職種を経験して参りました。
                        データベースからWebアプリケーションまで幅広い開発経験を持ち、HTML、CSS、JavaScriptなどのWeb開発技術に熟練しており、クラウドサービスやデータベースに関するタスクの経験もあります。
                        効率的で信頼性の高いコードを書くことができ、チームの一員として様々なプロジェクトに携わっておりました。語学力も活用し、幅広い情報源から情報を集めて技術についての解決策を見出すことができます。
                        新しい技術の変化にも柔軟に対応し、挑戦することを好み、常に学習を続け、新しいスキルを身に付けています。
                        スキルを習得するため、普段からオンラインコースの受講や資格の取得など努力を惜しみません。今後も自分自身の能力を拡張し、新たなチャレンジに踏み出していけることを望んでいます。
                    </p>
                </div>

            </motion.div>
        </div>
    )
}

export default About;
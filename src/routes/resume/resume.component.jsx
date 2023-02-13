import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CareerItem from "../../components/career-tiem/career-item.component";
import './resume.styles.scss';


const Resume = () => {
    const listStyle = { listStyle: 'square' };
    const achievementStyle = { paddingLeft: '1.25rem' };
    return (
        <div className="resume">
            <motion.div
                className="resume-container"
                animate={{ opacity: 1, y: [50, 0] }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <h1 className="page-title">RESUME</h1>
                <div className="resume-block">
                    <h1 className="resume-title">プログラミングスキル </h1>
                    <div className="resume-article">
                        <div className="skill-container">
                            <h3 className="resume-subtitle">言語：</h3>
                            <span className="skill">Javascript</span>
                            <span className="skill">Typescript</span>
                            <span className="skill">Python</span>
                            <span className="skill">SQL</span>
                            <span className="skill">SCSS</span>
                            <span className="skill">PHP</span>
                            <span className="skill">C#</span>
                        </div>
                        <div className="skill-container">
                            <h3 className="resume-subtitle">データベース:</h3>
                            <span className="skill">MySQL</span>
                            <span className="skill">Oracle</span>
                            <span className="skill">SQLServer</span>
                        </div>
                        <div className="skill-container">
                            <h3 className="resume-subtitle">クラウド:</h3>
                            <span className="skill">AWS</span>
                            <span className="skill">Firebase</span>
                        </div>
                        <div className="skill-container">
                            <h3 className="resume-subtitle">バージョン管理:</h3>
                            <span className="skill">Git</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="resume-title">資格</h1>
                    <div className="resume-article">
                        <div className="certification-container">
                            <h3 className="resume-subtitle">クラウド:</h3>
                            <ul className="certification">
                                <li>AWS Certified Solutions Architect - Associate</li>
                            </ul>
                        </div>
                        <div className="certification-container">
                            <h3 className="resume-subtitle">データベース:</h3>
                            <ul className="certification">
                                <li>Microsoft Certified Solutions Associate: SQL Server 2012/2014</li>
                                <li>Oracle Database 11g Administrator Certified Associate</li>
                            </ul>
                        </div>

                        <div className="certification-container">
                            <h3 className="resume-subtitle">プログラミング:</h3>
                            <ul className="certification">
                                <li>Microsoft Certified Solutions Developer: Web Applications</li>
                                <li>Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3</li>
                            </ul>
                        </div>
                        <div className="certification-container">
                            <h3 className="resume-subtitle">言語:</h3>
                            <ul className="certification">
                                <li>JLPT N1</li>
                                <li>TOEIC 720点</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resume-block">
                    <h1 className="resume-title">職務経歴 </h1>
                    <div className="resume-artic">
                        <div className="career-container">
                            <h3 className="company-name">株式会社A社
                                <span>(2020/1~現在)</span>
                            </h3>
                            <CareerItem
                                business="Sler"
                                projectName="マクロツール"
                                occupation="システムエンジニア"
                                skills="エクセル、VB"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>マクロツールの製造。</li>
                                        <li>マクロツールのテスト。</li>
                                        <li>AWS技術調査。</li>
                                    </ul>
                                </div>}
                            />
                            <CareerItem
                                projectName="ドキュメント自動化システム"
                                occupation="システムエンジニア"
                                skills="Power Platform、VB"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>エクセルでマクロの。</li>
                                        <li>自動化ツールの製造。</li>
                                        <li>自動化ツールのテスト。</li>
                                    </ul>
                                </div>}
                            />
                            <CareerItem
                                projectName="業務システムの更新"
                                occupation="システムエンジニア"
                                skills="Vue、SQL、Oracle、Lambda"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>システムの新画面の製造。</li>
                                        <li>SQLの製造。</li>
                                        <li>仕様書の作成。</li>
                                    </ul>
                                </div>}
                            />
                            <CareerItem
                                projectName="在庫管理ツール"
                                occupation="フルスタックエンジニア"
                                skills="javascript、css、AWS EC2、AWS api gateway、AWS SDK"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>画面のデーサンと開発。</li>
                                        <li>AWS サービスの調査と実装。</li>
                                        <li>ライブラリーの調査と実装。</li>
                                        <li>データ処理に関するプログラミングの製造。</li>
                                    </ul>
                                </div>}
                            />
                            <CareerItem
                                projectName="フルスタックエンジニア"
                                occupation="通話と業務システム"
                                skills={<p>jQuery、css、php、SQL、AWS RDS database<br />
                                    AWS lambda、AWS EC2、AWS Connect</p>}
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>担当チームが未経験な技術を調査と報告。</li>
                                        <li>取引先の要望に応じてシステムの製造</li>
                                        <li>既存システムの欠点を分析と改善方法の提案。</li>
                                        <li>システムアーキテクチャの設計。</li>
                                    </ul>
                                </div>}
                            />
                            <CareerItem
                                projectName="人事システム画面制作"
                                occupation="フロントエンドエンジニア"
                                skills="html、CSS"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>システム画面設計とプログラミング製造を担当しておりました。</li>
                                    </ul>
                                </div>}
                            />
                        </div>
                        <div className="career-container">
                            <h3 className="company-name">株式会社B社
                                <span>(2019/2~2020/1)</span>
                            </h3>
                            <CareerItem
                                business="Sler"
                                projectName="物流システム"
                                occupation="システムエンジニア"
                                skills="C#、SQL Sever、VB"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>システムエンジニアとして、取引先に常駐し、オフショアの開発チームと連携しました。</li>
                                        <li>仕様書の制作と翻訳を務めました。</li>
                                        <li>取引先と開発チームの連絡、進捗管理など務めました。</li>
                                        <li>ソースレビューやテストを担当しました。</li>
                                        <li>お急ぎ要件があった場合、プログラミングの製造も務めました。</li>
                                    </ul>
                                </div>}
                            />
                        </div>
                        <div className="career-container">
                            <h3 className="company-name">株式会社C社
                                <span>(2018/5~2019/1)</span>
                            </h3>
                            <CareerItem
                                business="EC"
                                projectName="ECサイト、CSMシステムメンテンスなど"
                                occupation="フルスタックエンジニア"
                                skills="PHP、Javascript、jQuery、css、MySQL、GitHub"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>海外向けのECサイを立ち上げ、スムーズに稼働できました。</li>
                                        <li>新規サビースのデザインと製造。</li>
                                        <li>ECサイトの構築と運用監視。</li>
                                        <li>海外向けの決済サビースを会社に導入しました。</li>
                                    </ul>
                                </div>}
                            />
                        </div>
                        <div className="career-container">
                            <h3 className="company-name">Cybersoft(Taiwan)
                                <span>(2015/12~2017/6)</span>
                            </h3>
                            <CareerItem
                                business="自社開発"
                                projectName="クレジットカート基幹システム"
                                occupation="フルスタックエンジニア"
                                skills="C#、SQLSever、jQuery、css"
                                achievement={<div style={achievementStyle}>
                                    <ul style={listStyle}>
                                        <li>PGとして業務に携わりました。</li>
                                        <li>開発スゲジュールに遅れなく機能を交付できます。</li>
                                        <li>先輩の任務を渡されたほど信用されました。</li>
                                    </ul>
                                </div>}
                            />
                        </div>
                    </div>
                </div>
                <div className="resume-block">
                    <h1>学歴</h1>
                    <div className="resume-article education" style={achievementStyle}>
                        <ul style={{ fontSize: '1.5rem' }}>
                            <li><a target="_blank" href="https://www.glis.ntnu.edu.tw/index.php/en/main/">
                                National Taiwan Normal University
                                <span>Graduate Institute Of Library & Information Studies</span></a>
                            </li>
                            <li><a target="_blank" href="https://history.nccu.edu.tw/eng/PageFront">
                                National Chengchi University<span>History</span></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </motion.div>
        </div>)

}

export default Resume;
import './career-item.styles.scss';

const CareerItem = (props) => {
    const { business, projectName, occupation, skills, achievement } = props;
    return (
        <div className="project">
            <ul className="project-container">
                {
                    business !== undefined ? (
                        <ul className="project-item">
                            <li className="name">事業内容</li>
                            <li className="content">{business}</li>
                        </ul>) : null
                }
                <ul className="project-item">
                    <li className="name">プロジェクト概要</li>
                    <li className="content">{projectName}</li>
                </ul>
                <ul className="project-item">
                    <li className="name">職種</li>
                    <li className="content">{occupation}</li>
                </ul>
                <ul className="project-item">
                    <li className="name">利用技術</li>
                    <li className="content">{skills}</li>
                </ul>
                <ul className="project-item ident">
                    <li className="name">実績</li>
                    <li className="content indent">
                        {achievement}
                    </li>
                </ul>
            </ul>
            <hr />
        </div>

    )
}

export default CareerItem;
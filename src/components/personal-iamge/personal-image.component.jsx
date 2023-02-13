import AiHead from "../../assets/ai-head.png";

import './personal-image.styles.scss';




const PersonalImage = ()=>{
    const class_name = ["personal-image"].join(' '); 
    return(
        <div className={class_name}>
            <img src={AiHead}></img>
        </div>
    )
} 


export default PersonalImage;
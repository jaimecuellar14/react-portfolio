import jaime_jedi from "../../Assets/jaime1.jpg"
import { useTranslation } from "react-i18next";
const AboutHeader = () =>{
    const { t, i18n } = useTranslation();
    return(
        <div>
            <div className="about-header-info">
                <h1>{t("carrera")}</h1>
                <img src={jaime_jedi} alt="jaime_jedi" style={{height:"50%", width:"50%"}}></img>
            </div>
        </div>
    )
}
export default AboutHeader;
import { useTranslation } from "react-i18next";
const { Button } = require("@material-ui/core")

const AboutInfo = () => {
    const { t, i18n } = useTranslation();
    const showCV = () => {
        window.open("https://drive.google.com/file/d/1swTK1rzVOVlz3Yzn3lSpe6RBJLjpmCL4/view?usp=sharing");
    }
    return(
        <div className="about-info">
            <p className="about-introduction">
                {t("personal-info")}
            </p>
            <div className="downloadCV-button">
                <Button variant="contained" color="primary" onClick={showCV}>
                    {t("ver-cv")}
                </Button>
            </div>
        </div>
    )
}

export default AboutInfo;
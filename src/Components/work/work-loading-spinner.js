import { CircularProgress } from '@material-ui/core';
import "../../styles/work.css";
import { useTranslation } from "react-i18next";
const WorkLoadingSpinner = () =>{
    const { t, i18n } = useTranslation();
    return(
        <div className="loading-spinner">
            <CircularProgress color="secondary"/>
            <p style={{color:"white"}}>{t("getting-repos")}</p>
        </div>
    )
}

export default WorkLoadingSpinner;
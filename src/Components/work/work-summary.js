import { useTranslation } from "react-i18next";
const WorkSummary = () => {
    const { t, i18n } = useTranslation();
    return(
        <div className="work-summary-info">
            <p>
                {t("work-info")}
                <ul>
                    <li>AngularJS</li>
                    <li>PHP Slim</li>
                    <li>Cordova</li>
                    <li>Gulp</li>
                    <li>Xamarin Forms</li>
                    <li>SQL</li>
                </ul>
            </p>
        </div>
    )
}

export default WorkSummary;
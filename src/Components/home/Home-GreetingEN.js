import { useTranslation } from "react-i18next";


const HomeGreetingEN = () => {
    const { t, i18n } = useTranslation();
    return(
        <div>
            <div className="item">
                    <a href="/about">
                        <h1 className="label hi new-label">
                            <span>
                                {t('hola')}
                            </span>
                        </h1>
                    </a>
                </div>
                <div className="item">
                    <a href="/contact">
                        <h2 className="label jaime new-label">
                            <span>
                                {t("nombre")}
                            </span>
                        </h2>
                    </a>
                </div>
                <div className="item">
                    <a href="/work">
                        <h3 className="label cuellar new-label">
                            <span>
                                {t("apellido")}
                            </span>
                        </h3>
                    </a>
                </div>
        </div>
    )
}

export default HomeGreetingEN;
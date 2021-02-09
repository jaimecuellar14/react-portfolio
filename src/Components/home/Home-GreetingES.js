import { useTranslation } from "react-i18next";


const HomeGreetingES = () => {
    const { t, i18n } = useTranslation();
    return(
        <div>
            <div className="item">
                    <a href="/about">
                        <h1 className="label hi new-label-es">
                            <span>
                                {t('hola')}
                            </span>
                        </h1>
                    </a>
                </div>
                <div className="item">
                    <a href="/contact">
                        <h2 className="label jaime new-label-es">
                            <span>
                                {t("nombre")}
                            </span>
                        </h2>
                    </a>
                </div>
                <div className="item">
                    <a href="/work">
                        <h3 className="label cuellar new-label-es">
                            <span>
                                {t("apellido")}
                            </span>
                        </h3>
                    </a>
                </div>
        </div>
    )
}

export default HomeGreetingES;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import  translationsES from "./Assets/translations/translationsES.json";
import translationsEN from "./Assets/translations/translationsEN.json";

const resources = {
    EN:{
        translation: translationsEN
    },
    ES:{
        translation:translationsES
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng:"EN",
        keySeparator:false,
        interpolation:{
            escapeValue:false
        }
    });

export default i18n;
import {initReactI18next} from "react-i18next";
import i18n from "i18next";

import TrasEng from '../lang/eng.json'
import TrasRu from '../lang/ru.json'
import TrasUz from '../lang/uz.json'


const resources = {
    en: {
        translation: TrasEng
    },
    ru: {
        translation: TrasRu
    },
    uz: {
        translation: TrasUz
    }
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

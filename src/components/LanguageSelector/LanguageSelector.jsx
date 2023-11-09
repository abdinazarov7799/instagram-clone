import {useTranslation} from "react-i18next";
import styled from "styled-components";
import uz from "../../assets/icons/uz.png"
import ru from "../../assets/icons/ru.png"
import eng from "../../assets/icons/eng.png"
import i18n from "i18next";
import {useState} from "react";
import {useSettingsStore} from "../../Store/settingsStore.jsx";
import {get} from "lodash";
const Language = styled.button `
    display: flex;
    align-items: center;
    margin: 2px 0;
    padding: 12px;
    border: none;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
      &:hover{
        background-color: #e4e6eb;
        & img{
          transition: 400ms;
          transform: scale(1.1);
        }
      }
  
`

const LanguageSelector = () => {
    const [showLang, setShowLang] = useState(false);
    const lang = useSettingsStore(state => get(state, 'lang', () => {}));
    const setLang = useSettingsStore(state => get(state, 'setLang', () => {}));
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    console.log(lang,"lang")
    console.log(theme,"theme")
    const { t } = useTranslation();
    const LangList = styled.ul `
      display: ${showLang ? 'block' : 'none'};
      list-style: none;
      padding: 0;
      position: absolute;
      top: -105px;
      background: #e4e6eb;
      border-radius: 10px;
      transition: 400ms;
`
    const changeLanguage = (lng) => {

        return () => {
            setShowLang(!showLang);
            setLang(lng);
            i18n.changeLanguage(lng);
        }
    }

    const langClickHandler = () =>{
        setShowLang(!showLang);
    }
  return(
      <>
                  <LangList>
                      <li>
                          <Language onClick={changeLanguage('en')}>
                              <img src={eng} width={20} height={20} className='me-2'/>
                              <span>English</span>
                          </Language>
                      </li>
                      <li>
                          <Language onClick={changeLanguage('ru')}>
                              <img src={ru} width={20} height={20} className='me-2'/>
                              <span>Русский</span>
                          </Language>
                      </li>
                      <li>
                          <Language onClick={changeLanguage('uz')}>
                              <img src={uz} width={20} height={20} className='me-2'/>
                              <span>O'zbek</span>
                          </Language>
                      </li>
                  </LangList>
          <Language onClick={langClickHandler}>
              <img src={eng} width={20} height={20} className='me-2'/>
              {t('current_language')}
          </Language>
      </>
  )
}
export default LanguageSelector

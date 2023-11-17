import styled from "styled-components";
import uz from "../../assets/icons/uz.png"
import ru from "../../assets/icons/ru.png"
import eng from "../../assets/icons/eng.png"
import i18n from "i18next";
import {useState} from "react";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {Dropdown} from "antd";

const LanguageSelector = () => {
    const [showLang, setShowLang] = useState(false);
    const lang = useSettingsStore(state => get(state, 'lang', () => {}));
    const setLang = useSettingsStore(state => get(state, 'setLang', () => {}));
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const currentLang = []
    const items = []

    const LanguageBtn = styled.button `
        margin: 2px 0;
        padding: 12px 8px;
        border: none;
        background: transparent;
        border-radius: 10px;
        cursor: pointer;
        color: ${theme !== 'dark' ? '#000' : '#fff'};
          &:hover{
            background-color: #e4e6eb;
            color: #000;
            & img{
              transition: 400ms;
              transform: scale(1.1);
            }
          }
`
    const changeLanguage = (lng) => {
        return () => {
            setShowLang(!showLang);
            setLang(lng);
            i18n.changeLanguage(lng);
        }

    }
    const langs = [
        {
            key: 'uz',
            label: (
                <span onClick={changeLanguage('uz')} className="d-flex align-items-center">
                    <img src={uz} width={20} height={20} className='me-2'/>
                    <span className="d-none d-xl-block">O'zbek</span>
                </span>
            ),
        },
        {
            key: 'eng',
            label: (
                <span onClick={changeLanguage('eng')} className="d-flex align-items-center">
                    <img src={eng} width={20} height={20} className='me-2'/>
                    <span className="d-none d-xl-block">English</span>
                </span>
            ),
        },
        {
            key: 'ru',
            label: (
                <span onClick={changeLanguage('ru')} className="d-flex align-items-center">
                    <img src={ru} width={20} height={20} className='me-2'/>
                    <span className="d-none d-xl-block">Русский</span>
                </span>
            ),
        },
    ];
    langs.map((value) => {
        value.key === lang ?
            currentLang.push(value.label) :
            items.push(value)
    })

  return(
      <>
          <div>
              <Dropdown
                  menu={{
                      items,
                  }}
                  placement="topLeft"
              >
                  <LanguageBtn>
                      {
                          currentLang === [] ?
                          <span onClick={changeLanguage('eng')} className="d-flex align-items-center">
                              <img src={eng} width={20} height={20} className='me-2'/>
                              <span className="d-none d-xl-block">English</span>
                          </span> : currentLang
                      }
                  </LanguageBtn>
              </Dropdown>
          </div>
      </>
  )
}
export default LanguageSelector

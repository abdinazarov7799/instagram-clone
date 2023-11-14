import {useTranslation} from "react-i18next";
import styled from "styled-components";
import uz from "../../assets/icons/uz.png"
import ru from "../../assets/icons/ru.png"
import eng from "../../assets/icons/eng.png"
import i18n from "i18next";
import {useEffect, useState} from "react";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {Dropdown, Space} from "antd";
const LanguageBtn = styled.button `
    width: 100%;
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
    const { t } = useTranslation();
    const currentLang = []
    const items = []

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
          <Space>
              <Dropdown
                  menu={{
                      items,
                  }}
                  placement="topLeft"
              >
                  <LanguageBtn >
                      {currentLang}
                  </LanguageBtn>
              </Dropdown>
          </Space>
      </>
  )
}
export default LanguageSelector

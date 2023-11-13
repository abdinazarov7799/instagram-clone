import {useTranslation} from "react-i18next";
import styled from "styled-components";
import uz from "../../assets/icons/uz.png"
import ru from "../../assets/icons/ru.png"
import eng from "../../assets/icons/eng.png"
import i18n from "i18next";
import {useState} from "react";
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
    // const [currentImg, setCurrentImg] = useState()
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        return () => {
            setShowLang(!showLang);
            setLang(lng);
            i18n.changeLanguage(lng);
        }
    }

    const items = [
        {
            key: '1',
            label: (
                <span onClick={changeLanguage('uz')}>
                    <img src={uz} width={20} height={20} className='me-2'/>
                    <span>O'zbek</span>
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={changeLanguage('eng')}>
                    <img src={eng} width={20} height={20} className='me-2'/>
                    <span>English</span>
                </span>
            ),
        },
        {
            key: '3',
            label: (
                <span onClick={changeLanguage('ru')}>
                    <img src={ru} width={20} height={20} className='me-2'/>
                    <span>Русский</span>
                </span>
            ),
        },
    ];

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
                      <img src={uz} width={20} height={20} className='me-2'/>
                      <span className="d-none d-xl-block">{t('current_language')}</span>
                  </LanguageBtn>
              </Dropdown>
          </Space>
      </>
  )
}
export default LanguageSelector

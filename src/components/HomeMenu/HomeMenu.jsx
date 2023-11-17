import {Dropdown, Switch} from "antd";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {useTranslation} from "react-i18next";
import MenuImg from "../../assets/icons/menu.png";
import {useNavigate} from "react-router";
import Menu from "../Menu/Menu.jsx";
import {useEffect, useState} from "react";


const HomeMenu = () => {
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const setTheme = useSettingsStore(state => get(state, 'setTheme', () => {}));
    const setIsLogin = useSettingsStore(state => get(state, 'setIsLogin', () => {}));
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);

    const handleLogout = () => {
        setIsLogin(false);
        navigate("/auth/login")
    };
    const { t } = useTranslation();
    useEffect(() => {
        if (theme === 'dark'){
            setChecked(true)
        } else {
            setChecked(false)
        }
    })
    const onChange = (checked) => {
        if (checked){
            setTheme('dark');
            setChecked(true)
        } else {
            setTheme('light');
            setChecked(false)
        }
    };
    const items = [
        {
            key: '1',
            label: (
                <div className="d-flex align-items-center justify-content-between">
                    <p className='pe-2'>{theme}</p>
                    <Switch onChange={onChange} checked={checked}/>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <span onClick={handleLogout}>
                    <span>{t("logOut")}</span>
                </span>
            ),
        },

    ];
    return (
      <>
          <div>
              <Dropdown
                  menu={{
                      items,
                  }}
                  placement="topLeft"

              >
                  <span>
                      <Menu title={t('more')} img={MenuImg}/>
                  </span>
              </Dropdown>
          </div>
      </>
  );
}
export default HomeMenu;

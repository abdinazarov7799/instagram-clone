import {Dropdown, Space, Switch} from "antd";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {useTranslation} from "react-i18next";
import Menu from "../../assets/icons/menu.png";
import SidebarMenu from "../SidebarMenu/SidebarMenu.jsx";
import {useAuthStore} from "../../store/useAuth.jsx";
import {useNavigate} from "react-router";


const HomeMenu = () => {
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    // const logOut = useSettingsStore(state => get(state, 'logOut', () => {}));
    const setTheme = useSettingsStore(state => get(state, 'setTheme', () => {}));
    const logOut = useAuthStore((state) => state.logOut);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        navigate("/login")
    };
    const { t } = useTranslation();
    const onChange = (checked) => {
        if (checked){
            setTheme('dark')
        } else setTheme('light');
    };
    const items = [
        {
            key: '1',
            label: (
                <div className="d-flex align-items-center justify-content-between">
                    <p className='pe-2'>{theme}</p>
                    <Switch onChange={onChange} />
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
          <Space>
              <Dropdown
                  menu={{
                      items,
                  }}
                  placement="topLeft"
              >
                  <span>
                      <SidebarMenu title={t('more')} img={Menu}/>
                  </span>
              </Dropdown>
          </Space>
      </>
  );
}
export default HomeMenu;

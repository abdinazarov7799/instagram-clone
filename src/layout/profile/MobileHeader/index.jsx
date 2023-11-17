import styled from "styled-components";
import Logo from '../../../assets/icons/Logo-Instagram.png'
import Heart from "../../../assets/icons/heart.png";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Menu from "../../../components/Menu/Menu.jsx";
import Notifications from "../../../components/Notifications/index.jsx";
import useLikedPosts from "../../../store/useLikedPosts.jsx";
import {useSettingsStore} from "../../../store/settingsStore.jsx";
import {get} from "lodash";

const MobileHeader = () => {
    const [notifications, setNotifications] = useState(false);
    const notificationsToggle = () => setNotifications(!notifications);
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const { likedPosts } = useLikedPosts();
    const { t } = useTranslation();

    const Header = styled.div`
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      padding: 0 16px;
      width: 100%;
      z-index: 100;
      justify-content: space-between;
      align-items: center;
      background-color: ${theme === 'dark' ? '#000' : '#fff'};
      color: ${theme !== 'dark' ? '#000' : '#fff'};
      border-bottom: 1px solid ${theme === 'dark' ? '#808080' : '#e4e6eb'};
       input{
         width: 80%;
         outline: none;
         padding: 5px 15px;
         border: 1px solid transparent;
         background-color: ${theme === 'dark' ? '#262626' : '#EFEFEF'};
         color: ${theme !== 'dark' ? '#000' : '#fff'};
         border-radius: 10px;
         margin: 0 5px;
         font-weight: 300;
       }
`
  return (
      <>
          <Notifications isOpen={notifications}
                         toggle={notificationsToggle}
                         likedPosts={likedPosts}
          />
          <Header>
              <div>
                  <img src={Logo} alt="Logo" width={105} height={60} />
              </div>
              <div className="d-flex align-items-center">
                  <input type="text" placeholder={t("search")}/>
                  <Menu toggle={notificationsToggle} img={Heart}/>
              </div>
          </Header>
      </>
  )
}
export default MobileHeader;

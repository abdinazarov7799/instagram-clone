import styled from "styled-components";
import Logo from '../../../assets/icons/Logo-Instagram.png'
import Heart from "../../../assets/icons/heart.png";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Menu from "../../../components/Menu/Menu.jsx";
import Notifications from "../../../components/Notifications/index.jsx";
import useLikedPosts from "../../../store/useLikedPosts.jsx";

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
  background-color: #fff;
  border-bottom: 1px solid #e4e6eb;
   input{
     width: 270px;
     outline: none;
     padding: 5px 15px;
     border: 1px solid transparent;
     background-color: #EFEFEF;
     border-radius: 10px;
     margin-right: 5px;
     font-weight: 300;
   }
`
const MobileHeader = () => {
    const [notifications, setNotifications] = useState(false);
    const notificationsToggle = () => setNotifications(!notifications);
    const { likedPosts } = useLikedPosts();
    const { t } = useTranslation();

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
                  <div>
                      <input type="text" placeholder={t("search")}/>
                  </div>
                  <div>
                      <Menu toggle={notificationsToggle} img={Heart}/>
                  </div>
              </div>
          </Header>
      </>
  )
}
export default MobileHeader;

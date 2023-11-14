import SidebarMenu from "../../../components/SidebarMenu/SidebarMenu.jsx";
import Home from '/src/assets/icons/home.png'
import Search from '/src/assets/icons/search.png'
import Chat from '/src/assets/icons/chat.png'
import Create from '/src/assets/icons/tab.png'
import Heart from '/src/assets/icons/heart.png'
import HeartFilled from '/src/assets/icons/heart-filled.png'
import Explore from '/src/assets/icons/explore.png'
import User from '/src/assets/icons/user.png'
import Reels from '/src/assets/icons/video.png'
import Logo from '/src/assets/icons/Logo-Instagram.png'
import InstagramIcon from '/src/assets/icons/instagram-icon.png'
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Col} from "reactstrap";
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector.jsx";
import CreatePost from "../../../components/CreatePost/CreatePost.jsx";
import {useState} from "react";
import HomeMenu from "../../../components/HomeMenu/HomeMenu.jsx";
import Notifications from "../../../components/Notifications/index.jsx";

const SideBarDiv = styled.div `
  position: fixed;
  z-index: 5;
  padding: 8px 12px;
  border-right: 1px solid rgba(128, 128, 128, 0.34);
  height: 100vh;
  background-color: #fff;
`
const SideBar = () => {
    const { t } = useTranslation();
    const [newPostModal, setNewPostModal] = useState(false);
    const newPostModalToggle = () => setNewPostModal(!newPostModal);
    const [notifications, setNotifications] = useState(false);
    const notificationsToggle = () => setNotifications(!notifications);
  return (
      <>
          <CreatePost isOpen={newPostModal} toggle={newPostModalToggle}/>
          <Notifications toggle={notifications}/>
          <SideBarDiv className="d-none d-md-block">
              <div>
                  <div className='d-flex ps-2 my-3'>
                      <img className="d-none d-xl-block" src={Logo} alt="Instagram" width={105} height={60}/>
                  </div>
                  <div className="d-block d-xl-none mb-4">
                      <SidebarMenu img={InstagramIcon}/>
                  </div>
                  <SidebarMenu title={t('home')} img={Home}/>
                  <SidebarMenu title={t('search')} img={Search}/>
                  <SidebarMenu title={t('explore')} img={Explore}/>
                  <SidebarMenu title={t('reels')} img={Reels}/>
                  <SidebarMenu title={t('messages')} img={Chat}/>
                  <SidebarMenu toggle={notificationsToggle} title={t('notifications')} img={Heart}/>
                  <SidebarMenu toggle={newPostModalToggle} title={t('create')} img={Create}/>
                  <SidebarMenu title={t('profile')} img={User}/>
              </div>
              <Col className="d-flex flex-column mt-5 pt-3">
                  <LanguageSelector />
                  <HomeMenu />
              </Col>
          </SideBarDiv>
      </>
  )
}
export default SideBar

import Home from '/src/assets/icons/home.png'
import Search from '/src/assets/icons/search.png'
import Chat from '/src/assets/icons/chat.png'
import Create from '/src/assets/icons/tab.png'
import Heart from '/src/assets/icons/heart.png'
import Explore from '/src/assets/icons/explore.png'
import User from '/src/assets/icons/user.png'
import Reels from '/src/assets/icons/video.png'
import Logo from '/src/assets/icons/Logo-Instagram.png'
import InstagramIcon from '/src/assets/icons/instagram.png'
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Col} from "reactstrap";
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector.jsx";
import CreatePost from "../../../components/CreatePost/CreatePost.jsx";
import {useState} from "react";
import HomeMenu from "../../../components/HomeMenu/HomeMenu.jsx";
import Notifications from "../../../components/Notifications/index.jsx";
import Menu from "../../../components/Menu/Menu.jsx";
import useLikedPosts from "../../../store/useLikedPosts.jsx";
import {useSettingsStore} from "../../../store/settingsStore.jsx";
import {get} from "lodash";

const SideBar = () => {
    const { t } = useTranslation();
    const [newPostModal, setNewPostModal] = useState(false);
    const newPostModalToggle = () => setNewPostModal(!newPostModal);
    const [notifications, setNotifications] = useState(false);
    const notificationsToggle = () => setNotifications(!notifications);
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const { likedPosts } = useLikedPosts();
    const SideBarDiv = styled.div `
      position: fixed;
      z-index: 120;
      padding: 8px 12px;
      border-right: 1px solid rgba(128, 128, 128, 0.34);
      height: 100vh;
      background-color: ${theme === 'dark' ? '#000' : '#fff'};
`
  return (
      <>
          <CreatePost isOpen={newPostModal} toggle={newPostModalToggle}/>
          <Notifications isOpen={notifications} likedPosts={likedPosts}/>
          <SideBarDiv className="d-none d-md-block">
              <div>
                  <div className='d-flex ps-2 my-3'>
                      <img className="d-none d-xl-block" src={Logo} alt="Instagram" width={105} height={60}/>
                  </div>
                  <div className="d-block d-xl-none mb-4">
                      <Menu img={InstagramIcon}/>
                  </div>
                  <Menu title={t('home')} img={Home}/>
                  <Menu title={t('search')} img={Search}/>
                  <Menu title={t('explore')} img={Explore}/>
                  <Menu title={t('reels')} img={Reels}/>
                  <Menu title={t('messages')} img={Chat}/>
                  <Menu toggle={notificationsToggle} title={t('notifications')} img={Heart}/>
                  <Menu toggle={newPostModalToggle} title={t('create')} img={Create}/>
                  <Menu title={t('profile')} img={User}/>
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

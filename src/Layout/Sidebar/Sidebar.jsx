import SidebarMenu from "../../components/SidebarMenu/SidebarMenu.jsx";
import Home from '/src/assets/icons/home.png'
import Search from '/src/assets/icons/search.png'
import Chat from '/src/assets/icons/chat.png'
import Create from '/src/assets/icons/tab.png'
import Heart from '/src/assets/icons/heart.png'
import Explore from '/src/assets/icons/explore.png'
import User from '/src/assets/icons/user.png'
import Reels from '/src/assets/icons/video.png'
import Logo from '/src/assets/icons/Logo-Instagram.png'
import Menu from '/src/assets/icons/menu.png'
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const SideBar = styled.div `
  position: relative;
  padding: 8px 12px;
  border-right: 1px solid rgba(128, 128, 128, 0.34);
  height: 100vh;
`
const Sidebar = () => {
    const { t } = useTranslation();
  return (
      <SideBar >
          <div className='d-flex ps-2 mt-3 mb-3'>
              <img src={Logo} alt="Instagram" width={105} height={60}/>
          </div>
          <SidebarMenu title={t('home')} img={Home}/>
          <SidebarMenu title={t('search')} img={Search}/>
          <SidebarMenu title={t('explore')} img={Explore}/>
          <SidebarMenu title={t('reels')} img={Reels}/>
          <SidebarMenu title={t('messages')} img={Chat}/>
          <SidebarMenu title={t('notifications')} img={Heart}/>
          <SidebarMenu title={t('create')} img={Create}/>
          <SidebarMenu title={t('profile')} img={User}/>
          <SidebarMenu title={t('more')} img={Menu}/>
      </SideBar>
  )
}
export default Sidebar

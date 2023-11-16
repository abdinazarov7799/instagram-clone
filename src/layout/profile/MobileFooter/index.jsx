import styled from "styled-components";
import {useState} from "react";
import Home from "../../../assets/icons/home.png";
import Explore from "../../../assets/icons/explore.png";
import Reels from "../../../assets/icons/video.png";
import Chat from "../../../assets/icons/chat.png";
import Create from "../../../assets/icons/tab.png";
import User from "../../../assets/icons/user.png";
import Menu from "../../../components/Menu/Menu.jsx";
import CreatePost from "../../../components/CreatePost/CreatePost.jsx";
import {useSettingsStore} from "../../../store/settingsStore.jsx";
import {get} from "lodash";


const MobileFooter = () => {
    const [newPostModal, setNewPostModal] = useState(false);
    const newPostModalToggle = () => setNewPostModal(!newPostModal);
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const Footer = styled.div`
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 0 16px;
      width: 100%;
      z-index: 999;
      justify-content: space-between;
      align-items: center;
      background-color: ${theme === 'dark' ? '#000' : '#fff'};
      color: ${theme !== 'dark' ? '#000' : '#fff'};
      border-top: 1px solid ${theme === 'dark' ? '#808080' : '#e4e6eb'};
`
    return (
        <>
            <CreatePost isOpen={newPostModal} toggle={newPostModalToggle}/>
            <Footer>
                <Menu  img={Home}/>
                <Menu  img={Explore}/>
                <Menu  img={Reels}/>
                <Menu  toggle={newPostModalToggle} img={Create}/>
                <Menu  img={Chat}/>
                <Menu  img={User}/>
            </Footer>
        </>
    )
}
export default MobileFooter;

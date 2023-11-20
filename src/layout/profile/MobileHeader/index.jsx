import styled from "styled-components";
import Logo from '../../../assets/icons/Logo-Instagram.png'
import Heart from "../../../assets/icons/heart.png";
import {useState,useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";
import Menu from "../../../components/Menu/Menu.jsx";
import Notifications from "../../../components/Notifications/index.jsx";
import useLikedPosts from "../../../store/useLikedPosts.jsx";
import {useSettingsStore} from "../../../store/settingsStore.jsx";
import {get} from "lodash";
import useGlobalPosts from "../../../store/useGlobalPosts.jsx";
import classes from "../../../components/Search/style.module.css";

const List = styled.ul `
  position: absolute;
  top: 60px;
  width: 100%;
  left: 0;
  background-color: #fff;
`
const Item = styled.li `
  
`

const MobileHeader = () => {
    const [notifications, setNotifications] = useState(false);
    const notificationsToggle = () => setNotifications(!notifications);
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const [resultSearch, setResultSearch] = useState([]);
    const { globalPosts } = useGlobalPosts()
    const [value, setValue] = useState();
    const { likedPosts } = useLikedPosts();
    const { t } = useTranslation();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },);
    const searchPost = (e) => {
        const inputText = e.target.value
        setValue(inputText)
        setResultSearch([]);
        const searchResults = globalPosts.filter((product) =>
            product.description.toLowerCase().includes(inputText.toLowerCase())
        );
        setResultSearch(searchResults)
    }
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
                  <input type="text"
                         placeholder={t("search")}
                         value={value}
                         ref={inputRef}
                         onChange={searchPost}
                  />
                  <Menu toggle={notificationsToggle} img={Heart}/>
              </div>
              {
                  value !== '' ? (
                      <List className={classes.List}>
                          {
                              resultSearch.map((post) => (
                                  <Item className={classes.Item} key={post.id}>
                                      <img src={post.thumbnail} alt="img" width={44} height={44}/>
                                      <p>
                                          <span>{post.brand}</span>
                                          {post.description}
                                      </p>
                                      <img src={post.thumbnail} alt="img" width={44} height={44}/>
                                  </Item>
                              ))
                          }
                      </List>
                  ) : null
              }
          </Header>
      </>
  )
}
export default MobileHeader;

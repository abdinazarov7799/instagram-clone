import {useTranslation} from "react-i18next";
import styled from "styled-components";
import classes from "./style.module.css";
import leftArrow from '../../assets/icons/left-arrow.png'
import Menu from "../Menu/Menu.jsx";

const Notifications = (props) => {
    const { t } = useTranslation();
    const { isOpen, likedPosts, toggle} = props
    const NotificatonsDiv = styled.div `
      transform: translate(${isOpen ? '0%' : '-200%'});
      transition: transform 0.5s ease-in-out;
    `
  return(
      <NotificatonsDiv className={`${classes.Notificatons} ${isOpen ? 'd-block' : 'd-none'}`}>
          <span className="d-flex align-items-center">
              <div className="w-25 me-5 pe-5 d-md-none">
                  <Menu img={leftArrow} toggle={toggle}/>
              </div>
              {t("notifications")}
          </span>
          <ul className={classes.List}>
              {
                  likedPosts && (
                      likedPosts.map((post) => (
                          <li className={classes.Item} key={post.id}>
                              <img src={post.thumbnail} alt="img" width={44} height={44}/>
                              <p>
                                  <span>{post.brand}</span>
                                  {post.description}
                              </p>
                              <img src={post.thumbnail} alt="img" width={44} height={44}/>
                          </li>
                      ))
                  )
              }
          </ul>
      </NotificatonsDiv>
  );
}
export default Notifications

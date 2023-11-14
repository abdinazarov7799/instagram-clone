import {useTranslation} from "react-i18next";
import styled from "styled-components";

const Notifications = (props) => {
    const { t } = useTranslation();
    const NotificatonsDiv = styled.div `
      position: fixed;
      width: 400px;
      border: 1px solid transparent;
      background-color: #fff;
      z-index: 3;
      left: 185px;
      height: 100%;
      transform: translate(${props.toggle ? '0%' : '-200%'});
      padding: 10px 10px 0;
      box-shadow: 1px 0 10px #808080;
    `
  return(
      <NotificatonsDiv>
          <h4 className="fw-bold">{t("notifications")}</h4>

      </NotificatonsDiv>
  );
}
export default Notifications

import {Col} from "reactstrap";
import classes from "./SidebarMenu.module.css";

const SidebarMenu = (props) => {
  return (
      <>
          <Col className={classes.Menu}>
              <img src={props.img} alt={props.title} width={22} height={22}/>
              <p className={classes.Title}>{props.title}</p>
          </Col>
      </>
  )
}
export default SidebarMenu

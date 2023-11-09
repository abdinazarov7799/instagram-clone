import {Col} from "reactstrap";
import classes from "./SidebarMenu.module.css";

const SidebarMenu = (props) => {
  return (
      <>
          <Col className={classes.Menu} onClick={props.toggle}>
              <img src={props.img} alt={props.title} width={22} height={22}/>
              <p className="ps-3 d-none d-xl-block">{props.title}</p>
          </Col>
      </>
  )
}
export default SidebarMenu

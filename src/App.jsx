import './App.css'
import {Col, Row} from "reactstrap";
import Sidebar from "./Layout/Sidebar/Sidebar.jsx";
import MainContent from "./Layout/MainContent/MainContent.jsx";
import RightSidebar from "./Layout/RightSidebar/RightSidebar.jsx";
import i18n from "i18next";

function App() {
    const changeLanguage = (lng) => {
      return () => {
          i18n.changeLanguage(lng);
      }
    }
    // changeLanguage('ru')
  return (
    <>
        <Row className='d-flex justify-content-between align-items-center'>

            <Col   className='d-sm-none d-md-block'>
                <Sidebar />
            </Col>
            <Col xs={12} sm={12} md={10} xl={6}>
                 <MainContent />
            </Col>
            <Col xl={3} className='d-sm-none d-xl-block'>
                <RightSidebar />
            </Col>
        </Row>
    </>
  )
}

export default App

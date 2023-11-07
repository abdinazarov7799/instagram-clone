import './App.css'
import {Col, Container, Row} from "reactstrap";
import Sidebar from "./Layout/Sidebar/Sidebar.jsx";
import MainContent from "./Layout/MainContent/MainContent.jsx";
import RightSidebar from "./Layout/RightSidebar/RightSidebar.jsx";

function App() {

  return (
    <>
        <>
            <Row className='d-flex justify-content-between'>
                <Col  xl={2} className='d-sm-none d-md-block'>
                    <Sidebar />
                </Col>
                <Col xs={12} sm={12} md={10} xl={6} className='mt-5 d-flex flex-column align-items-center'>
                    <MainContent />
                </Col>
                <Col xl={3} className='d-sm-none d-xl-block mt-5'>
                    <RightSidebar />
                </Col>
            </Row>
        </>
    </>
  )
}

export default App

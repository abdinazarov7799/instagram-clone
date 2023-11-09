import './App.css'
import {Col, Row} from "reactstrap";
import Sidebar from "./Layout/Sidebar/Sidebar.jsx";
import MainContent from "./Layout/MainContent/MainContent.jsx";
import RightSidebar from "./Layout/RightSidebar/RightSidebar.jsx";
import {useSettingsStore} from "./Store/settingsStore.jsx";
import {get} from "lodash";
import {useNavigate} from "react-router";
import {useEffect} from "react";

function App() {
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const isLogin = useSettingsStore(state => get(state, 'isLogin', () => {}));
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin) navigate('/login');
        if (theme === 'dark'){
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#fff'
        }else {
            document.body.style.backgroundColor = '#fff'
            document.body.style.color = '#000'
        }
    })
  return (
    <>
        {
            isLogin && (
                <Row className='d-flex justify-content-between'>
                    <Col  xl={2} className='d-sm-none d-md-block'>
                        <Sidebar />
                    </Col>
                    <Col xs={12} sm={12} md={8} xl={6} className='mt-5 mx-auto d-flex flex-column align-items-center'>
                        <MainContent />
                    </Col>
                    <Col xl={3} className='d-sm-none d-xl-block mt-5'>
                        <RightSidebar />
                    </Col>
                </Row>
            )
        }
    </>
  )
}

export default App

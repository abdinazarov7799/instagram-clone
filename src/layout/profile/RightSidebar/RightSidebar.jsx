import RecommendedAccounts from "../../../components/RecommendedAccounts/RecommendedAccounts.jsx";
import Img from '../../../assets/images/photo_2023-08-01_11-36-40.jpg'
import UserImg from '../../../assets/icons/user.jpg'
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import Footer from "../Footer/Footer.jsx";
import {Col, Row} from "reactstrap";

const RightSidebarDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding-right: 14%;
`
const RightSidebar = () => {
    const { t } = useTranslation();
  return(
      <RightSidebarDiv className="d-none d-md-block">
        <RecommendedAccounts img={Img} nick={'diyorbek_abdinazarov'} description={'Diyorbek'} info={t('switch')}/>
        <Row className='d-flex justify-content-between my-3'>
            <Col md={9}>
                <p style={{fontSize: '14px', color: '#737373', fontWeight: 500}}>{t('suggestedForYou')}</p>
            </Col>
            <Col md={3}>
                <p style={{fontSize: '12px', fontWeight: 500}}>{t('seeAll')}</p>
            </Col>
        </Row>
          <RecommendedAccounts img={UserImg} nick={'guillermo'} description={t('followsYou')} info={t('follow')}/>
          <RecommendedAccounts img={UserImg} nick={'bosanko'} description={t('followsYou')} info={t('follow')}/>
          <RecommendedAccounts img={UserImg} nick={'kiossel'} description={t('followsYou')} info={t('follow')}/>
          <RecommendedAccounts img={UserImg} nick={'philippeaux'} description={t('followsYou')} info={t('follow')}/>
          <RecommendedAccounts img={UserImg} nick={'summerscales'} description={t('followsYou')} info={t('follow')}/>
          <Footer />
      </RightSidebarDiv>
  )
}
export default RightSidebar

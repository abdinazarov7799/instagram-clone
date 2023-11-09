import RecommendedAccounts from "../../components/RecommendedAccounts/RecommendedAccounts.jsx";
import Img from '../../data/photo_2023-08-01_11-36-40.jpg'
import UserImg from '../../assets/icons/user.png'
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import Footer from "../Footer/Footer.jsx";

const RightSidebarDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding-right: 4%;
`
const RightSidebar = () => {
    const { t } = useTranslation();
  return(
      <RightSidebarDiv className="d-none d-md-block">
        <RecommendedAccounts img={Img} nick={'diyorbek_abdinazarov'} description={'Diyorbek'} info={t('switch')}/>
        <div className='d-flex justify-content-between px-4 mt-2'>
            <p style={{fontSize: '14px', color: '#737373', fontWeight: 500}}>{t('suggestedForYou')}</p>
            <span style={{fontSize: '12px', fontWeight: 500}}>{t('seeAll')}</span>
        </div>
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

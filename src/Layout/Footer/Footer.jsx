import {useTranslation} from "react-i18next";
import styled from "styled-components";


const Footer = () => {
    const { t } = useTranslation();

    const List = styled.ul `
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        margin-top: 10px;
    `
    const Item = styled.li `
        margin: 0 3px
    `
    const FooterText = styled.span `
        font-size: 12px;
        color: #C7C7C7;
        &:hover{
          text-decoration: underline;
        }
    `
  return(
      <>
           <List>
               <Item>
                   <FooterText>
                       {t('about')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('help')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('press')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('api')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('jobs')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('privacy')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('terms')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('locations')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('language')}
                   </FooterText>
               </Item>
               <Item>
                   <FooterText>
                       {t('meta_verified')}
                   </FooterText>
               </Item>
               <p style={{color: "#C7C7C7", fontSize: '14px', marginTop: '10px', }}>{t('copyright')}</p>
           </List>

      </>
  )
}
export default Footer

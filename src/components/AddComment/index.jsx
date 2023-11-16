import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";


const AddComment = () => {
    const { t } = useTranslation();
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const AddCommentInput = styled.div `
      input{
        width: 100%;
        height: 35px;
        border: 1px solid transparent;
        outline: none;
        background-color: ${theme === 'dark' ? '#000' : '#fff'};
        color: ${theme !== 'dark' ? '#000' : '#fff'};
  }
`
  return(
      <>
          <AddCommentInput>
              <input type="text" placeholder={t("addAComment")}/>
          </AddCommentInput>
      </>
  )
}
export default AddComment

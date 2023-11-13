import styled from "styled-components";
import {useTranslation} from "react-i18next";

const AddCommentInput = styled.div `
  input{
    width: 100%;
    height: 35px;
    border: 1px solid transparent;
    outline: none;
  }
`
const AddComment = () => {
    const { t } = useTranslation();
  return(
      <>
          <AddCommentInput>
              <input type="text" placeholder={t("addAComment")}/>
          </AddCommentInput>
      </>
  )
}
export default AddComment

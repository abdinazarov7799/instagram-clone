import CustomModal from "../CustomModal/CustomModal.jsx";
import {useTranslation} from "react-i18next";
import uploadImg from "../../assets/icons/upload-img.png";
import {Col} from "reactstrap";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {useState} from "react";
import styled from "styled-components";
import useNewPost from "../../store/useNewPost.jsx";

const FileInput = styled.input `
  position: absolute;
  height: 200px;
  opacity: 0;
  top: 80px;
`
const FormInput = styled.textarea `
  border: 1px solid #e4e6eb;
  outline: none;
  padding: 5px;
`
const initialFormData = {
    thumbnail: '',
    brand: '',
    price: 0,
    liked: false,
    description: '',
    uploadDate: Date.now()
}
const NewPost = (props) => {
    const { t } = useTranslation();
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const userData = useSettingsStore(state => get(state, 'userData', () => {}));
    const [selectedFile, setSelectedFile] = useState();
    const [imgSRC, setImgSRC] = useState();
    const [formData, setFormData] = useState(initialFormData);
    const { setNewPost } = useNewPost();

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file instanceof Blob) {
            setSelectedFile(file);
        } else {
            console.error('Error type file');
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgSrc = reader.result;
            setImgSRC(imgSrc);
        };
        reader.readAsDataURL(selectedFile);
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, thumbnail: imgSRC, brand: userData.userName, [name]: value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setNewPost(formData);
        props.toggle(false);
    }
  return(
      <>
          <CustomModal
              isOpen={props.isOpen}
              toggle={props.toggle}
              title={t('newPostTitle')}
              body={
              <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
                  {
                      !imgSRC && (
                          <>
                              <Col className="mt-5 mb-4">
                                  <img src={uploadImg} width={96} height={90}/>
                              </Col>
                              <Col>
                                  <p>{t("newPostText")}</p>
                              </Col>
                          </>
                      )
                  }
                  {
                      imgSRC && (
                          <>
                              <img src={imgSRC} width={300} height={200} className="mt-3 object-fit-cover"/>
                              <form onSubmit={onSubmit} className="mt-3 w-75">
                                  <div className="d-flex flex-column">
                                      <label htmlFor="description">{t('title')}</label>
                                      <FormInput type="text"
                                                 id="description"
                                                 name="description"
                                                 onChange={onChange}
                                                 required={true}
                                      />
                                  </div>
                                  <button className="btn btn-outline-primary w-100 mt-3" type={"submit"}>{t('createPost')}</button>
                              </form>
                          </>
                      )
                  }
                      <FileInput className="btn"
                             type="file"
                             accept=".image/jpeg, .png, .svg, .jpg"
                             onChange={handleChange}
                      />
              </div>
          }
          />
      </>
  )
}
export default NewPost;

import CustomModal from "../CustomModal/CustomModal.jsx";
import {useTranslation} from "react-i18next";
import uploadImg from "../../assets/icons/upload-img.png";
import {Col, Row} from "reactstrap";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";
import {useState} from "react";


const NewPost = (props) => {
    const { t } = useTranslation();
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    const [selectedFile, setSelectedFile] = useState();
    const [imgSRC, setImgSRC] = useState();
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
  return(
      <>
          <CustomModal
              isOpen={props.isOpen}
              toggle={props.toggle}
              title={t('newPostTitle')}
              body={
              <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
                  <Col className="mt-5 mb-4">
                      <img src={uploadImg} width={96} height={90}/>
                  </Col>
                  <Col>
                      <p>{t("newPostText")}</p>
                  </Col>
                  <img src={imgSRC} width={300} height={200} className="mt-3 object-fit-cover"/>
                  <Col className="mt-4">
                      <input className={theme === 'dark' ? 'btn btn-dark' : 'btn btn-light'}
                             type="file"
                             accept=".image/jpeg, .png, .svg, .jpg"
                             placeholder={t("selectFromComputer")}
                             onChange={handleChange}
                      />
                  </Col>
              </div>
          }
          />
      </>
  )
}
export default NewPost;

import CustomModal from "../CustomModal/CustomModal.jsx";
import {useTranslation} from "react-i18next";
import uploadImg from "../../assets/icons/upload-img.png";
import {Col, Row} from "reactstrap";
import {Button, Upload} from "antd";
import {customMessage} from "../Message/Message.jsx";


const NewPost = (props) => {
    const { t } = useTranslation();
    const uploadingImg = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                customMessage('success',`${info.file.name} file uploaded successfully`)
            } else if (info.file.status === 'error') {
                customMessage('success', `${info.file.name} file upload failed.`)
            }
        },
    };
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
                  <Upload {...uploadingImg} className='d-flex align-items-center flex-column'>
                      <Button type="primary" className='mt-3 mb-5'>{t("selectFromComputer")}</Button>
                  </Upload>
              </div>
          }
          />
      </>
  )
}
export default NewPost;

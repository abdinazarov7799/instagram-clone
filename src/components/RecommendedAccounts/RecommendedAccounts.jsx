import {Col, Row} from "reactstrap";
import {useState} from "react";
import styled from "styled-components";


const FileInput = styled.input `
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  top: 0;
  left: 0;
`

const RecommendedAccounts = (props) => {
    const [selectedFile, setSelectedFile] = useState();
    const [Image, setImage] = useState();
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
            setImage(imgSrc);
        };
        reader.readAsDataURL(selectedFile);
    }
  return (
      <>
            <Row className='my-2 position-relative'>
                <Col md={3}>
                    <FileInput className="btn"
                               type="file"
                               accept=".image/jpeg, .png, .svg, .jpg"
                               onChange={handleChange}
                    />
                    {
                        Image ? <img src={Image}
                                     width={52}
                                     height={52}
                                     style={{
                                         border: '3px solid #be3449',
                                         borderRadius: '50%',
                                         objectFit: "cover",
                                     }}
                        /> :
                            <img src={props.img}
                                 width={52}
                                 height={52}
                                 style={{
                                     border: '3px solid #be3449',
                                     borderRadius: '50%',
                                     objectFit: "cover"
                                 }}
                            />
                    }
                </Col>
                <Col md={6} className='text-start ps-0'>
                    <p style={{fontSize: '14px', fontWeight: 500}}>{props.nick}</p>
                    <p style={{fontSize: '12px', color: '#737373'}}>
                        {props.description}
                    </p>
                </Col>
                <Col>
                    <span style={{fontSize: '12px', color: '#0095F6', fontWeight: 500}}>{props.info}</span>
                </Col>
            </Row>
      </>
  );
}
export default RecommendedAccounts

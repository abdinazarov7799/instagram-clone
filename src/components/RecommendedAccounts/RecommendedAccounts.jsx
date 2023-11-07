import {Col, Row} from "reactstrap";


const RecommendedAccounts = (props) => {

  return (
      <>
            <Row className='my-2'>
                <Col className='pe-0'>
                    <img src={props.img}
                         width={52}
                         height={52}
                         style={{
                             border: '3px solid #be3449',
                             borderRadius: '50%'
                    }}
                    />
                </Col>
                <Col className='text-start ps-0'>
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

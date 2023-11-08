import styled from "styled-components";
import {Col, Row} from "reactstrap";
import optionImg from '../../assets/icons/option.png';
import {timeSince} from "../TimeSince/TimeSince.js";
import {useState} from "react";
import {Modal} from "antd";

const PostCard = styled.div `
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`
const OptionButton = styled.button `
    background: transparent;
    border: none;
    &:active{
      opacity: 40%;
    }
`

const Post = (props) => {
    const PostImg = styled.div `
      width: 100%;
      height: 600px;
      background-image: url("${props.imgURL}");
      background-position: center center;
      border-radius: 5px;
`

  return(
      <>
          <PostCard>
              <Row className='d-flex align-items-center justify-content-between my-2'>
                  <Col className='d-flex align-items-center'>
                      <img src={props.userImg}
                           width={45}
                           height={45}
                           style={{
                               border: '3px solid #be3449',
                               borderRadius: '50%'
                           }}
                      />
                      <p style={{fontSize: '14px', fontWeight: 500, margin: '0 8px'}}>{props.userNickName} •</p>
                      <p style={{fontSize: '14px', color: "#838383"}}>{timeSince(props.date)}</p>
                  </Col>
                  <Col xs={1}>
                      <OptionButton onClick={() => setOpen(true)}>
                          <img src={optionImg} width={20} height={20}/>
                      </OptionButton>
                  </Col>
              </Row>
              <PostImg />
          </PostCard>

      </>
  )
}
export default Post

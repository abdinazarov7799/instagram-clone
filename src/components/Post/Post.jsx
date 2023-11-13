import styled from "styled-components";
import {Col, Row} from "reactstrap";
import optionImg from '../../assets/icons/option.png';
import heart from '../../assets/icons/heart.png';
import comment from '../../assets/icons/comment.png';
import send from '../../assets/icons/send.png';
import save from '../../assets/icons/save-instagram.png';
import {timeSince} from "../TimeSince/TimeSince.jsx";
import CustomModal from "../CustomModal/CustomModal.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import AddComment from "../AddComment/index.jsx";
import Liked from "../../assets/icons/liked.png";

const PostCard = styled.div `
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px auto;
  font-size: 14px;
  border-bottom: 1px solid #e4e6eb;
`
const OptionButton = styled.button `
    background: transparent;
    border: none;
    &:active{
      opacity: 40%;
    }
`
const PostButtons = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
    button {
      outline: none;
      border: 1px solid transparent;
      background-color: transparent;
        &:hover img{
          transition: 400ms;
          transform: scale(1.1);
        }
    }
    button img {
      width: 25px;
      height: 25px;
    }
`
const Comments = styled.div `
  .commentTitle{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`

const Post = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [liked, setLiked] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { t } = useTranslation()
    const PostImg = styled.div `
      width: 100%;
      height: 600px;
      background-image: url("${props.imgURL}");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
`

  return(
      <>
          <PostCard>
              <Row className='d-flex align-items-center justify-content-between my-2'>
                  <Col className='d-flex align-items-center'>
                      <img src={props.userImg}
                           width={35}
                           height={35}
                           style={{
                               border: '3px solid #be3449',
                               borderRadius: '50%'
                           }}
                      />
                      <p style={{fontWeight: 500, margin: '0 8px'}}>{props.userNickName} •</p>
                      <p style={{color: "#838383"}}>{timeSince(props.date)}</p>
                  </Col>
                  <Col xs={1}>
                      <OptionButton onClick={toggle}>
                          <img src={optionImg} width={20} height={20}/>
                      </OptionButton>
                  </Col>

                  <CustomModal
                      isOpen={isOpen}
                      toggle={toggle}
                      body={
                          <ul className='list-unstyled m-0'>
                              <li className='border-bottom'>
                                  <button className='btn btn-outline-light text-danger w-100 fw-bold'>Delete</button>
                              </li>
                              <li className='border-bottom'>
                                  <button className='btn btn-outline-light text-danger w-100 fw-bold'>Unfollow</button>
                              </li>
                              <li className='border-bottom'>
                                  <button className='btn btn-outline-light text-black w-100'>Add to Favorites</button>
                              </li>
                              <li>
                                  <button className='btn btn-outline-light text-black w-100' onClick={toggle}>Cancel</button>
                              </li>
                          </ul>
                      }
                  />
              </Row>
              <PostImg />
              <PostButtons>
                  <div>
                      <button onClick={() => setLiked(!liked)}>
                          {liked ? <img src={Liked} alt="liked"/> : <img src={heart} alt="like"/>}
                      </button>
                      <button className="px-3">
                          <img src={comment} alt="comment"/>
                      </button>
                      <button>
                          <img src={send} alt="send"/>
                      </button>
                  </div>
                  <button>
                      <img src={save} alt="save"/>
                  </button>
              </PostButtons>
              <p style={{fontWeight: 500}}>{props.likes} {t("likes")}</p>
              <Comments>
                  <div className='commentTitle'>
                      <p style={{fontWeight: 500, marginRight: '5px'}}>{props.userNickName}</p>
                      <p>{props.title}</p>
                  </div>
                  <span className="text-muted d-flex">
                      <p>{t("viewAll")}</p>
                      <p className="px-1">{props.commentsCount}</p>
                      <p>{t("comments")}</p>
                  </span>
              </Comments>
              <AddComment />
          </PostCard>
      </>
  )
}
export default Post

import Post from "../../components/Post/Post.jsx";
import {useState} from "react";
import {Col} from "reactstrap";


const Posts = () => {
    const [posts, setPosts] = useState([])
  return(
      <>
          {/*{*/}
          {/*    posts.map((post) => (*/}
          {/*    <Post*/}
          {/*        userImg={"https://telegra.ph/file/886ce5b383c23582e8749.jpg"}*/}
          {/*        userNickName={'abdinazarov7799'}*/}
          {/*        date={new Date().getDate()}*/}
          {/*        postID={5}*/}
          {/*        userID={4}*/}
          {/*        likes={22}*/}
          {/*        title={'New post'}*/}
          {/*    />*/}
          {/*    ))*/}
          {/*}*/}
          <Col xs={12} sm={12} md={10} xl={8} className='mt-5'>
              <Post
                  userImg={"https://telegra.ph/file/886ce5b383c23582e8749.jpg"}
                  userNickName={'abdinazarov7799'}
                  date={Date()}
                  postID={5}
                  userID={4}
                  imgURL={'https://telegra.ph/file/fd84be5e551969f98626d.png'}
                  likes={22}
                  title={'New post'}
              />
              <Post
                  userImg={"https://telegra.ph/file/886ce5b383c23582e8749.jpg"}
                  userNickName={'abdinazarov7799'}
                  date={Date()}
                  postID={5}
                  userID={4}
                  imgURL={'https://telegra.ph/file/fd84be5e551969f98626d.png'}
                  likes={22}
                  title={'New post'}
              />
              <Post
                  userImg={"https://telegra.ph/file/886ce5b383c23582e8749.jpg"}
                  userNickName={'abdinazarov7799'}
                  date={Date()}
                  postID={5}
                  userID={4}
                  imgURL={'https://telegra.ph/file/fd84be5e551969f98626d.png'}
                  likes={22}
                  title={'New post'}
              />

          </Col>
      </>
  )
}
export default Posts

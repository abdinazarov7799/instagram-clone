import Post from "../../../../../components/Post/Post.jsx";
import {useEffect, useState} from "react";
import {Col} from "reactstrap";
import userImg from "../../../../../assets/icons/user.jpg"

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0);

    return (
        <>
            <Col xs={10} sm={10} md={10} xl={8} className='mt-5'>
                <Post
                    userImg={userImg}
                    userNickName={'abdinazarov7799'}
                    date={Date()}
                    postID={5}
                    userID={4}
                    imgURL={'https://telegra.ph/file/fd84be5e551969f98626d.png'}
                    likes={22}
                    title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, perspiciatis vitae. Culpa doloribus\n' +
                        '                itaque iure nihil nobis suscipit totam vel? Animi, at atque commodi debitis delectus, enim\n' +
                        '                exercitationem in, minima nam neque optio porro recusandae repellendus. Distinctio esse illo, incidunt\n' +
                        '                minima natus qui suscipit veniam veritatis! Animi illo tempore voluptas!'}
                    commentsCount={16}
                />
                <Post
                    userImg={userImg}
                    userNickName={'abdinazarov7799'}
                    date={Date()}
                    postID={5}
                    userID={4}
                    imgURL={'https://telegra.ph/file/fd84be5e551969f98626d.png'}
                    likes={22}
                    title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, perspiciatis vitae. Culpa doloribus\n' +
                        '                itaque iure nihil nobis suscipit totam vel? Animi, at atque commodi debitis delectus, enim\n' +
                        '                exercitationem in, minima nam neque optio porro recusandae repellendus. Distinctio esse illo, incidunt\n' +
                        '                minima natus qui suscipit veniam veritatis! Animi illo tempore voluptas!'}
                    commentsCount={16}
                />
            </Col>
        </>
    )
}
export default Posts

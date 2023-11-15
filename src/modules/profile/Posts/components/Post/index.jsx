import Post from "../../../../../components/Post/Post.jsx";
import {Col} from "reactstrap";
import Loading from "../../../../../components/Loading/index.jsx";

const PostList = (props) => {
    const { isLoading, posts, setSkip } = props;
    return (
        <>
            <Col xs={10} sm={10} md={10} xl={8} className='mt-5'>
                {
                    isLoading ? <Loading /> : (
                        Array.isArray(posts) ?
                         posts.map((post) => (
                             <>
                                 <Post
                                     userImg={post.thumbnail}
                                     userNickName={post.brand}
                                     date={Date()}
                                     postID={post.id}
                                     userID={post.stock}
                                     imgURL={post.thumbnail}
                                     likes={post.price}
                                     title={post.description}
                                     commentsCount={16}
                                 />
                             </>
                         ))
                            :
                            <>
                                <p>Post not found</p>
                            </>
                    )
                }
            </Col>
        </>
    )
}
export default PostList

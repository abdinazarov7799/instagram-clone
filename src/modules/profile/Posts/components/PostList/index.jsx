import Post from "../../../../../components/Post/Post.jsx";
import {Col} from "reactstrap";
import Loading from "../../../../../components/Loading/index.jsx";
import useLikedPosts from "../../../../../store/useLikedPosts.jsx";


const PostList = (props) => {
    const {isLoading, posts, setPosts} = props;
    const { setLikedPosts } = useLikedPosts();

    const handleLiked = (postId) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                setLikedPosts(post)
                return { ...post, liked: !post.liked };
            }
            return post;
        });
        setPosts(updatedPosts);
    }
    return (
        <>
            <Col xs={10} sm={10} md={10} xl={8} className='mt-5'>
                {
                    isLoading ? <Loading /> : (
                        Array.isArray(posts) ?
                         posts.map((post) => (
                             <>
                                 <Post
                                     userImg={post?.thumbnail}
                                     userNickName={post?.brand}
                                     date={Date()}
                                     postID={post?.id}
                                     userID={post?.stock}
                                     imgURL={post?.thumbnail}
                                     likes={post?.price}
                                     liked={post?.liked}
                                     title={post?.description}
                                     commentsCount={16}
                                     handleLiked={() => handleLiked(post?.id)}
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

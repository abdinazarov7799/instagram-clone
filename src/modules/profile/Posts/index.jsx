import React, {useEffect, useState} from 'react';
import Stories from "../../../components/Stories/Stories.jsx";
import PostList from "./components/PostList/index.jsx";
import {useQuery} from "react-query";
import {get} from "lodash";
import MobileHeader from "../../../layout/profile/MobileHeader/index.jsx";
import MobileFooter from "../../../layout/profile/MobileFooter/index.jsx";
import useNewPost from "../../../store/useNewPost.jsx";
import useGlobalPosts from "../../../store/useGlobalPosts.jsx";

function Posts(props) {
    const [skip, setSkip] = useState(0);
    const [posts,setPosts] = useState([]);
    const { NewPost } = useNewPost();
    const { setGlobalPosts } = useGlobalPosts();
    const { isLoading, data } = useQuery(['repoData', skip],() =>
        fetch(`https://dummyjson.com/products?skip=${skip}&limit=5`).then(res =>
            res.json()
        )
    )
    useEffect(() => {
        const newPosts = get(data, 'products', []);
        const updatedPosts = newPosts.map((newPost) => ({ ...newPost, liked: false }));
        if (updatedPosts.length > 0) {
            setPosts([...posts, ...updatedPosts]);
            setGlobalPosts(newPosts);
        }
        setGlobalPosts(newPosts);
    },[data]);

    useEffect(() => {
        if (NewPost !== []){
            setPosts([...NewPost, ...posts ]);
            setGlobalPosts(posts)
        }
    },[NewPost])

    const handleSkip = () => {
        setSkip(skip + 5);
    }
    return (
        <>
            <div className="d-block d-md-none">
                <MobileHeader />
            </div>
            <div className="mt-5 mt-md-0">
                <Stories />
            </div>
            <PostList
                posts={posts}
                setPosts={setPosts}
                isLoading={isLoading}
            />
            <div className="d-block d-md-none">
                <MobileFooter />
            </div>
            {!isLoading && <button className="my-4 w-50 btn btn-outline-light text-black" onClick={handleSkip}>Load More</button>}
        </>
    );
}

export default Posts;

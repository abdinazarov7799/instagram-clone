import React, {useEffect, useState} from 'react';
import Stories from "../../../components/Stories/Stories.jsx";
import PostList from "./components/Post/index.jsx";
import {useQuery} from "react-query";
import {get} from "lodash";
import {usePostsStore} from "../../../store/usePosts";
function Posts(props) {
    const [skip, setSkip] = useState(0);
    const posts = usePostsStore(state => get(state, 'posts', []));
    const addPost = usePostsStore(state => get(state, 'addPost', () => {}));
    const { isLoading, data } = useQuery('repoData', () =>
        fetch(`https://dummyjson.com/products?skip=${skip}&limit=10`).then(res =>
            res.json()
        )
    )
    useEffect(() => {
        isLoading && addPost(data.products);
    },[data]);
    return (
        <>
            <Stories />
            <PostList isLoading={isLoading} posts={posts} setSkip={setSkip}/>
        </>
    );
}

export default Posts;

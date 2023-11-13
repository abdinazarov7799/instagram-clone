import React from 'react';
import Stories from "../../../components/Stories/Stories.jsx";
import PostList from "./components/Post/index.jsx";
function Posts(props) {
    return (
        <>
            <Stories />
            <PostList />
        </>
    );
}

export default Posts;

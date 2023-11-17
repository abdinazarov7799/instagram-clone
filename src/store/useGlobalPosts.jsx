import {create} from "zustand";


const UseGlobalPosts = create((set) =>({
    globalPosts: [],
    setNewPost: (globalPosts) => set(state => ({...state, globalPosts}))
}))

export default UseGlobalPosts;

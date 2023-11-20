import {create} from "zustand";


const UseGlobalPosts = create((set) =>({
    globalPosts: [],
    setGlobalPosts: (globalPosts) => set(state => ({...state, globalPosts}))
}))

export default UseGlobalPosts;

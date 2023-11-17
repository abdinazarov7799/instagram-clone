import {create} from "zustand";


const UseNewPost = create((set) =>({
    NewPost: [],
    setNewPost: (post) => set((state) => ({ NewPost: [...state.NewPost, post] })),
}))

export default UseNewPost;

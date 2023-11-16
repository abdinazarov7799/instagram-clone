import {create} from "zustand";


const UseLikedPosts = create((set) =>({
   likedPosts: [],
   setLikedPosts: (data) => set((state) => ({ likedPosts: [...state.likedPosts, data] })),
}))

export default UseLikedPosts;

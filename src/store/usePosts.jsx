import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

let postsStore = (set) => ({
    posts: [],
    addPost: (newPost) => set((state) => ({ posts: [...(state.posts || []), newPost] })),
})

postsStore = devtools(postsStore)
postsStore = persist(postsStore, {name: 'posts'});
export const usePostsStore =  create(postsStore);

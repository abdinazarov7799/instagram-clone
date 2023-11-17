import useGlobalPosts from "../../store/useGlobalPosts.jsx";


export const searchPost = (e) => {
    const inputText = e.target.value
    const globalPosts = useGlobalPosts((state) => state.globalPosts)
    console.log(globalPosts)
    console.log("text: ", inputText)
}

import styled from "styled-components";
import Story from "./Story.jsx";
import user from '../../assets/icons/user.jpg';


const StoriesContainer = styled.div `
  display: flex;
  justify-content: space-between
`
const Stories = () => {
  return (
      <>
          <StoriesContainer>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
                <Story img={user} nick={'diyorbek_abdinazarov'}/>
          </StoriesContainer>
      </>
  )
}
export default Stories

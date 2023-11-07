import styled from "styled-components";
import Story from "./Story.jsx";
import img from '../../data/photo_2023-08-01_11-36-40.jpg';


const StoriesContainer = styled.div `
  display: flex;
  justify-content: space-between;
  
`
const Stories = () => {
  return (
      <>
          <StoriesContainer>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
                <Story img={img} nick={'diyorbek_abdinazarov'}/>
          </StoriesContainer>
      </>
  )
}
export default Stories

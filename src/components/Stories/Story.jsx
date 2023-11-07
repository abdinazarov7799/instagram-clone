import styled from "styled-components";



const StoryDiv = styled.div `
  padding: 0 10px;
  img {
    border: 3px solid #be3449;
    border-radius: 50%;
  }
  p{
    font-size: 12px;
    width: 60px;
    overflow-x: hidden;
    position: relative;
  }
 
`
const Story = (props) => {
  return(
      <>
          <StoryDiv>
              <img src={props.img} width={64} height={64}/>
              <p>{props.nick}</p>
          </StoryDiv>
      </>
  )
}
export default Story;

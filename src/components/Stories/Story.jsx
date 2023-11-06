import styled from "styled-components";



const StoryDiv = styled.div `
  img {
    border: 3px solid #be3449;
    border-radius: 50%;
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

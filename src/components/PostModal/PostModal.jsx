import useModal from "../../Store/useModal.jsx";
import styled from "styled-components";

const PostModal = () => {
  const {isOpen} = useModal();
  const ModalDiv = styled.div`
      display: "${isOpen ? 'none' : 'block'}";
      position: fixed;
      width: 50%;
      max-width: 400px;
      background-color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      transition: 0.4s;
    `

  return(
    <>
      <ModalDiv>
        <ul className='list-unstyled'>
          <li className='py-1 border-bottom'>
            <button className='btn text-danger fw-bold'>Delete</button>
          </li>
          <li className='py-1 border-bottom'>
            <button className='btn text-danger fw-bold'>Unfollow</button>
          </li>
          <li className='py-1 border-bottom'>
            <button className='btn'>Add to Favorites</button>
          </li>
          <li className='py-1'>
            <button className='btn'>Cancel</button>
          </li>
        </ul>
      </ModalDiv>
    </>
  );
}
export default PostModal

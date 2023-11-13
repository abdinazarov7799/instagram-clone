import useModal from "../../store/useModal.jsx";
import styled from "styled-components";

const PostModal = (props) => {
  const {isOpen,onClose,children} = props;
  const ModalDiv = styled.div`
      opacity: ${isOpen ? '100%' : '0'};
      position: fixed;
      width: 50%;
      max-width: 400px;
      background-color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      transition: 5s;
    `

  return(
    <>
      <ModalDiv>
        {children}
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
            <button className='btn' onClick={onClose}>Cancel</button>
          </li>
        </ul>
      </ModalDiv>
    </>
  );
}
export default PostModal

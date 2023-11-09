import {Modal, ModalBody, ModalHeader} from "reactstrap";


const CustomModal = (props) => {
    return(
        <>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
                <ModalBody >
                    {props.body}
                </ModalBody>
            </Modal>
        </>
    )
}
export default CustomModal;

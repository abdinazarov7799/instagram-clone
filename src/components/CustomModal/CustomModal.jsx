import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";


const CustomModal = (props) => {
    const theme = useSettingsStore(state => get(state, 'theme', () => {}));
    return(
        <>
            <Modal isOpen={props.isOpen} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle} className={theme === 'dark' ? 'bg-dark' : 'bg-light text-black'}>{props.title}</ModalHeader>
                <ModalBody className={theme === 'dark' ? 'bg-dark' : 'bg-light text-black'}>
                    {props.body}
                </ModalBody>
            </Modal>
        </>
    )
}
export default CustomModal;

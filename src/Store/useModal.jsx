import {create} from "zustand";


const useModal = create((set) => ({
    isOpen: false,
    show: () => set(({ isOpen: true })),
    onClose: () => set(({ isOpen: false })),
}))
export default useModal;

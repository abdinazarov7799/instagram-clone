import React from 'react';

function Modal(props) {
    const {isOpen,children} = props;
    return (
        <div className={isOpen ? "show" : "hide"}>
            {children}
        </div>
    );
}

export default Modal;

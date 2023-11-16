import {useState} from "react";


export const imageReader = (file) => {
    const [selectedFile, setSelectedFile] = useState();
    const [imgSRC, setImgSRC] = useState();
    if (file && file instanceof Blob) {
        setSelectedFile(file);
    } else {
        console.error('Error type file');
    }
    const reader = new FileReader();
    reader.onloadend = () => {
        const imgSrc = reader.result;
        setImgSRC(imgSrc);
    };
    reader.readAsDataURL(selectedFile);
    return imgSRC;
}

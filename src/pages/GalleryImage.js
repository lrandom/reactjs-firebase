import React, {useState} from 'react';
import {getStorage, uploadBytes, ref} from "firebase/storage";

const GalleryImage = () => {
    const [file, setFile] = useState(null);

    const onChangeFile = (evt) => {
        setFile(evt.target.files[0]);//lay file từ input
    };

    const uploadFile = async (evt) => {
        const storage = getStorage();//base storage
        const myRef = ref(storage, "images/image.png");
        await uploadBytes(myRef, file, "images/image.png");
    }
    return (
        <div>
            <input type="file" onChange={onChangeFile}/>
            <button onClick={uploadFile}>Upload</button>
        </div>
    );
};

export default GalleryImage;

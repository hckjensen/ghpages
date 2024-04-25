import style from "./Gallery.module.scss";
import { useEffect, useState } from "react";

const GalleryComponent = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/9')
            .then(response => response.json())
            .then(data => setImages(data.message))
            .catch(error => console.error('Error:', error));
        console.log(images);


    }, [])

    return (
        <div className={style.gallery}>
            <h1>Gallery</h1>
            <div className={style.container}>
                {images.map((url, index) => (
                    <img key={index} src={url} alt={`Dog ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}

export default GalleryComponent;
import styles from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({image}) => {
    console.log(image, "image")
    return (
        <li className={styles.galleryItem}>
            <img src={image.webformatURL} alt={image.tags} />
</li>
     
    )}
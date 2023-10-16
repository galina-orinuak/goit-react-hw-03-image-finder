import styles from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({image, showModal, showImg}) => {
const onPictureClick =()=>{
    showImg(image.largeImageURL);
    showModal();
}


    return (
        <li className={styles.galleryItem}>
            <img className={styles.galleryImg} src={image.webformatURL} alt={image.tags} onClick={onPictureClick}/>
</li>
     
    )}
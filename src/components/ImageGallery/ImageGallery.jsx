import styles from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images, showModal, showImg}) => {
    return (
        <ul className={styles.gallery}>
          {images.map(image =>(
          <ImageGalleryItem key={image.id} image={image} showModal={showModal} showImg={showImg}/>))}
        
      </ul>
    )}
import styles from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
    return (
        <ul className={styles.gallery}>
          {images.map(image =>(
          <ImageGalleryItem key={image.id} image={image}/>))}
        
      </ul>
    )}
import { InfinitySpin  } from  'react-loader-spinner'
import styles from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={styles.loader}><InfinitySpin/></div>
    )}
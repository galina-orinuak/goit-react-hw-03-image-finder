import styles from './Button.module.css'

export const Button = ({onClick}) => {
    return (
        <div className={styles.containerBtn}>
        <button type='button' onClick={onClick} className={styles.loadMoreBtn}>Load more</button>
        </div>
    )}
import styles from "./ProductItem.module.scss";

const ProductItemFallback = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.thumbnail} ${styles.empty}`} />
        </div>
    );
};

export default ProductItemFallback;

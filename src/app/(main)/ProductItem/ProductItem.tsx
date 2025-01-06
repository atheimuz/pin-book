"use client";

import { useProduct } from "@/lib/queries/useProductQuery";
import styles from "./ProductItem.module.scss";

const ProductItem = ({ link }: { link: string }) => {
    const { data } = useProduct(link);

    if (!data) return null;

    return (
        <div className={styles.wrapper}>
            <img className={styles.thumbnail} src={data.thumbnail} />
        </div>
    );
};

export default ProductItem;

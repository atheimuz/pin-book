"use client";

import { useProductStore } from "@/lib/store/product";
import { useProduct } from "@/lib/queries/useProductQuery";
import styles from "./ProductItem.module.scss";

const ProductItem = ({ link }: { link: string }) => {
    const { data } = useProduct(link);
    const setSummary = useProductStore((state) => state.setSummary);

    if ("error" in data) return null;
    if (!data.thumbnail) return null;

    return (
        <button type="button" className={styles.wrapper} onClick={() => setSummary(data)}>
            <img className={styles.thumbnail} src={data.thumbnail} />
        </button>
    );
};

export default ProductItem;

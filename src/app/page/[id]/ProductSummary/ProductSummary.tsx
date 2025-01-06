"use client";

import { useProductStore } from "@/lib/store/product";
import styles from "./ProductSummary.module.scss";

const ProductSummary = () => {
    const summary = useProductStore((state) => state.summary);

    if (!summary) return null;

    return (
        <div className={styles.wrapper}>
            <a href={summary.link} className={styles.link} target="_blank">
                <img className={styles.thumbnail} src={summary.thumbnail} />
                <div className={styles.textBox}>
                    <p className={styles.title}>{summary.title}</p>
                    <p className={styles.desc}>{summary.description}</p>
                </div>
            </a>
        </div>
    );
};

export default ProductSummary;

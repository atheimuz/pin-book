"use client";

import { useProductStore } from "@/lib/store/product";
import styles from "./ProductSummary.module.scss";

const ProductSummary = () => {
    const summary = useProductStore((state) => state.summary);

    if (!summary) return null;

    return (
        <div className={styles.wrapper}>
            <a href="https://ohou.se/productions/1803860/selling" className={styles.link}>
                <img
                    className={styles.thumbnail}
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162849292369220740.jpg?w=100"
                />
                <div className={styles.textBox}>
                    <p className={styles.title}>
                        미나 MINI LED 버섯램프 무드등 조명 LH60 (C타입충전)
                    </p>
                    <p className={styles.desc}>-10% 45,000원. 리뷰 4.8점, 4,543개</p>
                </div>
            </a>
        </div>
    );
};

export default ProductSummary;

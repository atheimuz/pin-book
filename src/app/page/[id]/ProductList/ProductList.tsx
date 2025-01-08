import ProductItem from "@/app/page/[id]/ProductItem";
import styles from "./ProductList.module.scss";
import { Suspense } from "react";

interface Props {
    list: string[];
}
const ProductList = ({ list }: Props) => {
    if (!list?.length) return null;

    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {list.map((link) => {
                    if (!link) return null;

                    return (
                        <li key={link} className={styles.item}>
                            <Suspense fallback={<p>loading</p>}>
                                <ProductItem link={link} />
                            </Suspense>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductList;

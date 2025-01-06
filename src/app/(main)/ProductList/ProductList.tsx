import ProductItem from "@/app/(main)/ProductItem";
import styles from "./ProductList.module.scss";

const productList: string[] = [
    "https://ozip.me/ANNyrhL",
    "https://ozip.me/QSWwG3k",
    "https://ohou.se/productions/1543647/selling"
];
const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {productList.map((link) => (
                    <li key={link} className={styles.item}>
                        <ProductItem link={link} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

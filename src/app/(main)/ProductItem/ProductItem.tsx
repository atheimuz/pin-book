import { getProductAPI } from "@/lib/remote/product";
import styles from "./ProductItem.module.scss";

const ProductItem = async ({ link }: { link: string }) => {
    const data = await getProductAPI(link);

    if (!data) return null;

    return (
        <div className={styles.wrapper}>
            <img className={styles.thumbnail} src={data.thumbnail} />
        </div>
    );
};

export default ProductItem;

import ProductList from "@/app/(main)/ProductList";
import styles from "./PinBook.module.scss";

const PinBook = () => {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.mainImage}
                src="https://prs.ohouse.com/apne2/any/v1-313723627950208.jpg?w=720"
            />
            <ProductList />
        </div>
    );
};

export default PinBook;

import PinBook from "@/app/(main)/PinBook";
import ProductSummary from "./(main)/ProductSummary";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <PinBook />
                <ProductSummary />
            </div>
        </div>
    );
}

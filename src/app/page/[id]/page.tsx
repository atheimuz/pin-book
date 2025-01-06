import PinBook from "@/app/page/[id]/PinBook";
import ProductSummary from "@/app/page/[id]/ProductSummary";
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

import CreatePin from "@/app/page/[id]/CreatePin";
import ProductSummary from "@/app/page/[id]/ProductSummary";
import styles from "./page.module.scss";

export default function CreatePage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <CreatePin />
                <ProductSummary />
            </div>
        </div>
    );
}

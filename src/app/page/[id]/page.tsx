import ViewPin from "@/app/page/[id]/ViewPin";
import ProductSummary from "@/app/page/[id]/ProductSummary";
import styles from "./page.module.scss";

export default function DetailPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ViewPin pinList={[]} image="" />
                <ProductSummary />
            </div>
        </div>
    );
}

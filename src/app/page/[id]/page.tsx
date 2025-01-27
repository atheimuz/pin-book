import ViewPin from "@/app/page/[id]/ViewPin";
import ProductSummary from "@/app/page/[id]/ProductSummary";
import ShareBox from "@/app/page/[id]/ShareBox";
import { getBookAPI } from "@/lib/remote/book";
import styles from "./page.module.scss";

export default async function DetailPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const book = await getBookAPI(id);

    if ("error" in book) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ViewPin pinList={book.pins} image={book.image} />
                <ProductSummary />
            </div>
            <div className={styles.etc}>
                <ShareBox />
            </div>
        </div>
    );
}

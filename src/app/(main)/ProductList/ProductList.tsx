import styles from "./ProductList.module.scss";

interface ProductItem {
    thumbnail: string;
    name: string;
}

const productList: ProductItem[] = [
    {
        thumbnail:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162849292369220740.jpg?w=100",
        name: "미나 MINI LED 버섯램프 무드등 조명 LH60 (C타입충전)"
    },
    {
        thumbnail: "https://prs.ohou.se/apne2/any/uploads/productions/v1-197691235680384.jpg?w=100",
        name: "재팬 다카쿠와 법랑 커트러리 장인이 만들어낸 고퀄리티 수공예품 스푼(소)"
    },
    {
        thumbnail:
            "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/169276325843505182.jpg?w=100",
        name: "플리세 딥 플레이트 220mm"
    }
];
const ProductList = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {productList.map((item) => (
                    <li key={item.name} className={styles.item}>
                        <img className={styles.thumbnail} src={item.thumbnail} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

import styles from "./ShareBox.module.scss";

const ShareBox = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <div className={styles.icon} />
                    링크
                </li>
                <li className={styles.item}>
                    <div className={styles.icon} />
                    퍼가기
                </li>
            </ul>
            <div className={styles.copyArea}>
                <p className={styles.copyText}>
                    http://localhost:3000/page/6790bfd66ff20a2c406a567a
                </p>
                <button type="button" className={styles.copyBtn}>
                    복사
                </button>
            </div>
        </div>
    );
};

export default ShareBox;

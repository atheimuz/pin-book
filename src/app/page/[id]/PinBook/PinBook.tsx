"use client";

import cx from "classnames";
import { IProductPin } from "@/models/product";
import LinkPin from "@/components/LinkPin";
import ProductList from "@/app/page/[id]/ProductList";
import styles from "./PinBook.module.scss";

interface PinBoardProps {
    pins: IProductPin[];
    image: string;
    onImageClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
    onUpdateLink?: (index: number, value: string) => void;
    onRemovePin?: (index: number) => void;
}

const PinBook = ({ pins, image, onImageClick, onUpdateLink, onRemovePin }: PinBoardProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.pinBox}>
                <div className={styles.imageArea}>
                    {pins.map((pin, index) => (
                        <LinkPin
                            key={`${pin.x} ${pin.y}`}
                            x={pin.x}
                            y={pin.y}
                            link={pin.link}
                            updateLink={
                                onUpdateLink ? (link) => onUpdateLink(index, link) : undefined
                            }
                            removePin={onRemovePin ? () => onRemovePin(index) : undefined}
                        />
                    ))}
                    <img className={styles.mainImage} src={image} />
                    <div
                        className={cx(styles.flickerBox, { [styles.active]: !pins.length })}
                        onClick={onImageClick}
                    />
                </div>
            </div>
            <ProductList list={pins.map((item) => item.link)} />
        </div>
    );
};

export default PinBook;

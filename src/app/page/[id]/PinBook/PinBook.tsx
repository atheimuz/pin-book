"use client";

import { useState, useRef } from "react";
import { IProductPin } from "@/models/product";
import LinkPin from "@/components/LinkPin";
import ProductList from "@/app/page/[id]/ProductList";
import styles from "./PinBook.module.scss";

const PinBook = () => {
    const [pins, setPins] = useState<IProductPin[]>([]);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        if (!imageRef.current) return;

        const img = imageRef.current;
        const rect = img.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPins((prev) => [...prev, { x, y, link: "" }]);
    };

    const updatePinLink = ({ index, value }: { index: number; value: string }) => {
        const newPins = [...pins];
        newPins[index].link = value;
        setPins(newPins);
    };

    const removePin = (index: number) => {
        const newPins = [...pins];
        newPins.splice(index, 1);
        setPins(newPins);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.pinBox}>
                {pins.map((pin, pinIndex) => (
                    <LinkPin
                        key={`${pin.x} ${pin.y}`}
                        x={pin.x}
                        y={pin.y}
                        link={pin.link}
                        updateLink={(link) => updatePinLink({ index: pinIndex, value: link })}
                        removePin={() => removePin(pinIndex)}
                    />
                ))}
                <img
                    ref={imageRef}
                    onClick={handleImageClick}
                    className={styles.mainImage}
                    src="https://prs.ohouse.com/apne2/any/v1-313723627950208.jpg?w=720"
                />
            </div>
            <ProductList list={pins.map((item) => item.link)} />
        </div>
    );
};

export default PinBook;

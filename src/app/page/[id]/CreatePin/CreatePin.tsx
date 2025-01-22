"use client";

import { useState } from "react";
import { IProductPin } from "@/models/product";
import PlusIcon from "@/components/icons/Plus";
import PinBook from "../PinBook";
import styles from "./CreatePin.module.scss";

const CreatePin = () => {
    const [localPins, setLocalPins] = useState<IProductPin[]>([]);
    const [localImage, setLocalImage] = useState<string | ArrayBuffer | null>(null);

    const handleImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const img = event.currentTarget;
        const rect = img.getBoundingClientRect();

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setLocalPins((prev) => [...prev, { x, y, link: "" }]);
    };

    const updatePinLink = (index: number, value: string) => {
        setLocalPins((prev) => {
            const newPins = [...prev];
            newPins[index].link = value;
            return newPins;
        });
    };

    const removePin = (index: number) => {
        setLocalPins((prev) => prev.filter((_, i) => i !== index));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setLocalImage(reader.result);
            };
        }
    };

    return (
        <div className={styles.wrapper}>
            {localImage ? (
                <>
                    <div className={styles.msg}>원하는 위치에 핀을 지정해주세요</div>
                    <PinBook
                        pins={localPins}
                        image={localImage as string}
                        onImageClick={handleImageClick}
                        onUpdateLink={updatePinLink}
                        onRemovePin={removePin}
                    />
                </>
            ) : (
                <label className={styles.createBox}>
                    <input type="file" onChange={handleImageUpload} hidden />
                    <button type="button" className={styles.createBtn}>
                        <PlusIcon />
                    </button>
                </label>
            )}
        </div>
    );
};

export default CreatePin;

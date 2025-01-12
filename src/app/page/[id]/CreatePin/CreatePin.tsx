"use client";

import { useState } from "react";
import { IProductPin } from "@/models/product";
import PinBook from "../PinBook";

const CreatePin = () => {
    const [localPins, setLocalPins] = useState<IProductPin[]>([]);
    const [localImage, setLocalImage] = useState<string | ArrayBuffer | null>(null);

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
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

    return localImage ? (
        <PinBook
            pins={localPins}
            image={localImage as string}
            onImageClick={handleImageClick}
            onUpdateLink={updatePinLink}
            onRemovePin={removePin}
        />
    ) : (
        <input type="file" onChange={handleImageUpload} />
    );
};

export default CreatePin;

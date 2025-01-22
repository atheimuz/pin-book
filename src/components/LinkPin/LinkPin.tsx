"use client";

import { useEffect, useMemo, useRef } from "react";
import PinIcon from "@/components/icons/Pin";
import styles from "./LinkPin.module.scss";

interface Props {
    x: number;
    y: number;
    link: string;
    updateLink?: (link: string) => void;
    removePin?: () => void;
}
const LinkPin = ({ x, y, link, updateLink, removePin }: Props) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const type = useMemo<"create" | "view">(() => (!!updateLink ? "create" : "view"), [updateLink]);

    const handleUpdateLink = () => {
        if (type !== "create") return;
        const inputValue = inputRef.current?.value;
        if (!inputValue) return;
        updateLink?.(inputValue);
    };

    const handleRemovePin = () => {
        if (type !== "create") return;
        const inputValue = inputRef.current?.value;
        if (inputValue) return null;
        removePin?.();
    };

    useEffect(() => {
        wrapperRef.current?.focus();
        inputRef.current?.focus();

        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                handleRemovePin();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            tabIndex={0}
            className={styles.wrapper}
            style={{ top: `${y}%`, left: `${x}%` }}
        >
            <button type="button" className={styles.pinIcon}>
                <PinIcon />
            </button>
            <div className={styles.linkArea}>
                <input
                    ref={inputRef}
                    defaultValue={link}
                    placeholder="링크를 입력해주세요"
                    disabled={!updateLink}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleUpdateLink();
                        }
                    }}
                />
                {type === "create" && (
                    <>
                        <button type="button" onClick={handleUpdateLink}>
                            확인
                        </button>
                        {link && (
                            <button type="button" onClick={removePin}>
                                삭제
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default LinkPin;

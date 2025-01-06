import { create } from "zustand";
import { IProduct } from "@/models/product";

interface ProductStore {
    summary: IProduct | null;
    setSummary: (info: IProduct | null) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    summary: null,
    setSummary: (info) => set(() => ({ summary: info }))
}));

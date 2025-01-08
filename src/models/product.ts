export interface IProduct {
    title: string | null;
    description: string | null;
    thumbnail: string | null;
    link: string;
}

export interface IProductPin {
    x: number;
    y: number;
    link: string;
}

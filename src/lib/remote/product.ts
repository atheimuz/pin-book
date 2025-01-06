export const getProductAPI = async (link: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/product?link=${link}`);
        const resJson = await res.json();
        const data = resJson.data;

        return data;
    } catch (e) {
        return {
            error: e instanceof Error ? e.message : "An unknown error occurred"
        };
    }
};

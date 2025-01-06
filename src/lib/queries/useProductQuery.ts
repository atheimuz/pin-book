import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductAPI } from "@/lib/remote/product";

export const PRODUCT_QUERY_KEY = "product";

export const useProduct = (link: string) => {
    return useSuspenseQuery({
        queryKey: [PRODUCT_QUERY_KEY, link],
        queryFn: () => getProductAPI(link)
    });
};

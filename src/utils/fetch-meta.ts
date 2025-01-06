import { IProduct } from "@/models/product";

export const fetchMetaData = async (htmlData: string) => {
    const data: Omit<IProduct, "link"> = {
        title: null,
        description: null,
        thumbnail: null
    };

    // title
    const ogTitle = htmlData.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/);
    const twitterTitle = htmlData.match(/<meta[^>]*name="twitter:title"[^>]*content="([^"]+)"/);

    if (ogTitle) {
        data.title = ogTitle[1];
    } else if (twitterTitle) {
        data.title = twitterTitle[1];
    }

    // description
    const ogDesc = htmlData.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"/);
    const twitterDesc = htmlData.match(
        /<meta[^>]*name="twitter:description"[^>]*content="([^"]+)"/
    );

    if (ogDesc) {
        data.description = ogDesc[1];
    } else if (twitterDesc) {
        data.description = twitterDesc[1];
    }

    // image
    const ogImage = htmlData.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/);
    const twitterImage = htmlData.match(/<meta[^>]*name="twitter:image"[^>]*content="([^"]+)"/);

    if (ogImage) {
        data.thumbnail = ogImage[1];
    } else if (twitterImage) {
        data.thumbnail = twitterImage[1];
    }

    return data;
};

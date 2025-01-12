"use client";

import { IProductPin } from "@/models/product";
import PinBook from "../PinBook";

interface Props {
    pinList: IProductPin[];
    image: string;
}

const ViewPin = ({ pinList, image }: Props) => {
    return <PinBook pins={pinList} image={image} />;
};

export default ViewPin;

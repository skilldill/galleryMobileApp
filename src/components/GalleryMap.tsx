import React, { FC } from "react";
import { IonImg } from "@ionic/react";
import Firstpng from "../assets/first.png";
import Secondpng from "../assets/second.png";
import Thirdpng from "../assets/third.png";

const GALLERY_MAP: Record<string, string> = {
    first: Firstpng,
    second: Secondpng,
    third: Thirdpng,
}
type GalleryMapProps = {
    photoName: string;
}

export const GalleryMap: FC<GalleryMapProps> = ({ photoName }) => {
    return (
        <IonImg src={GALLERY_MAP[photoName]} />
    )
}
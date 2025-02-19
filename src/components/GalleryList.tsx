import { FC } from "react";
import "./Gallery.css";
import { GalleryCard } from "./GalleryCard";

type GalleryListProps = {
    pictures: { src: string, title: string }[];
}

export const GalleryList: FC<GalleryListProps> = ({ pictures }) => {
    return (
        <div className="galleryList">
            {pictures.map((picture) => 
                <GalleryCard {...picture} key={picture.src} />
            )}
        </div>
    )
}

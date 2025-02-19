import { FC } from "react";
import "./Gallery.css";
import { GalleryMap } from "./GalleryMap";
import { useModals } from "react-mobile-modals";
import PictureScreen from "../pages/PictureScreen";

type GalleryCardProps = {
    src: string;
    title: string;
}

export const GalleryCard: FC<GalleryCardProps> = ({ src, title }) => {
    const { openModal } = useModals();

    const openPictureScreen = () => {
        openModal({
            component: <PictureScreen title={title} src={src} />
        })
    }

    return (
        <div className="pictureBlock" onClick={openPictureScreen}>
            <GalleryMap photoName={src} />
            <h2 className="pictureTitle">{title}</h2>
        </div>
    )
}
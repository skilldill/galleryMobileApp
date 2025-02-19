import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import { GalleryMap } from "../components/GalleryMap";
import { useModals } from "react-mobile-modals";
import "./Screen.css";

type PictureScreenProps = {
  title: string;
  src: string;
}

const PictureScreen: React.FC<PictureScreenProps> = ({ title, src }) => {
  const { closeModal } = useModals();
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => closeModal()}>Back</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="pictureScreen">
          <h1 className="screenTitle">{title}</h1>
          <GalleryMap photoName={src} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PictureScreen;

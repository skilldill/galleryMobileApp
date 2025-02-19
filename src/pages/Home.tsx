import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { GalleryList } from "../components/GalleryList";
import { ModalsProvider } from "react-mobile-modals";



const PICTURES = [
  { src: "first", title: "Monument" },
  { src: "second", title: "Nature vibes" },
  { src: "third", title: "Coffee and sea" },
];

const Home: React.FC = () => {
  return (
    <ModalsProvider>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Vibe gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Gallery</IonTitle>
            </IonToolbar>
          </IonHeader>
          <GalleryList pictures={PICTURES}/>
        </IonContent>
      </IonPage>
    </ModalsProvider>
  );
};

export default Home;

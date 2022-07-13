import { useEffect, useState } from "react";
import ImageCard from "../../components/imageCard/ImageCard";
import { ImageCard as IImageCard } from "../../interfaces/ImageCard.interface";
import { getImages } from "../../services/imageServices";
import homeStyles from "./Home.module.css";

export default function Home() {
  const [images, setImages] = useState<IImageCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getImages(setIsLoading, (result) => setImages(result.data.data));
  }, []);

  return (
    <main className={homeStyles["image-cards-container"]}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        images.map(({ _id, imageDetails, imageName, imageURL }: IImageCard) => (
          <ImageCard
            _id={_id}
            imageDetails={imageDetails}
            imageName={imageName}
            imageURL={imageURL}
          />
        ))
      )}
    </main>
  );
}

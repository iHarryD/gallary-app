import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageCard } from "../../interfaces/ImageCard.interface";
import { getImage } from "../../services/imageServices";
import commonStyles from "../../style/Common.module.css";
import showStyles from "./Show.module.css";

export default function Show() {
  const [image, setImage] = useState<ImageCard | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getImage(id, setIsLoading, (result) => setImage(result.data.data));
    }
  }, [id]);

  return isLoading ? (
    <h2>Loading</h2>
  ) : image ? (
    <main className={showStyles["show-container"]}>
      <div className={showStyles["image-container"]}>
        <img src={image.imageURL} alt={image.imageName} />
      </div>
      <div className={showStyles["image-details-container"]}>
        <h1>{image.imageName}</h1>
        <div>
          <div className={showStyles["image-dates-container"]}>
            <div>
              <span>Uploaded on: </span>
              <span>
                {new Date(image.imageDetails.uploadedOn).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span>Last modified on: </span>
              <span>
                {new Date(
                  image.imageDetails.lastModifiedOn
                ).toLocaleDateString()}
              </span>
            </div>
          </div>
          <p>{image.imageDetails.description}</p>
        </div>
        <div className={showStyles["image-action-btn-container"]}>
          <button className={commonStyles["primary-btn"]}>Edit</button>
          <button className={commonStyles["primary-btn"]}>Delete</button>
        </div>
      </div>
    </main>
  ) : (
    <h2>Something went wrong</h2>
  );
}

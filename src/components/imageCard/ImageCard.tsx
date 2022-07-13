import { Link } from "react-router-dom";
import { ImageCard as IImageCard } from "../../interfaces/ImageCard.interface";
import imageCardStyles from "./ImageCard.module.css";

export default function ImageCard({
  _id,
  imageDetails,
  imageName,
  imageURL,
}: IImageCard) {
  return (
    <div className={imageCardStyles["image-card-container"]}>
      <img
        src={imageURL}
        alt={imageName}
        className={imageCardStyles["card-image"]}
      />
      <Link to={`/show/${_id}`}>
        <div className={imageCardStyles["card-text-container"]}>
          <h3>{imageName}</h3>
          <p>{imageDetails.description}</p>
        </div>
      </Link>
    </div>
  );
}

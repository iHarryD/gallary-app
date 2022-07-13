import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImageCard } from "../../interfaces/ImageCard.interface";
import { deleteImage, getImage } from "../../services/imageServices";
import commonStyles from "../../style/Common.module.css";
import showStyles from "./Show.module.css";
import BounceLoader from "react-spinners/BounceLoader";

export default function Show() {
  const [image, setImage] = useState<ImageCard | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getImage(id, setIsLoading, (result) => setImage(result.data.data));
    }
  }, [id]);

  function handleDeleteImage(id: string) {
    deleteImage(id, setIsDeleting, (result) => {
      navigate("/");
      console.log(result);
    });
  }

  return (
    <main>
      {isLoading ? (
        <div className={commonStyles["loader-container"]}>
          <BounceLoader loading={isLoading} color="#008080" />
        </div>
      ) : image ? (
        <div className={showStyles["show-container"]}>
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
                    {new Date(
                      image.imageDetails.uploadedOn
                    ).toLocaleDateString()}
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
              <Link to={`/edit/${image._id}`}>
                <button className={commonStyles["primary-btn"]}>Edit</button>
              </Link>
              <button
                disabled={isDeleting}
                className={commonStyles["primary-btn"]}
                onClick={() => {
                  if (image) {
                    handleDeleteImage(image._id);
                  }
                }}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h2>Something went wrong</h2>
      )}
    </main>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageForm from "../../components/imageForm/ImageForm";
import { ImageCard } from "../../interfaces/ImageCard.interface";
import { getImage } from "../../services/imageServices";
import formStyles from "./Edit.module.css";
import BounceLoader from "react-spinners/BounceLoader";
import commonStyles from "../../style/Common.module.css";

export default function Edit() {
  const { id } = useParams();
  const [image, setImage] = useState<ImageCard | null>(null);

  useEffect(() => {
    if (id) getImage(id, undefined, (result) => setImage(result.data.data));
  }, [id]);

  return (
    <main>
      {image ? (
        <div className={formStyles["form-container"]}>
          <ImageForm image={image} />
        </div>
      ) : (
        <div className={commonStyles["loader-container"]}>
          <BounceLoader loading={true} color="#008080" />
        </div>
      )}
    </main>
  );
}

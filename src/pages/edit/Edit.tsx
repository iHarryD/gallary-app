import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageForm from "../../components/imageForm/ImageForm";
import { ImageCard } from "../../interfaces/ImageCard.interface";
import { getImage } from "../../services/imageServices";
import formStyles from "./Edit.module.css";

export default function Edit() {
  const { id } = useParams();
  const [image, setImage] = useState<ImageCard | null>(null);

  useEffect(() => {
    if (id) getImage(id, undefined, (result) => setImage(result.data.data));
  }, [id]);

  return image ? (
    <main className={formStyles["form-container"]}>
      <ImageForm image={image} />
    </main>
  ) : (
    <h2>Loading...</h2>
  );
}

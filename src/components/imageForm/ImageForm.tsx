import { FormEvent, useEffect, useRef } from "react";
import { ImageCard } from "../../interfaces/ImageCard.interface";
import { editImage, postNewImage } from "../../services/imageServices";
import commonStyles from "../../style/Common.module.css";
import imageFormStyles from "./ImageForm.module.css";

export default function ImageForm({ image }: { image?: ImageCard }) {
  const imageNameInputRef = useRef<HTMLInputElement | null>(null);
  const imageDescriptionInputRef = useRef<HTMLInputElement | null>(null);
  const imageURLInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!image) return;
    if (
      imageNameInputRef.current === null ||
      imageDescriptionInputRef.current === null ||
      imageURLInputRef.current === null
    )
      return;
    imageNameInputRef.current.value = image.imageName;
    imageDescriptionInputRef.current.value = image.imageDetails.description;
    imageURLInputRef.current.value = image.imageURL;
  }, [image]);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      imageNameInputRef.current === null ||
      imageDescriptionInputRef.current === null ||
      imageURLInputRef.current === null
    )
      return;
    if (image) {
      const update: {
        description?: string;
        imageName?: string;
        imageURL?: string;
      } = {};
      if (imageNameInputRef.current.value.replaceAll(" ", "")) {
        update.imageName = imageNameInputRef.current.value;
      }
      if (imageDescriptionInputRef.current.value.replaceAll(" ", "")) {
        update.description = imageDescriptionInputRef.current.value;
      }
      if (imageURLInputRef.current.value.replaceAll(" ", "")) {
        update.imageURL = imageURLInputRef.current.value;
      }
      editImage(image._id, update);
    } else {
      if (
        !imageNameInputRef.current.value.replaceAll(" ", "") ||
        !imageDescriptionInputRef.current.value.replaceAll(" ", "") ||
        !imageURLInputRef.current.value.replaceAll(" ", "")
      )
        console.log("Empty");
      const newImage = {
        imageName: imageNameInputRef.current.value,
        imageDetails: {
          description: imageDescriptionInputRef.current.value,
          uploadedOn: new Date(),
          lastModifiedOn: new Date(),
        },
        imageURL: imageURLInputRef.current.value,
      };
      postNewImage(newImage as ImageCard);
    }
  }

  return (
    <form
      className={imageFormStyles["new-image-form"]}
      onSubmit={(e) => handleSubmitForm(e)}
    >
      <div className={commonStyles["input-label-container"]}>
        <label htmlFor="imageName">Image Name</label>
        <input ref={imageNameInputRef} name="imageName" id="imageName" />
      </div>
      <div className={commonStyles["input-label-container"]}>
        <label htmlFor="imageURL">Image URL</label>
        <input ref={imageURLInputRef} name="imageURL" id="imageURL" />
      </div>
      <div className={commonStyles["input-label-container"]}>
        <label htmlFor="imageDescription">Image Description</label>
        <input
          ref={imageDescriptionInputRef}
          name="imageDescription"
          id="imageDescription"
        />
      </div>
      <div>
        <button className={commonStyles["primary-btn"]}>
          {image ? "Edit" : "Post"}
        </button>
      </div>
    </form>
  );
}

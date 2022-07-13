import { FormEvent, useRef } from "react";
import { postNewImage } from "../../services/imageServices";
import commonStyles from "../../style/Common.module.css";
import newImageFormStyles from "./NewImageForm.module.css";

export default function NewImageForm() {
  const imageNameInputRef = useRef<HTMLInputElement | null>(null);
  const imageDescriptionInputRef = useRef<HTMLInputElement | null>(null);
  const imageURLInputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      imageNameInputRef.current === null ||
      imageDescriptionInputRef.current === null ||
      imageURLInputRef.current === null
    )
      return;
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
    postNewImage(newImage);
  }

  return (
    <form
      className={newImageFormStyles["new-image-form"]}
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
        <button className={commonStyles["primary-btn"]}>Post</button>
      </div>
    </form>
  );
}

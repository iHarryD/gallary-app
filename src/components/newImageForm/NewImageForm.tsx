import commonStyles from "../../style/Common.module.css";
import newImageFormStyles from "./NewImageForm.module.css";

export default function NewImageForm() {
  return (
    <form className={newImageFormStyles["new-image-form"]}>
      <div className={commonStyles["input-label-container"]}>
        <label htmlFor="imageName">Image Name</label>
        <input name="imageName" id="imageName" />
      </div>
      <div className={commonStyles["input-label-container"]}>
        <label htmlFor="imageURL">Image URL</label>
        <input name="imageURL" id="imageURL" />
      </div>
      <div className={commonStyles["input-label-container"]}>
        <label htmlFor="imageDetails">Image Details</label>
        <input name="imageDetails" id="imageDetails" />
      </div>
      <div>
        <button className={commonStyles["primary-btn"]}>Post</button>
      </div>
    </form>
  );
}

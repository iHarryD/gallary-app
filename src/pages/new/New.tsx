import ImageForm from "../../components/imageForm/ImageForm";
import newStyles from "./New.module.css";

export default function New() {
  return (
    <main className={newStyles["form-container"]}>
      <ImageForm />
    </main>
  );
}

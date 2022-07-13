import NewImageForm from "../../components/newImageForm/NewImageForm";
import newStyles from "./New.module.css";

export default function New() {
  return (
    <main className={newStyles["form-container"]}>
      <NewImageForm />
    </main>
  );
}

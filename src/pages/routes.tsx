import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import New from "./new/New";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}

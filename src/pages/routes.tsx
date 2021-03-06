import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Edit from "./edit/Edit";
import Home from "./home/Home";
import New from "./new/New";
import Show from "./show/Show";

export default function AllRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

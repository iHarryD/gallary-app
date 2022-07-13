import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "./home/Home";
import New from "./new/New";

export default function AllRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </>
  );
}

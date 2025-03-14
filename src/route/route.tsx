import MainPage from "@/page/MainPage/page";
import { ProjectPage } from "@/page/ProjectPage/page";
import { Layout } from "@/route/outlet";
import { Route, Routes } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />} /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

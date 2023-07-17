import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import DetailPage from "../components/DetailPage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:id", element: <DetailPage /> },
]);

export default routes;

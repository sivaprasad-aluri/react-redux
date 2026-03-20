import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import { ROUTE_PATHS } from "./routePaths";
import Redux from "../pages/Redux";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Counter from "../pages/redux/Counter";
import Todo from "../pages/redux/Todo";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path={ROUTE_PATHS.REDUX} element={<Redux />}>
            <Route index element={<Counter />} />
            <Route path="todo" element={<Todo />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import { Suspense, lazy } from "react";
import GptSearch from "../pages/GptSearch";

const Browse = lazy(() => import("../pages/Browse"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback="Loading...">
          <Browse />
        </Suspense>
      ),
    },{
      path: '/gpt-search',
      element: <GptSearch/>
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;

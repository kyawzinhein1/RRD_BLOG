import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Posts, { loader as postsLoader } from "./pages/Posts";
import { action as postCreateAction } from "./components/PostForm";
import { action as postUpdateAction } from "./components/PostForm";
import Details, {
  action as deleteAction,
  loader as detailsLoader,
} from "./pages/Details";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Auth, { action as AuthAction } from "./pages/Auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
          action: postCreateAction,
        },
        {
          path: "auth",
          element: <Auth />,
          action: AuthAction,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: detailsLoader,
          children: [
            {
              index: true,
              element: <Details />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: postUpdateAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

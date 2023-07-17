// imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// layouts
import Main, { mainLoader } from "./layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

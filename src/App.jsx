import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import About from './pages/About';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ]
  },

]);

function Router() {

  return (
    <RouterProvider router={router} />
  )
}

export default Router

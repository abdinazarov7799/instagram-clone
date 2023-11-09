import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/components/i18n.jsx'
import { QueryClient , QueryClientProvider } from "react-query";
import Register from "./Auth/Register.jsx";
import Login from "./Auth/Login.jsx";
import ErrorPage from "./Layout/404/ErrorPage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [],
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/sign-up",
        element: <Register />,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>,
)

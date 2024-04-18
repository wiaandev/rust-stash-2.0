import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Root } from "./routes/root.tsx";
import ErrorPage from "./pages/error-page.tsx";
import Home from "./routes/home.tsx";
import Stash from "./pages/stash.tsx";
import Register from "./pages/register.tsx";
import Map from "./pages/map.tsx";
import Overview from "./routes/overview.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "stash",
        element: <Stash/>,
        children: [
          {
            path: ":id",
            element: <Overview/>
          }
        ]
      },
      {
        path: "map",
        element: <Map/>
      },
      {
        path: "register",
        element: <Register/>
      },
    ]
  },
]);


const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

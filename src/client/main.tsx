import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import client from '@apollo/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import Root from './routes/root.tsx';
import ErrorPage from './pages/error-page.tsx';
import Contact from './routes/contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* @ts-ignore = Still need to figure out how to fix client prop issue*/}
    {/* <ApolloProvider client = { client }> */}
    <RouterProvider router={router}/>
    {/* </ApolloProvider> */}
  </React.StrictMode>,
)

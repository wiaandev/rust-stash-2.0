import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
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

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client = { client }>
    <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
)

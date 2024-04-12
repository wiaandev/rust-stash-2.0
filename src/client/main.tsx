import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import client from '@apollo/client';
import { ApolloProvider } from '@apollo/client';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* @ts-ignore = Still need to figure out how to fix client prop issue*/}
    {/* <ApolloProvider client = { client }> */}
    <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
)

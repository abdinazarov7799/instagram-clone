import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../src/components/i18n.jsx'
import { QueryClient , QueryClientProvider } from "react-query";
import Router from "./router/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Router />
      </QueryClientProvider>
  </React.StrictMode>,
)

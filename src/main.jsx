import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../src/components/i18n.jsx'
import { QueryClient , QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import Router from "./router/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
      <QueryClientProvider client={queryClient}>
          <Router />
          <ReactQueryDevtools />
      </QueryClientProvider>
)

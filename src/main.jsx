import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
      <QueryClientProvider client={queryClient}>
       <App /> 
      </QueryClientProvider>
      
    </AppProvider>,
    
  );

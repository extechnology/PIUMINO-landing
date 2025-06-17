import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "./components/ui/tooltip";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(

    <BrowserRouter>

          <QueryClientProvider client={queryClient}>
            <TooltipProvider>

                <App />

            </TooltipProvider>
        </QueryClientProvider>

    </BrowserRouter>


);

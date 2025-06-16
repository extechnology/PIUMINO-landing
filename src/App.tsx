import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ReturnRefundPolicy = lazy(() => import("./pages/ReturnRefundPolicy"));
const PiuminoLoader = lazy(() => import("./components/ui/PiuminoLoader"));
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suspense fallback={<PiuminoLoader />}><Index /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PiuminoLoader />}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PiuminoLoader />}><Contact /></Suspense>} />
          <Route path="/shop" element={<Suspense fallback={<PiuminoLoader />}><Shop /></Suspense>} />
          <Route path="/product/:id" element={<Suspense fallback={<PiuminoLoader />}><Product /></Suspense>} />

          <Route path="/privacy-policy" element={<Suspense fallback={<PiuminoLoader />}><PrivacyPolicy /></Suspense>} />
          <Route path="/terms-and-conditions" element={<Suspense fallback={<PiuminoLoader />}><TermsAndConditions /></Suspense>} />
          <Route path="/return-refund-policy" element={<Suspense fallback={<PiuminoLoader />}><ReturnRefundPolicy /></Suspense>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
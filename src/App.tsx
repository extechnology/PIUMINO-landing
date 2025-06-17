import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const MainLayout = lazy(() => import("./components/Layout/MainLayout"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ReturnRefundPolicy = lazy(() => import("./pages/ReturnRefundPolicy"));
const PiuminoLoader = lazy(() => import("./components/ui/PiuminoLoader"));

const App = () => (
  <>
    <Suspense fallback={<PiuminoLoader />}>

      <Routes>
        <Route element={<MainLayout />}>


        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/returnrefundpolicy" element={<ReturnRefundPolicy />} />
          

        </Route>



        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <Sonner />
    </Suspense>
  </>
);

export default App;
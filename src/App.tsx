
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WalsallServices from "./pages/WalsallServices";
import BirminghamServices from "./pages/BirminghamServices";
import WolverhamptonServices from "./pages/WolverhamptonServices";
import CoventryServices from "./pages/CoventryServices";
import StaffordServices from "./pages/StaffordServices";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fencing-services-in-walsall" element={<WalsallServices />} />
          <Route path="/fencing-services-in-birmingham" element={<BirminghamServices />} />
          <Route path="/fencing-services-in-wolverhampton" element={<WolverhamptonServices />} />
          <Route path="/fencing-services-in-coventry" element={<CoventryServices />} />
          <Route path="/fencing-services-in-stafford" element={<StaffordServices />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "./pages/About.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OfferingDetail from "./pages/OfferingDetail.tsx";
import RevenueDiagnostic from "./pages/RevenueDiagnostic.tsx";
import ForecastAccuracySprint from "./pages/ForecastAccuracySprint.tsx";
import RevenueSystemBuild from "./pages/RevenueSystemBuild.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import Investors from "./pages/Investors.tsx";
import Founders from "./pages/Founders.tsx";
import Offerings from "./pages/Offerings.tsx";
import PrivateEquity from "./pages/PrivateEquity.tsx";
import PEOfferingDetail from "./pages/PEOfferingDetail.tsx";
import RevenueArchitectureSprint from "./pages/RevenueArchitectureSprint.tsx";
import RevenueAdvisoryBridge from "./pages/RevenueAdvisoryBridge.tsx";
import VentureCapital from "./pages/VentureCapital.tsx";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings/revenue-diagnostic" element={<RevenueDiagnostic />} />
          <Route path="/offerings/forecast-accuracy-sprint" element={<ForecastAccuracySprint />} />
          <Route path="/offerings/revenue-system-build" element={<RevenueSystemBuild />} />
          <Route path="/offerings/:slug" element={<OfferingDetail />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/who-we-work-with/investors" element={<Investors />} />
          <Route path="/who-we-work-with/investors/private-equity" element={<PrivateEquity />} />
          <Route path="/who-we-work-with/investors/private-equity/revenue-architecture-sprint" element={<RevenueArchitectureSprint />} />
          <Route path="/who-we-work-with/investors/private-equity/revenue-diagnostic" element={<RevenueDiagnostic />} />
          <Route path="/who-we-work-with/investors/private-equity/revenue-system-build" element={<RevenueSystemBuild />} />
          <Route path="/who-we-work-with/investors/private-equity/revenue-advisory" element={<RevenueAdvisoryBridge />} />
          <Route path="/who-we-work-with/investors/private-equity/revenue-bridge" element={<RevenueAdvisoryBridge />} />
          <Route path="/who-we-work-with/investors/private-equity/:slug" element={<PEOfferingDetail />} />
          <Route path="/who-we-work-with/investors/venture-capital" element={<VentureCapital />} />
          <Route path="/who-we-work-with/founders" element={<Founders />} />
          <Route path="/offerings" element={<Offerings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

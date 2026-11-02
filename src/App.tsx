import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "./pages/About.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import Investors from "./pages/Investors.tsx";
import Founders from "./pages/Founders.tsx";
import Offerings from "./pages/Offerings.tsx";
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
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/who-we-work-with/investors" element={<Investors />} />
          <Route path="/who-we-work-with/investors/venture-capital" element={<Navigate to="/who-we-work-with/investors" replace />} />
          <Route path="/who-we-work-with/investors/private-equity/*" element={<Navigate to="/who-we-work-with/investors" replace />} />
          <Route path="/who-we-work-with/founders" element={<Founders />} />
          <Route path="/offerings" element={<Offerings />} />
          {["revenue-diagnostic", "forecast-accuracy-sprint", "revenue-architecture-sprint", "revenue-system-build"].map(slug => <Route key={slug} path={`/offerings/${slug}`} element={<Navigate to="/offerings" replace />} />)}
          {["revenue-diagnostic", "revenue-architecture-sprint", "revenue-system-build"].map(slug => <Route key={slug} path={`/who-we-work-with/founders/${slug}`} element={<Navigate to="/offerings" replace />} />)}
          {["revenue-advisory", "revenue-bridge", "fractional-revenue-leadership"].map(slug => <Route key={slug} path={`/offerings/${slug}`} element={<Navigate to="/offerings#beyond-your-first-seller" replace />} />)}
          {["revenue-advisory", "revenue-bridge", "fractional-revenue-leadership"].map(slug => <Route key={slug} path={`/who-we-work-with/founders/${slug}`} element={<Navigate to="/offerings#beyond-your-first-seller" replace />} />)}
          {["the-hire", "the-handoff", "the-step-back"].map(slug => <Route key={slug} path={`/offerings/${slug}`} element={<Navigate to={`/offerings#${slug}`} replace />} />)}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

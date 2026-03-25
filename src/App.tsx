import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticHomePage from "./pages/StaticHomePage";
import ZaNasPage from "./pages/ZaNasPage";
import StrukiPage from "./pages/StrukiPage";
import AktivnostiPage from "./pages/AktivnostiPage";
import KontaktPage from "./pages/KontaktPage";
import UpisiPage from "./pages/UpisiPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StaticHomePage />} />
          <Route path="/za-nas" element={<ZaNasPage />} />
          <Route path="/struki" element={<StrukiPage />} />
          <Route path="/aktivnosti" element={<AktivnostiPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/upisi" element={<UpisiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

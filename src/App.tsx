import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import StaticHomePage from "./pages/StaticHomePage";
import ZaNasPage from "./pages/ZaNasPage";
import ElektrotehnickaPage from "./pages/ElektrotehnickaPage";
import MasinskaPage from "./pages/MasinskaPage";
import SoobrakajnaPage from "./pages/Soobrakajna";
import KontaktPage from "./pages/KontaktPage";
import SportPage from "./pages/SportPage";
import ProektiPage from "./pages/ProektiPage";
import NastavniciPage from "./pages/NastavniciPage";
import NoviniPage from "./pages/NoviniPage";
import UpisiPage from "./pages/UpisiPage";
import NotFound from "./pages/NotFound";
import EnrollmentChatbot from "./components/EnrollmentChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StaticHomePage />} />
            <Route path="/za-nas" element={<ZaNasPage />} />
            <Route path="/elektrotehnicka" element={<ElektrotehnickaPage />} />
            <Route path="/masinska" element={<MasinskaPage />} />
            <Route path="/soobrakajna" element={<SoobrakajnaPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/sport" element={<SportPage />} />
            <Route path="/proekti" element={<ProektiPage />} />
            <Route path="/nastavnici" element={<NastavniciPage />} />
            <Route path="/novini" element={<NoviniPage />} />
            <Route path="/upisi" element={<UpisiPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <EnrollmentChatbot />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

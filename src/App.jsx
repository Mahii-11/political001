import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Campaign from "./pages/Campaign";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import ComplaintPage from "./pages/ComplaintPage";
import VoterLocator from "./pages/VoterLocator";
import Layout from "./components/layout/Layout";
import Dhaka7Page from "./pages/Dhaka7page";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Layout>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/biography" component={Biography} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
            <Route path="/complaint" component={ComplaintPage} />
            <Route path="/promise" component={Campaign} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/about" component={About} />
            <Route path="/voter-locator" component={VoterLocator} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/our-dhaka" component={Dhaka7Page} />
          </Router>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Campaign from "./pages/Campaign";
import Volunteer from "./pages/Volunteer";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <Router>
          <Route path="/" component={Home} />
          <Route path="/biography" component={Biography} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id" component={Blog} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/campaign" component={Campaign} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/about" component={About} />
          <Route path="/coming-soon" component={ComingSoon} />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

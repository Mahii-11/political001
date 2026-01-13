import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";

import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Campaign from "./pages/Campaign";
import Volunteer, { action as volunteerAction } from "./pages/Volunteer";
import About from "./pages/About";
import ComplaintPage from "./pages/ComplaintPage";
import VoterLocator from "./pages/VoterLocator";
import Dhaka7Page from "./pages/Dhaka7page";
import VisionSlider from "./pages/VisionSlider";
import VolunteerDetail, {
  loader as volunteerData,
} from "./pages/VolunteerDetail";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/biography", element: <Biography /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/complaint", element: <ComplaintPage /> },
      { path: "/promise", element: <Campaign /> },
      {
        path: "/volunteer/new",
        element: <Volunteer />,
        action: volunteerAction,
      },
      { path: "/about", element: <About /> },
      { path: "/voter-locator", element: <VoterLocator /> },
      { path: "/our-dhaka", element: <Dhaka7Page /> },
      { path: "/31-points", element: <VisionSlider /> },
      {
        path: "/volunteer/:volunteerId",
        element: <VolunteerDetail />,
        loader: volunteerData,
      },
      { path: "/login", element: <Login /> }
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

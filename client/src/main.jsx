import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import DrillingService from "./pages/ServicePage/DrillingService.jsx";
import HarvestingService from "./pages/ServicePage/HarvestingService.jsx";
import WaterWellDrillingService from "./pages/ServicePage/WaterWellDrilling.jsx";
import InstallationService from "./pages/ServicePage/InstallationService.jsx";
import IrrigationService from "./pages/ServicePage/IrrigationService.jsx";
import RainwaterHarvestingService from "./pages/ServicePage/RainwaterHarvestingService.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/drilling-service",
        element: <DrillingService />,
      },
      {
        path: "/harvesting-service",
        element: <HarvestingService />,
      },
      {
        path: "/water-well-drilling-service",
        element: <WaterWellDrillingService />,
      },
      {
        path: "/installation-service",
        element: <InstallationService />,
      },
      {
        path: "/installation-service",
        element: <InstallationService />,
      },
      {
        path: "/irrigation-service",
        element: <IrrigationService />,
      },
      {
        path: "/rainwater-harvesting-service",
        element: <RainwaterHarvestingService />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

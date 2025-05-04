import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/user/Landing";
import RootLayout from "./layouts/RootLayout";
import Adverts from "./pages/user/Adverts";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Contact from "./pages/user/Contact";
import Farmers from "./pages/user/Farmers";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import CreateAd from "./pages/dashboard/CreateAd";
import FarmerAds from "./pages/dashboard/FarmerAds";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="farmers" element={<Farmers />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<FarmerAds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

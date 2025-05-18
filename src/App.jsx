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
import VerifyEmail from "./pages/auth/VerifyEmail";
import ProductDetail from "./pages/user/ProductDetail";
import EditProduct from "./pages/dashboard/EditProduct";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import UserOverview from "./pages/userdashboard/UserOverview";
import BuyerDashboard from "./pages/userdashboard/BuyerDashboard";

import Cart from "./pages/user/Cart";
import PaymentPage from "./pages/user/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="farmers" element={<Farmers />} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="paymentpage" element={<PaymentPage />} />
          {/* <Route path="cartcontext" element={<cartcontext/>}/> */}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="ads" element={<FarmerAds />} />
          <Route path="edit-ad" element={<EditProduct />} />
        </Route>

        {/* <Route path="/user-dashboard" element={<UserDashboardLayout />}>
            <Route index={true} element={<UserOverview />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

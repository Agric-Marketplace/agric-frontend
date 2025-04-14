import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/user/Landing";
import RootLayout from "./layouts/RootLayout";
import Adverts from "./pages/user/Adverts";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

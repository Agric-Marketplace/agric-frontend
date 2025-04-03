import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/user/Landing";
import RootLayout from "./layouts/RootLayout";
import Adverts from "./pages/user/Adverts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Landing />} />
          <Route path="adverts" element={<Adverts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

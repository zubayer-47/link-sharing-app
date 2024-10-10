import { Route, Routes } from "react-router-dom";
import PreviewLayout from "./layouts/PreviewLayout";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import Preview from "./pages/preview/Preview";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route element={<PreviewLayout />}>
        <Route path="/preview" element={<Preview />} />
      </Route>
    </Routes>
  );
}

export default App;

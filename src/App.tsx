import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AcRepair from "./pages/AcRepair";
import AcInstallations from "./pages/AcInstallations";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/ac-repair"
          element={
            <Layout>
              <AcRepair />
            </Layout>
          }
        />
        <Route
          path="/ac-installations"
          element={
            <Layout>
              <AcInstallations />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

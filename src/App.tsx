import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ContractReviewPage from "./pages/ContractReviewPage";
import DocumentGenerationPage from "./pages/DocumentGenerationPage";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contract-review" element={<ContractReviewPage />} />
              <Route path="/document-generation" element={<DocumentGenerationPage />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

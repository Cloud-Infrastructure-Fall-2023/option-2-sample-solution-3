import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import SearchByTermPage from "./pages/SearchByTermPage";
import SearchByTopNPage from "./pages/SearchByTopNPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useState } from "react";
import ResultsPage from "./pages/ResultsPage.js";

export const globalContext = createContext();

function App() {
  const queryClient = new QueryClient();
  const [baseURL] = useState("http://localhost:5000");

  return (
    <globalContext.Provider value={{ baseURL }}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/term" element={<SearchByTermPage />} />
            <Route path="/search/topN" element={<SearchByTopNPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </globalContext.Provider>
  );
}

export default App;

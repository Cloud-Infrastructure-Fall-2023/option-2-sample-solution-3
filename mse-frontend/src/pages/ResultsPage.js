import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { createContext, useEffect } from "react";
import TopNResultsComponent from "../components/TopNResults";
import TermResultsComponent from "../components/TermResults";

export const resultsContext = createContext();

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchType = useSearchParams()[0].get("type");

  useEffect(() => {
    if (!location.state || !location.state.data) {
      navigate("/search");
    }
  }, [location, navigate]);

  return (
    <div>
      <Link
        to={"/search"}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "24px", // you can adjust this size as needed
        }}
      >
        GO Back To Search
      </Link>
      <resultsContext.Provider value={{ data: location.state.data }}>
        {searchType === "term" ? (
          <TermResultsComponent />
        ) : (
          <TopNResultsComponent />
        )}
      </resultsContext.Provider>
    </div>
  );
}

export default ResultsPage;

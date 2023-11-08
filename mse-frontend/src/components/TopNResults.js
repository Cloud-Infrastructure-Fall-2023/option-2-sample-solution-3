import { useContext } from "react";
import { resultsContext } from "../pages/ResultsPage";

function TopNResultsComponent() {
  const { data } = useContext(resultsContext);

  const dataCellStyle = {
    border: "2px solid #ccc",
    padding: "10px 20px",
    textAlign: "left",
    flex: 1, // This will ensure that cells within the same row share the available space equally
  };

  const headerCellStyle = {
    border: "2px solid #000",
    backgroundColor: "#ccc",
    padding: "10px 20px",
    textAlign: "left",
    flex: 1, // This will ensure that cells within the same row share the available space equally
  };

  return (
    <div>
      <h2>Top {data.topN} Frequent Terms</h2>
      <table
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={headerCellStyle}>Term</th>
            <th style={headerCellStyle}>Total frequencies</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((result, index) => (
            <tr key={index}>
              <td style={dataCellStyle}>{result.term}</td>
              <td style={dataCellStyle}>{result.totalFrequencies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopNResultsComponent;

import { useContext } from "react";
import { resultsContext } from "../pages/ResultsPage";

function TermResultsComponent() {
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
      <h2>You searched for the term: {data.searchTerm}</h2>
      <h2>Your search was executed in {data.executionTime} ms</h2>

      <table
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={headerCellStyle}>Doc ID</th>
            <th style={headerCellStyle}>Doc Folder</th>
            <th style={headerCellStyle}>Doc Name</th>
            <th style={headerCellStyle}>Frequencies</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((result, index) => (
            <tr key={index}>
              <td style={dataCellStyle}>{result.docID}</td>
              <td style={dataCellStyle}>{result.docFolder}</td>
              <td style={dataCellStyle}>{result.docName}</td>
              <td style={dataCellStyle}>{result.frequencies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TermResultsComponent;

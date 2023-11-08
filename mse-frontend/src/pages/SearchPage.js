import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function SearchPageComponent() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h2>
        Engine was loaded <br></br>&<br></br> Inverted indicies were constructed
        successfully!<br></br> Please Select Action
      </h2>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/search/term");
          }}
        >
          Search for Term
        </Button>
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/search/topN");
          }}
        >
          Top-N
        </Button>
      </div>
    </div>
  );
}

export default SearchPageComponent;

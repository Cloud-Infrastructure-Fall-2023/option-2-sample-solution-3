import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { globalContext } from "../App";
import { useNavigate } from "react-router-dom";

function SearchByTermPage() {
  const [term, setTerm] = useState("");
  const { baseURL } = useContext(globalContext);
  const navigate = useNavigate();

  const processInput = (event) => {
    setTerm(event.target.value);
  };

  const creatPostRequest = async () => {
    const res = await fetch(`${baseURL}/search/byterm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ term: term }),
    });
    if (!res.ok) {
      throw new Error("Search Failed");
    }
    return res.json();
  };

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: creatPostRequest,
    onSuccess: (returnedData) => {
      navigate("/results?type=term", { state: { data: returnedData } });
    },
  });

  const search = async () => {
    if (term === "") {
      alert("Please Specify a term for Searching!");
    } else {
      mutate();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers horizontally for column direction
        justifyContent: "center", // centers vertically
      }}
    >
      <h1>Enter Your Search Term</h1>
      <input
        type="text"
        placeholder="Type Your Search Here ..."
        onChange={processInput}
      ></input>
      <Button variant="primary" onClick={search}>
        Search
      </Button>
      {isLoading && <div>Searching...</div>}
      {isError && <div>{error.toString()}</div>}
    </div>
  );
}

export default SearchByTermPage;

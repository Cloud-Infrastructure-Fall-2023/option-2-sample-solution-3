import Button from "react-bootstrap/Button";
import { globalContext } from "../App";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

function SearchByTopNPage() {
  const [topN, setTopN] = useState("");
  const { baseURL } = useContext(globalContext);
  const navigate = useNavigate();

  const processInput = (event) => {
    setTopN(event.target.value);
  };

  const creatPostRequest = async () => {
    const res = await fetch(`${baseURL}/search/topn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topN: topN }),
    });
    if (!res.ok) {
      throw new Error("Search Failed");
    }
    return res.json();
  };

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: creatPostRequest,
    onSuccess: (returnedData) => {
      navigate("/results?type=topN", { state: { data: returnedData } });
    },
  });

  const search = async () => {
    if (topN === "") {
      alert("Please Specify a Number for Searching!");
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
      <h1>Enter Your N Value</h1>
      <input
        type="text"
        placeholder="Type Your N"
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

export default SearchByTopNPage;

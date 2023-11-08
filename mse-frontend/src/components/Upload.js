import React, { useContext } from "react";
import { HomePageContext } from "../pages/HomePage";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { globalContext } from "../App";
import Button from "react-bootstrap/Button";

function UploadComponent() {
  const { selectedFiles } = useContext(HomePageContext);
  const { baseURL } = useContext(globalContext);
  const navigate = useNavigate();

  const creatPostRequest = async () => {
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("file", file.file);
    });

    const res = await fetch(`${baseURL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Upload Failed");
    }
  };

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: creatPostRequest,
    onSuccess: () => {
      navigate("/search");
    },
  });

  const uploadFiles = () => {
    if (selectedFiles.length === 0) {
      alert("Please select a file before uploading!");
    } else {
      mutate();
    }
  };

  return (
    <div className="File Upload">
      {isLoading ? (
        <div>Uploading...</div>
      ) : (
        <div>
          <Button variant="success" onClick={uploadFiles}>
            Construct Inverted Indicies
          </Button>
          {isError && <div>{error.toString()}</div>}
        </div>
      )}
    </div>
  );
}

export default UploadComponent;

import { useContext, useRef } from "react";
import { HomePageContext } from "../pages/HomePage";
import Button from "react-bootstrap/Button";

function FileSelectComponent() {
  const { selectedFiles, setSelectedFiles } = useContext(HomePageContext);

  const selectFilesRef = useRef();

  const triggerSelectFiles = () => {
    selectFilesRef.current.click();
  };

  const selectFiles = (event) => {
    [...event.target.files].forEach((file) => {
      const fileWithID = {
        file: file,
        id:
          selectedFiles.length === 0
            ? 1
            : selectedFiles[selectedFiles.length - 1].id + 1,
      };
      setSelectedFiles([...selectedFiles, fileWithID]);
    });
  };

  const removeFile = (id) => {
    setSelectedFiles(
      selectedFiles.filter((file) => {
        return file.id !== id;
      })
    );
  };

  return (
    <div className="File Select">
      <input
        style={{ display: "none" }}
        type="file"
        multiple
        ref={selectFilesRef}
        onChange={selectFiles}
      />
      <Button variant="primary" onClick={triggerSelectFiles}>
        Choose Files
      </Button>
      {selectedFiles.length !== 0 && (
        <div>The Following Files Have been Selected</div>
      )}
      {selectedFiles.map((file) => {
        return (
          <div
            key={file.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>{file.file.name}</div>
            <Button
              variant="danger"
              style={{
                width: "15px",
                height: "20px",
                padding: "0",
                lineHeight: "1",
              }}
              onClick={() => removeFile(file.id)}
            >
              X
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default FileSelectComponent;

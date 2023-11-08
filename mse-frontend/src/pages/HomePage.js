import { createContext, useState } from "react";
import FileSelectComponent from "../components/FileSelect";
import UploadComponent from "../components/Upload";

export const HomePageContext = createContext();

function HomePage() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <HomePageContext.Provider value={{ selectedFiles, setSelectedFiles }}>
        <h1>Load My Engine</h1>

        <div>
          <FileSelectComponent />
          <UploadComponent />
        </div>
      </HomePageContext.Provider>
    </div>
  );
}

export default HomePage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FileExplorer } from "./components";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/list");
        const responseData = response.data;
        setData(responseData);
      } catch (error) {
        // Handle any errors
      }
    };

    fetchData();
  }, []);

  if (!data) {
    // Display a loading state while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="p-10 max-w-sm">
      <FileExplorer dir={data} />
    </div>
  );
};

export default App;

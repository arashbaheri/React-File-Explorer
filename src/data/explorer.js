import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Explorer = () => {
  const [data, setData] = useState(null); // Initial state is set to null while data is being fetched

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/list');
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

  // Render the fetched data
  return (
    <div>
      {/* Render the file/folder structure */}
      {/* Use data.map() or any other suitable logic to render the structure */}
    </div>
  );
};

export default Explorer;

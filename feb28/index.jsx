import React, { useState, useEffect } from 'react';

const API_URL = 'https://smt.trifrnd.in/machineuses.php'; // replace with your API URL

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.machine_id}>{item.use_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

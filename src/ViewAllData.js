import React, { useEffect, useState } from 'react';
import Headers from './Header';

const ViewAllData = () => {
  const [satData, setSatData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('http://localhost:8081/api/sat-scores/view-all');
        const data = await response.json();
        setSatData(data);
        setLoading(false);
      }
catch (error) {
        console.error('Error fetching SAT data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (<div>
    <Headers> </Headers>
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">SAT Result Data</h2>
      {loading && <p>Loading...</p>}
      {satData && (
        <pre className="bg-gray-200 p-4 rounded-md">
          {JSON.stringify(satData, null, 2)}
        </pre>
)}
      {!loading && !satData && <p>No data available.</p>}
    </div></div>
  );
};

export default ViewAllData;

import React, { useState } from 'react';

const Update= () => {
  const [name, setName] = useState('');
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: '',
  });
const checkNameAvailability = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/sat-scores/check-name/${name}`);
      if (response.ok) {
        const data = await response.json();
        setIsNameAvailable(data.available);
        console.log(data.available);
if (data.available) {
          const userDataResponse = await fetch(`http://localhost:8081/api/sat-scores/get-user-data/${name}`);
          const userData = await userDataResponse.json();
          setFormData(userData);
        }
      }
else {
        console.error('Error checking name availability:', response.statusText);
        setIsNameAvailable(false); // Assuming the name is not available if the request fails
      }}

catch (error) {
      console.error('Error checking name availability:', error);
      setIsNameAvailable(false); 
    }
  };
const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameAvailable(false);
    setFormData({
      address: '',
      city: '',
      country: '',
      pincode: '',
      satScore: '',
    });
  };
const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8081/api/sat-scores/update-sat-score/${name}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data updated successfully');
      }
else {
        console.error('Error updating data:', response.statusText);
      }
    }

catch (error) {
      console.error('Error updating data:', error);
    }
  };
return (
    <div className="container mx-auto mt-8">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter name"
            value={name}
onChange={handleNameChange}
            required
          />
          <button
            type="button"
            onClick={checkNameAvailability}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
Check Name Availability
          </button>
          {isNameAvailable && <span className="text-green-500">✅ Name available</span>}
        </div>
      <form onSubmit={handleEditFormSubmit} className="max-w-md mx-auto">
        

{isNameAvailable && (
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
              <input
                type="text"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
<div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter city"
value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
<div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Country:</label>
              <input
                type="text"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
<div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Pincode:</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter pincode"
                value={formData.pincode}
onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>

<div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">SAT Score:</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter SAT score"
value={formData.satScore}
                onChange={(e) => setFormData({ ...formData, satScore: e.target.value })}
              />
            </div>
<div className="mb-6">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
Save Changes
              </button>
            </div>
          </div>
        )}
</form>
    </div>
  );
};

export default Update;

import React, { useState } from 'react';
import Headers from './Header';
const InsertData = ()=>{

    
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        country: '',
        pinCode: '',
        satScore: '',
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
         
          const response = await fetch('http://localhost:8081/api/sat-scores/insert', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
const data = await response.json();
          console.log('Data submitted successfully:', data);
        } catch (error) {
          console.error('Error submitting data:', error);
        }
      };

      return(
        <> <Headers/>
                <div className="container mx-auto mt-8">
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                      </label>

      <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              /> 
              </div>
              <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Address"
                required
              />
              
            </div>
<div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
               City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your city"
                required
              />
              
            </div>
<div className="mb-4">
              <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
              Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your country"
                required
              />
              
            </div>
<div className="mb-4">
              <label htmlFor="pinCode" className="block text-gray-700 text-sm font-bold mb-2">
              Pincode
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your pincode"
                required
              />
              
            </div>
<div className="mb-4">
              <label htmlFor="satscore" className="block text-gray-700 text-sm font-bold mb-2">
              Sat Score
              </label>
              <input
                type="text"
                id="satScore"
                name="satScore"
                value={formData.satScore}
                onChange={handleChange}
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your sat score"
                required
              />
              
            </div>
<div className="mb-6">
              <button
              onClick={handleSubmit}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
</div>
          </form>
        </div>
        </>
   
    
);


}


export default InsertData;
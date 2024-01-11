import React, { useEffect, useState } from 'react';
import BugCard from './BugCard'; // Assuming you have a BugCard component
import axios from 'axios';

const BugInspection = ({authToken}) => {
  const [bugs, setBugs] = useState([]);
  let requestSent = false;
  /*
  useEffect(() => {
    fetch('/api/inspectBugs') // Adjust the API endpoint based on your Spring code
      .then(res => res.json())
      .then(data => setBugs(data.bugs));
  }, []);
  */
  if(requestSent === false){
	const concatenatedToken = `Bearer ${authToken}`;
	
	const handleGetBugs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bugs/printBugs', {
    headers: {
       Authorization: "Bearer " + authToken
    }
	},);
      
	  if(response.status){
		  setBugs(response.data);
	  }
	  if(!response.status){ 
	  console.log(response);
	  }
      
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
	requestSent = true;
  };
  handleGetBugs();
	}
	
  return (
    <div className='bugCardContainer'>
      {/* Loop through every bug and create a BugCard */}
      {bugs.map(currentBug => (
        <BugCard key={currentBug.id} bug={currentBug} />
      ))}
    </div>
  );
};

export default BugInspection;

import React, { useEffect, useState } from 'react';
import BugCard from './BugCard'; // Assuming you have a BugCard component

const BugInspection = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch('/api/inspectBugs') // Adjust the API endpoint based on your Spring code
      .then(res => res.json())
      .then(data => setBugs(data.bugs));
  }, []);

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

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import "./BugCard.css"


const BugCard = ({ bug, onBugUpdate }) => {
  const navigate = useNavigate();

  return (
    <div className='bugCard'>
      <div className='bugCardHeader'>
        <h3>{bug.title}</h3>
        <div>
          <FontAwesomeIcon
            icon={faTimes}
            color='red'
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          />
          <FontAwesomeIcon
            icon={faCog}
            color='green'
            style={{ cursor: 'pointer', marginLeft: '10px' }}
            onClick={(event) => {
              navigate('/editBug', { state: { bugToUpdate: bug, updateBugFunction: onBugUpdate } });
            }}
          />
        </div>
      </div>
      <p>Description: {bug.description}</p>
      <p>Version: {bug.version}</p>
      {/* Add more bug details as needed */}
    </div>
  );
};

export default BugCard;

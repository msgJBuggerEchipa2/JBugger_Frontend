import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import './BugForm.css';

const BugForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [version, setVersion] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [severity, setSeverity] = useState('');
  const [status, setStatus] = useState('OPEN');
  const [fixedVersion, setFixedVersion] = useState('');

  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidDescription, setIsValidDescription] = useState(true);
  const [isValidVersion, setIsValidVersion] = useState(true);
  const [isValidTargetDate, setIsValidTargetDate] = useState(true);
  const [isValidSeverity, setIsValidSeverity] = useState(true);
  const [isValidFixedVersion, setIsValidFixedVersion] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      title,
      description,
      version,
      targetDate,
      severity,
      status,
      fixedVersion,
    });
  };

  return (
    <div className="bug-form-container">
      <form className='bug-form' onSubmit={handleSubmit}>
        <div className='form-component'>
          <label>
            Bug Title
          </label>
          <input
            type='text'
            placeholder='Bug title'
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setIsValidTitle(true);
            }}
          />
          {!isValidTitle && <p style={{ color: 'red' }}>Invalid title</p>}
        </div>
        <div className='form-component'>
          <label>
            Bug Description
          </label>
          <textarea
            placeholder='Bug description'
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
              setIsValidDescription(true);
            }}
          />
          {!isValidDescription && <p style={{ color: 'red' }}>Invalid description</p>}
        </div>
        <div className='form-component'>
          <label>
            Bug Version
          </label>
          <input
            type='text'
            placeholder='Bug version'
            value={version}
            onChange={(event) => {
              setVersion(event.target.value);
              setIsValidVersion(true);
            }}
          />
          {!isValidVersion && <p style={{ color: 'red' }}>Invalid version</p>}
        </div>
        <div className='form-component'>
          <label>
            Target Date
          </label>
          <input
            type='date'
            value={targetDate}
            onChange={(event) => {
              setTargetDate(event.target.value);
              setIsValidTargetDate(true);
            }}
          />
          {!isValidTargetDate && <p style={{ color: 'red' }}>Invalid target date</p>}
        </div>
        <div className='form-component'>
          <label>
            Bug Severity
          </label>
          <input
            type='text'
            placeholder='Bug severity'
            value={severity}
            onChange={(event) => {
              setSeverity(event.target.value);
              setIsValidSeverity(true);
            }}
          />
          {!isValidSeverity && <p style={{ color: 'red' }}>Invalid severity</p>}
        </div>
        <div className='form-component'>
          <label>
            Fixed Version
          </label>
          <input
            type='text'
            placeholder='Fixed version'
            value={fixedVersion}
            onChange={(event) => {
              setFixedVersion(event.target.value);
              setIsValidFixedVersion(true);
            }}
          />
          {!isValidFixedVersion && <p style={{ color: 'red' }}>Invalid fixed version</p>}
        </div>
        <div className='form-component'>
          <label>
            Bug Status
          </label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value='OPEN'>Open</option>
            <option value='IN_PROGRESS'>In Progress</option>
            <option value='FIXED'>Fixed</option>
            <option value='CLOSED'>Closed</option>
            <option value='REJECTED'>Rejected</option>
            <option value='INFO_NEEDED'>Info Needed</option>
          </select>
        </div>

        <input className='form-component btn btn-block' type='submit' value='Create bug' />
      </form>
    </div>
  );
};

export default BugForm;

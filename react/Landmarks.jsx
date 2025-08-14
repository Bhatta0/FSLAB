import React, { useState } from 'react';
import './Landmarks.css';

const Landmarks = () => {
  const [landmarks] = useState([
    { id: 1, name: 'Rama Mandir', location: 'Ayodhya', country: 'India' },
    { id: 2, name: 'Jatayu', location: 'Varkala', country: 'India' },
    { id: 3, name: 'Vidhan Saudha', location: 'Bengaluru', country: 'India' },
  ]);

  return (
    <div>
      <h1>Famous Landmarks</h1>
      <table>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Country</th>
          </tr>
          {landmarks.map((l) => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.location}</td>
              <td>{l.country}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Landmarks;
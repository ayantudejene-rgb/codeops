import React from 'react';
import { Link } from 'react-router-dom';

const SymptomCard = ({ id, title, icon, color }) => {
  return (
    <Link to={`/symptom/${id}`} className="symptom-card" style={{ '--card-color': color }}>
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <span className="tag" style={{ background: color }}>Learn more →</span>
    </Link>
  );
};

export default SymptomCard;
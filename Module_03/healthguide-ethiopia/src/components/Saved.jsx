import React from 'react';
import { Link } from 'react-router-dom';
import { symptomsData } from '../data/symptoms';

const Saved = ({ savedIds }) => {
  const savedItems = symptomsData.filter(s => savedIds.includes(s.id));

  return (
    <div className="container">
      <h2 style={{ fontSize: '2rem', marginTop: 20 }}>❤️ My Saved Health Tips</h2>
      {savedItems.length === 0 ? (
        <div className="empty-state">
          <div className="big-icon">📖</div>
          <h3>No saved tips yet</h3>
          <p>Go to any symptom guide and click the heart icon to save it here.</p>
        </div>
      ) : (
        <div className="saved-grid">
          {savedItems.map(s => (
            <Link to={`/symptom/${s.id}`} className="saved-item" key={s.id}>
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
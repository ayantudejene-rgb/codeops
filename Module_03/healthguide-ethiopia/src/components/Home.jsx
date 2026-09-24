import React, { useState } from 'react';
import { symptomsData } from '../data/symptoms';
import SymptomCard from './SymptomCard';

const Home = () => {
  const [search, setSearch] = useState('');

  const filtered = symptomsData.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="hero">
        <h1>🩺 What kind of help are you looking for?</h1>
        <p>Choose your symptom to get general guidance and next steps.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search symptoms (e.g., fever)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: 40, fontSize: '1.2rem', color: '#64748b' }}>
          No matching symptoms found. Try a different keyword.
        </p>
      ) : (
        <div className="symptom-grid">
          {filtered.map(s => (
            <SymptomCard key={s.id} {...s} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
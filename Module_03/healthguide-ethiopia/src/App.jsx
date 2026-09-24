import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';
import Saved from './components/Saved';
import './App.css';

function App() {
  const [savedIds, setSavedIds] = useState(() => {
    const stored = localStorage.getItem('healthguide_saved');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('healthguide_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSaved = (id) => {
    setSavedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <Navbar savedCount={savedIds.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptom/:id" element={<Detail savedIds={savedIds} toggleSaved={toggleSaved} />} />
        <Route path="/saved" element={<Saved savedIds={savedIds} />} />
      </Routes>
      <div style={{ textAlign: 'center', padding: '30px 20px 20px', fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #e2e8f0', marginTop: 20 }}>
        ⚕️ <strong>Medical Disclaimer:</strong> This app provides general educational information only. 
        It does not replace professional medical advice, diagnosis, or treatment. 
        If you are experiencing a medical emergency, please call 911 or visit the nearest health facility immediately.
      </div>
    </BrowserRouter>
  );
}

export default App;
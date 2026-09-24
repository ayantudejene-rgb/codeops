import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { symptomsData } from '../data/symptoms';

const Detail = ({ savedIds, toggleSaved }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const symptom = symptomsData.find(s => s.id === parseInt(id));

  const [location, setLocation] = useState(null);
  const [nearby, setNearby] = useState([]);
  const [loadingNearby, setLoadingNearby] = useState(false);

  const isSaved = savedIds.includes(symptom?.id);

  useEffect(() => {
    if (!symptom) navigate('/');
  }, [symptom, navigate]);

  if (!symptom) return null;

  const fetchNearby = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setLoadingNearby(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ lat: latitude, lng: longitude });

        const radius = 5000; // 5km
        const query = `[out:json];(node["amenity"="hospital"](around:${radius},${latitude},${longitude});node["amenity"="clinic"](around:${radius},${latitude},${longitude});node["amenity"="pharmacy"](around:${radius},${latitude},${longitude}););out;`;
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

        try {
          const res = await fetch(url);
          const data = await res.json();
          const places = data.elements.map(el => ({
            name: el.tags.name || 'Unnamed facility',
            type: el.tags.amenity || 'health center',
            lat: el.lat,
            lon: el.lon
          }));
          setNearby(places.slice(0, 12));
        } catch (err) {
          alert('Could not fetch nearby places. Please try again.');
        } finally {
          setLoadingNearby(false);
        }
      },
      () => {
        alert('Please allow location access to find nearby health centers.');
        setLoadingNearby(false);
      }
    );
  };

  return (
    <div className="detail-container">
      <Link to="/" className="back-btn">← Back to all</Link>

      <div className="detail-card">
        <div className="header">
          <span className="icon">{symptom.icon}</span>
          <h2>{symptom.title}</h2>
          <button className="bookmark-btn" onClick={() => toggleSaved(symptom.id)}>
            {isSaved ? '❤️' : '🤍'}
          </button>
        </div>

        <div className="section-title">📋 Possible General Causes</div>
        <ul className="causes-list">
          {symptom.causes.map((c, i) => <li key={i}>{c}</li>)}
        </ul>

        <div className="section-title">✅ What You Can Do</div>
        <ul className="actions-list">
          {symptom.actions.map((a, i) => <li key={i}>{a}</li>)}
        </ul>

        {symptom.warning && (
          <div className="warning-box">
            <span className="warn-icon">⚠️</span>
            <div className="warn-text">
              <strong>Seek urgent medical attention if...</strong>
              {symptom.warning}
            </div>
          </div>
        )}

        {symptom.isEmergency && (
          <>
            <button className="emergency-btn" onClick={fetchNearby}>
              🏥 Find Hospitals & Pharmacies Nearby
            </button>
            {loadingNearby && <p style={{ marginTop: 16 }}>📍 Fetching your location...</p>}
            {nearby.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: 12 }}>
                  🏨 Nearby Health Centers (within 5km)
                </h4>
                <div className="nearby-grid">
                  {nearby.map((p, i) => (
                    <div className="nearby-card" key={i}>
                      <div className="place-type">{p.type}</div>
                      <div className="place-name">{p.name}</div>
                      <div className="place-dist">📍 {p.lat.toFixed(4)}, {p.lon.toFixed(4)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
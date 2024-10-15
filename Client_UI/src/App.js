import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const App = () => {
    const [genders, setGenders] = useState([]);
    const [selectedGender, setSelectedGender] = useState('Male');
    const [selectedAgeRange, setSelectedAgeRange] = useState('10-30');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [counts, setCounts] = useState({});

    const API_URL = 'http://localhost:8000/api'; // Replace with your actual API URL

    const fetchGenders = async () => {
        try {
            const response = await axios.get(`${API_URL}/genders/`);
            setGenders(response.data);
        } catch (err) {
            console.error('Error fetching gender list', err);
        }
    };

    const fetchGenderCounts = async () => {
        try {
            const promises = genders.map(async (gender) => {
                const response = await axios.get(`${API_URL}/countByGender/${gender}/`); // Updated URL
                return { gender, count: response.data.count };
            });
            const results = await Promise.all(promises);
            const countsObj = {};
            results.forEach((item) => {
                countsObj[item.gender] = item.count;
            });
            setCounts(countsObj);
        } catch (err) {
            console.error('Error fetching gender counts', err);
        }
    };

    const fetchClients = async () => {
        const [lowAge, highAge] = selectedAgeRange.split('-').map(Number);
        const url = `${API_URL}/clientsByAge/${lowAge}/${highAge}/${selectedGender}/`;
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            console.log('Fetched clients:', response.data); // Check the response data structure
            setData(response.data);
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Error fetching clients');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGenders();
    }, []);

    useEffect(() => {
        if (genders.length > 0) {
            fetchGenderCounts();
        }
    }, [genders]);

    useEffect(() => {
        fetchClients();
    }, [selectedGender, selectedAgeRange]);

    const handleGenderChange = (gender) => {
        setSelectedGender(gender);
        setSelectedAgeRange('10-30');
    };

    const handleAgeRangeChange = (ageRange) => {
        setSelectedAgeRange(ageRange);
    };

    return (
        <div className="container">
            <div className="sidebar">
                {genders.map((gender) => (
                    <div key={gender}>
                        <h2 onClick={() => handleGenderChange(gender)}>
                            {gender} ({counts[gender] || 0})
                        </h2>
                        {['10-30', '30-60', '60-90'].map((ageRange) => (
                            <button
                                key={ageRange}
                                className="age-btn"
                                onClick={() => handleAgeRangeChange(ageRange)}
                            >
                                {ageRange}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="data-display">
                <h3>Clients with age {selectedAgeRange}</h3>  {/* Display selected age range here */}
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone#</th>
                            <th>SSN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.pty_firstname} {item.pty_lastname}</td>  {/* Use correct field names */}
                                    <td>{item.pty_phone}</td>                         {/* Use correct field name */}
                                    <td>{item.pty_ssn}</td>                           {/* Use correct field name */}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;

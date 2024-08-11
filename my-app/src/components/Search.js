import React, { useState } from 'react';
import mockData from '../mockData';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      fetchResults(value);
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  const concatenateFields = (item) => {
    return `${item.title} ${item.description} ${item.goal} ${item.raised} ${item.backers} ${item.summary} ${item.type}`;
  };

  const fetchResults = (query) => {
    // Simulate fetching data
    const sampleData = mockData;

    const filteredResults = sampleData.filter(item =>
      concatenateFields(item).toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    setShowDropdown(true);
  };

  const handleResultClick = (result) => {
    setQuery(result.title); // Set the query to the title of the selected result
    setResults([]);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', width: '600px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        style={{ width: '100%', padding: '15px', fontSize: '16px', borderRadius: 35 }}
        placeholder="Search..."
      />

      {showDropdown && results.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #ccc',
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          zIndex: 1000
        }}>
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(result)}
              style={{
                padding: '8px',
                cursor: 'pointer'
              }}
            >
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
import React, { useState } from 'react';

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

  const fetchResults = (query) => {
    // Simulate fetching data
    const sampleData = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
      'Honeydew',
    ];

    const filteredResults = sampleData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    setShowDropdown(true);
  };

  const handleResultClick = (result) => {
    setQuery(result);
    setResults([]);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        style={{ width: '100%', padding: '8px' }}
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
          maxHeight: '150px',
          overflowY: 'auto',
          zIndex: 1000,
        }}>
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() => handleResultClick(result)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: '1px solid #ccc',
              }}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
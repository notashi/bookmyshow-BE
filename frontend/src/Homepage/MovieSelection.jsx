import React, { useState } from 'react';
import "./All.css";


const MovieTimeSelection = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    props.moviedata(movie)
  };

  const movieOptions = [
    { id: 1, name: 'fast and furious 5' },
    { id: 2, name: 'Inception' },
    { id: 3, name: 'Dilwale Dulhania Le Jayenge' },
    { id: 4, name: 'chennai express' },
  ];

  

  return (
    <span className='mc'>
      <span className='bc'>
        <h2>Select Movie:</h2>
        <span style={{ display: 'flex', gap: 10 }}>
          {movieOptions.map((option) => (
            <button
              key={option.id}
              style={{
                padding: '10px 20px',
                borderRadius: 10,
                backgroundColor:
                  selectedMovie === option.name ? 'red' : 'lightgray',
                color: selectedMovie === option.name ? 'white' : 'black',
                border: 'none',
                outline: 'none',
              }}
              onClick={() => handleClick(option.name)}
            >
              {option.name}
            </button>
          ))}
        </span>
      </span>
    </span>
  );
};

export default MovieTimeSelection;

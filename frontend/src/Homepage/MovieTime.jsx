import React, { useState} from 'react';

const MovieTime = (props) => {
  const [selectedTime, setSelectedTime] = useState(null);
 

  const handleClick = (time) => {
    setSelectedTime(time);
    props.timeData(time)
    props.setMovieTime(true)

  };


 
  const timeOptions = [
    { id: 1, time: '10:00 AM' },
    { id: 2, time: '2:00 PM' },
    { id: 3, time: '6:00 PM' },
    { id: 4, time: '10:00 PM' },
  ];

  return (
<span className='tmkc'>
  <span className='tmkb aliceblue'>
    <h2>Select Movie Time:</h2>
    <div className='d-flex flex-wrap gap-5 '>
      {timeOptions.map((option) => (
        <button
          key={option.id}
          className={`btn ${selectedTime === option.time && props.movieTime ? 'btn-danger' : 'btn-light'}`}
          style={{ borderRadius: 10,width:150, height:50}}
          onClick={() => handleClick(option.time)}
        >
          <div className='fs-4'>{option.time}</div>
        </button>
      ))}
    </div>
  </span>
</span>




  )
};

export default MovieTime;

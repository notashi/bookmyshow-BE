import React from 'react'


function BookingDetails({lastBookingDetails,clearData}) {
  const {movie,time,seats}=lastBookingDetails
  const red=()=>{
    clearData()
  }



return (
  <span className='l'>
      <span className='c'>
        
         {seats && seats.length ? (
          <p>
          <h3>{`Movie: ${movie}`}</h3>
         <h3>{`Time: ${time}`}</h3>
         <h3>Seats</h3>
          </p> 
         ):(<></>)}
         
         {/* this is for checking if the seats are empty or not or undefined  */}
         {seats && seats.length ? (
          
          seats.map((elem,i)=>{
            return  (
              <>
              <h3 key={i}>{`${elem.seatType} : ${elem.seatNo}`}</h3>
              </>
            )
          })
         ):(
           <h3>No Last Record found</h3>
         )}

       <button className='clear-btn' onClick={red}>clear</button>
       </span>
  </span>
)
}



export default BookingDetails // working code 
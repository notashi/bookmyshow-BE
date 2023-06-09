import React from 'react'


function BookingDetails({lastBookingDetails,clearData}) {
  const {movie,time,seats}=lastBookingDetails
  const red=()=>{
    clearData()
  }



return (
  // <div className='l'>
  //     <span className='c'>
        
  //        {seats && seats.length ? (
  //         <span>
  //         <h3>{`Movie: ${movie}`}</h3>
  //        <h3>{`Time: ${time}`}</h3>
  //        <h3>Seats</h3>
  //         </span> 
  //        ):(<></>)}
         
  //        {/* this is for checking if the seats are empty or not or undefined  */}
  //        {seats && seats.length ? (
          
  //         seats.map((elem,i)=>{
  //           return  (
  //             <>
  //             <h3 key={i+1}>{`${elem.seatType} : ${elem.seatNo}`}</h3>
  //             </>
  //           )
  //         })
  //        ):(
  //          <h3>No Last Record found</h3>
  //        )}

  //      <button className='clear-btn' onClick={red}>clear</button>
  //      </span>
  // </div>

  <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8">
      <div className="card">
        <div className="card-body">
          {seats && seats.length ? (
            <div>
              <h2 className='fw-bold'> Last Booking Details</h2>
              <h3>{`Movie: ${movie}`}</h3>
              <h3>{`Time: ${time}`}</h3>
              <h3>Seats</h3>
            </div>
          ) : (
            <h3>No Last Record found</h3>
          )}
          {/* this is for checking if the seats are empty or not or undefined  */}
          {seats && seats.length ? (
            seats.map((elem, i) => {
              return (
                <h3 key={i + 1}>{`${elem.seatType} : ${elem.seatNo}`}</h3>
              );
            })
          ) : (
            <></>
          )}
          <button className="btn btn-danger mt-3" onClick={red}>
            Clear
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

)
}



export default BookingDetails // working code 
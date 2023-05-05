import { React, useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Homepage/Navbar';
import MovieTime from './Homepage/MovieTime';
import MovieSelection from './Homepage/MovieSelection';
import MovieSeats from './Homepage/MovieSeats';
import BookingDetails from './Homepage/BookingDetails'
import axios from "axios"
const URL = 'http://localhost:5000/v1/api/'


function App() {

  const [lastBookingDetails, setLastBookingDetails] = useState([]);

  const [body, setBody] = useState({
    movie: "",
    time: "",
    seats: 1
  });
  const moviedata = (movieName) => {
    setBody({
      ...body, movie: movieName
    })

  }

  const timeData = (movieTime) => {
    setBody({
      ...body, time: movieTime
    })
  }
  ///do this////////////////////////here
  const createData = async (e) => {
    console.log(body)
    e.preventDefault()
    try {
      await axios.post(`${URL}/selectmovie`, body)

    } catch (error) {
      console.log(error)
    }

  }

  //getLastBookingDetails
  const lastBooking = async () => {

    try {
      let response = await axios.get(`${URL}/getdata`)
      console.log(response.data)
      setLastBookingDetails(response.data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    lastBooking()
  }, [])


  // useEffect(() => {
  //   lastBooking
  // },)

  return (
    <>
      <Navbar />
      <MovieSelection moviedata={moviedata} />
      <BookingDetails lastBookingDetails={lastBookingDetails} />
      <MovieTime timeData={timeData} />
      <MovieSeats />
      <span className="button">
        {/* insert onsubmit below */}
        <form onSubmit={createData}>
          <button type="submit" class="btn btn-outline-success">Book now</button>
        </form>
      </span>
    </>
  );
}

export default App;

import { React, useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Homepage/Navbar';
import MovieTime from './Homepage/MovieTime';
import MovieSelection from './Homepage/MovieSelection';
import MovieSeats from './Homepage/MovieSeats';
import BookingDetails from './Homepage/BookingDetails'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = 'http://localhost:5000/v1/api/'


function App() {

  const [lastBookingDetails, setLastBookingDetails] = useState([]);
  const [bools, setBools] = useState(false)

  const [body, setBody] = useState({
    movie: "",
    time: "",
    seats: []
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

  const seatData = (seat) => {
    console.log(seat)
    //if A1 or any seatType is already present in the body.seats it will give zero in return or else -1 will returned
    const seatIndex = body.seats.findIndex((elem) => elem.seatType === seat.seatType);

    if (seatIndex !== -1) {
      console.log(seatIndex)
      const newSeatData = [...body.seats];
      // {seatType: 'A2', seatNo: 2}this type of value inside seat
      newSeatData[seatIndex] = seat;
      // value inside newSeatData looks like this kinda
      // [
      //   { seatType: 'A2', seatNo: 2 },
      //   { seatType: 'A1', seatNo: 1 },
      //   { seatType: 'A5', seatNo: 4 },
      //   '-1': { seatType: 'A3', seatNo: 12 }
      // ]
      console.log("triggerCheck", newSeatData)

      //now putting the updated seat data with the other movie data inside body state.
      setBody({
        ...body,
        seats: newSeatData,
      })

    }

    //if there is no two similar seatType then add the seats to previous selected seats and then add the seat array to the movieData
    else {
      setBody({
        ...body,
        seats: [...body.seats, seat],
      });
    }
  }




  const createData = async (e) => {
    console.log(body)
    e.preventDefault()
    if (!body.movie) {
      toast.error("Please select a movie.", { autoClose: 1000 });
      return;
    }

    if (!body.time) {
      toast.error("Please select a movie time.", { autoClose: 1000 });
      return;
    }
    if (!(body.seats.length > 0)) {
      toast.error("Please select a movie seats.", { autoClose: 1000 });
      return;
    }
    try {
      await axios.post(`${URL}/selectmovie`, body)
      toast.success(successToast());
      setBody({
        movie: "",
        time: "",
        seats: []
      })
    } catch (error) {
      console.log(error)
    }
    finally {
      lastBooking()


    }
    setBody({
      movie: "",
      time: "",
      seats: []
    })
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
    finally {
      setBools(true)
    }


  }


  const clearData = async () => {
    await axios.delete(`${URL}/delete`)
    lastBooking()
    console.log("allDataisDeleted")
  }

  useEffect(() => {

    lastBooking()
  }, [bools])

  const successToast = () => {
    toast("Ticket booked", {
      className: "custom-toast",
      draggable: false,
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000

    })
  }

  return (
    <div id="bgBC">
      <Navbar />
      <MovieSelection moviedata={moviedata} />
      <BookingDetails lastBookingDetails={lastBookingDetails} clearData={clearData} />
      <MovieTime timeData={timeData} />
      <MovieSeats seatData={seatData} />
      <ToastContainer />
      <span className="button">
        {/* {console.log(body)} */}
        {/* insert onsubmit below */}
        <form onSubmit={createData}>
          <button type="submit" className="btn btn-outline-success">Book now</button>
        </form>
      </span>
    </div>
  );
}

export default App;

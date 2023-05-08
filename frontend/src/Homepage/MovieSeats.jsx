import {React} from 'react'



function MovieSeats({seatData}) {

  const noOfSeats=['A1','A2','A3','A4','D1','D2']


   const onChange=(event,elem)=>{
        const seats=({
            seatType:elem,
            seatNo:Number(event.target.value)
         })
         seatData(seats)
      
   }
 
   return (
      <span className='d-flex justify-content-center seats'>

      <h3>seats</h3>
      {noOfSeats.map((elem,i)=>{

         return (
            <div className='d-flex flex-column' key={i+2}>
            <label htmlFor="inputField" key={i+1} className=" m-3">{elem} </label>
            <input type="Number" id="inputField" min="0" max="10" key={i} onChange={(e)=>onChange(e,elem)}/>
            </div>
            ) 
      })}
 </span>
  )
}

export default MovieSeats

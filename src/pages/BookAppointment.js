import salman from '../pages/salman khan.jpeg'
import { useEffect ,useState} from 'react';

function BookAppointment() {
    const queryParams = new URLSearchParams(window.location.search);
    const doctorId = queryParams.get('doctor_id'); // Extracts the doctor_id

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [availableDates, setAvailableDates] = useState([])
  const [doctor,setdoctor]=useState({});
  
   const getUpcomingDates = (workingDays) => {
        const today = new Date();
        const next14Days = [];

        for (let i = 0; i < 14; i++) { // Check next 14 days
            const futureDate = new Date();
            futureDate.setDate(today.getDate() + i);
            const dayName = futureDate.toLocaleDateString('en-US', { weekday: 'long' });

            if (workingDays.includes(dayName)) {
                next14Days.push(futureDate.toISOString().split("T")[0]); // Format: YYYY-MM-DD
            }
        }

        return next14Days;
    };

  useEffect(()=>{
      const fetchdata=async()=>{
        try{
            console.log("doctor id ",doctorId);
            const data=fetch(`http://localhost:8000/doctors/${doctorId}`,{
            "Method":"GET",
            "Content-Type":"application/json"
          }).then((res)=>res.json())
          .then((result)=>{
            console.log("result is ",result.Doctor.Description);
            setdoctor(result.Doctor);
             if (result.Doctor.Workingdays) {
                    setAvailableDates(getUpcomingDates(result.Doctor.Workingdays));
                }
          })
          .catch((error)=>{
            console.log("error is ",error);
          })
        }catch(error){
            console.log("error in catch ",error);
        }
      }
      fetchdata();
  },[doctorId])


  const handleCreateAppointment=()=>{
      try{
         const data=fetch(`http://localhost:8000/appointment`,{
        "method":"POST",
        headers:{
           "Content-Type":"application/json"
        }
        ,
        body:JSON.stringify({
                time: time,  // Ensure the format is correct (HH:MM AM/PM)
                date: new Date(date),  // Convert to Date object
                appointment_duration: Number(duration),  // Ensure it's a number
                doctor_id: doctor._id,
                user_id: "ASHISH",
                appointment_status: "Scheduled",  // Optional (default is already 'Scheduled')
                appointment_conclusion: ""  
        })

       }).then((res)=>res.json())
       .then((result)=>{
        console.log("result ",result)
       })
       .catch((error)=>{
        console.log("error is ",error);
       })
      }catch(error){
            console.log("error in catch ",error);
      }
  }

    return (
   <div style={{
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#f4f7fc',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            {doctor ? (
                <div style={{
                    width: '480px',
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '14px',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                }}>
                    {/* Doctor Image */}
                    <img
                        src={salman}
                        alt={doctor.DoctorName}
                        style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            marginBottom: '15px',
                            border: '4px solid #007bff',
                            objectFit: 'cover'
                        }}
                    />

                    {/* Doctor Info */}
                    <h2 style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '5px'
                    }}>{doctor.DoctorName}</h2>
                    <p style={{
                        fontSize: '14px',
                        color: '#666',
                        marginBottom: '15px'
                    }}>{doctor.Description}</p>

                    {/* Details Section */}
                    <div style={{
                        textAlign: 'left',
                        fontSize: '14px',
                        color: '#444',
                        backgroundColor: '#f9fafc',
                        padding: '15px',
                        borderRadius: '10px',
                        marginBottom: '20px'
                    }}>
                        <p><strong>Sex:</strong> {doctor.Sex}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${doctor.DoctorEmail}`} style={{ color: '#007bff', textDecoration: 'none' }}>{doctor.DoctorEmail}</a></p>
                        <p><strong>Phone:</strong> {doctor.phone || "N/A"}</p>
                        <p><strong>Working Days:</strong> {doctor.Workingdays?.length > 0 ? doctor.Workingdays.join(', ') : "Not Available"}</p>
                    </div>

                    {/* Form Section */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '10px'
                    }}>
                        {/* Time Selection */}
                        <label style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Time:</label>
                        <select value={time} onChange={(e) => setTime(e.target.value)}
                            style={{
                                display: 'block', margin: '8px auto', padding: '10px',
                                width: '100%', borderRadius: '6px', border: '1px solid #ccc'
                            }}>
                            <option value="">Select Time</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                        </select>

                        {/* Date Selection */}
                        <label style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Date:</label>
                        <select value={date} onChange={(e) => setDate(e.target.value)}
                            style={{
                                display: 'block', margin: '8px auto', padding: '10px',
                                width: '100%', borderRadius: '6px', border: '1px solid #ccc'
                            }}>
                            <option value="">Select Date</option>
                            {availableDates.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>

                        {/* Duration Selection */}
                        <label style={{ fontWeight: 'bold', fontSize: '14px', color: '#333' }}>Duration:</label>
                        <select value={duration} onChange={(e) => setDuration(e.target.value)}
                            style={{
                                display: 'block', margin: '8px auto', padding: '10px',
                                width: '100%', borderRadius: '6px', border: '1px solid #ccc'
                            }}>
                            <option value="">Select Duration</option>
                            <option value="30 minutes">30 Minutes</option>
                            <option value="45 minutes">45 Minutes</option>
                            <option value="60 minutes">60 Minutes</option>
                        </select>
                    </div>

                    {/* Appointment Button */}
                    <button 
                    onClick={handleCreateAppointment} 
                    style={{
                        marginTop: '20px',
                        padding: '12px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s',
                        width: '100%',
                        letterSpacing: '0.5px'
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
                        Create Appointment
                    </button>
                </div>
            ) : (
                <p style={{ fontSize: '18px', color: '#555' }}>Loading...</p>
            )}
        </div>
    );
}

export default BookAppointment;

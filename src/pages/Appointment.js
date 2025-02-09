import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import salman from "./salman khan.jpeg"
function Appointment() {
    const [doctors, setdoctors] = useState([]);
  const navigate=useNavigate();
 
    
    useEffect(() => {
        const fetchdata=async(req,res)=>{
         try{
         const data=await fetch(`http://localhost:8000/doctors/doctordetails`,{
          "method":"get",
          "Content-Type":"application/json"
      }).then((res)=>res.json())
      .then((result)=>{
        
        

        console.log("result is ",result)
        console.log("a ",result.doctors)
        console.log("b ",result.doctors[0].DoctorName);
        setdoctors(result.doctors)

      }).catch((error)=>{
        console.log("error is ",error)
      })
      

      

     }catch(error){
        console.log("error in catch ",error)
     }

    };
    fetchdata();

    }, [])

    const BookAppointment=(doctor_id)=>{
         navigate(`/book-appointment?doctor_id=${doctor_id}`)
    }


    
  return (
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Available Doctors</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', justifyContent: 'center' }}>
                    {doctors.length > 0 ? (
                        doctors.map((doctor, index) => (
                            <div key={index} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                                <img
                                    src={salman}
                                    alt={doctor.DoctorName}
                                    style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '2px solid #ddd' }}
                                />
                                <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#222' }}>{doctor.DoctorName}</h2>
                                <p style={{ fontSize: '14px', color: '#555', margin: '5px 0' }}>{doctor.Description}</p>
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>Sex: <span style={{ color: '#222' }}>{doctor.Sex}</span></p>
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>Email: <span style={{ color: '#007bff' }}>{doctor.DoctorEmail}</span></p>
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#666' }}>Phone: <span style={{ color: '#222' }}>{doctor.phone || "N/A"}</span></p>
                                <p style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', color: '#333' }}>Working Days:</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
                                    {doctor.Workingdays.map((day, i) => (
                                        <span key={i} style={{ backgroundColor: '#e3f2fd', color: '#007bff', padding: '5px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: '500' }}>{day}</span>
                                    ))}
                                </div>
                                <button 
                                style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
                                onClick={()=>{BookAppointment(doctor._id)}}
                                >Book Appointment</button>
                            </div>
                        ))
                    ) : (
                        <p style={{ fontSize: '16px', color: '#888' }}>No doctors found</p>
                    )}
                </div>
            </div>
        </div>
  )
}

export default Appointment

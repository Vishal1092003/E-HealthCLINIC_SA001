import React, { useState, useEffect } from 'react';
import hospital from '../pages/hospital.png';

function Signin() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState(""); 
    const [role, setRole] = useState('Admin'); // Default to Admin
    const [attempts, setAttempts] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(60);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState(""); // New state for messages

    useEffect(() => {
        let countdown;
        if (isDisabled) {
            setShowPopup(true); // Show popup when disabled
            countdown = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        setIsDisabled(false);
                        setShowPopup(false); // Hide popup after timer ends
                        setTimer(60);
                        clearInterval(countdown);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [isDisabled]);

    const checkuser = async () => {
        if (isDisabled) return; // Do nothing if button is disabled

        try {
            const response = await fetch(`http://localhost:8000/login`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
            })
            .then(res => res.json())
            .then((result) => {
                const token = result.token;
                console.log("result is ", result.token);

                if (result.success) {
                    // Success message
                    setMessage("Welcome!"); 
                    setAttempts(0); // Reset attempts on successful login
                } else {
                    // Error message
                    setMessage("User does not exist"); 
                    if (role === 'Admin') {
                        setAttempts(prev => {
                            const newAttempts = prev + 1;
                            if (newAttempts >= 3) {
                                setIsDisabled(true);
                                setAttempts(0); // Reset attempts after lockout
                            }
                            return newAttempts;
                        });
                    }
                }
            })
            .catch((error) => {
                console.log("error is ", error);
            });
        } catch (error) {
            console.log("error is ", error);
        }
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1 }}>
                <img 
                    src={hospital} 
                    alt="Background" 
                  style={{ width: '800px', height: '100vh', objectFit: 'cover' }}
                />
            </div>
            <div style={{ flex: 1, padding: '2rem' }}>
                <h1 style={{ textAlign: 'center' }}>Login Page</h1>
                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        <input 
                            type="radio" 
                            name="role" 
                            value="Donar" 
                            checked={role === 'Donar'}
                            onChange={() => setRole('Donar')}
                        /> 
                        Donar
                    </label>
                    <label style={{ marginLeft: '1rem' }}>
                        <input 
                            type="radio" 
                            name="role" 
                            value="Admin" 
                            checked={role === 'Admin'}
                            onChange={() => setRole('Admin')}
                        /> 
                        Admin
                    </label>
                    <label style={{ marginLeft: '1rem' }}>
                        <input 
                            type="radio" 
                            name="role" 
                            value="Hospital" 
                            checked={role === 'Hospital'}
                            onChange={() => setRole('Hospital')}
                        /> 
                        Hospital
                    </label>
                    <label style={{ marginLeft: '1rem' }}>
                        <input 
                            type="radio" 
                            name="role" 
                            value="Organisation" 
                            checked={role === 'Organisation'}
                            onChange={() => setRole('Organisation')}
                        /> 
                        Organisation
                    </label>
                </div>
                <div>
                    <input
                        placeholder="Email"
                        value={username}
                        type="text"
                        onChange={(e) => setusername(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginBottom: '1rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>
                <button
                    onClick={checkuser}
                    disabled={isDisabled}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        backgroundColor: isDisabled ? 'gray' : '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isDisabled ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isDisabled ? `Try again in ${timer}s` : 'Login'}
                </button>

                {/* Message Display */}
                {message && (
                    <p style={{ textAlign: 'center', color: message === "Welcome!" ? 'green' : 'red', marginTop: '1rem' }}>
                        {message}
                    </p>
                )}

                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                    Not registered yet? <a href="/register">Register Here!</a>
                </p>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '2rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}>
                        <h2>Account Locked</h2>
                        <p>Please wait for {timer} seconds before trying again.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Signin;

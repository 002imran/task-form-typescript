import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    
    console.log(userName, phoneNumber, email);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(userName === ""){
            toast.error("Name Is Required");
        }
        else if(phoneNumber === ""){
            toast.error("Phone Number Is required");
        }
        // else if(email === ""){
        //     toast.error("Email Is Required")
        // }
        else if (!email) {
            toast.error("Email is required");
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Email is invalid");
        }
        else{
            localStorage.setItem("userName", userName);
            localStorage.setItem("phoneNumber", phoneNumber);
            localStorage.setItem("email", email);
            
            toast.success("User Saved Succefully!")
            setTimeout(()=>{
                navigate("/homepage");
            },1000)
        }
        
        
    }

    return (
        <>
            <h2>Please fill The Form!</h2>

        <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        variant="outlined"
                        margin='normal'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}

                    />
                </div>
                <div>
                    <TextField
                        required
                        id="phone"
                        label="Phone Number"
                        variant="outlined"
                        margin='normal'
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}

                    />
                </div>
                <div>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin='normal'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}

                    />
                </div>
                <Button
                    sx={{ marginTop: 3, borderRadius: 2 }}
                    variant="contained"
                    color='primary'
                    type='submit'
                    
                >Submit</Button>
                {/* <ToastContainer></ToastContainer> */}
                

        </form>

        </>
    );
};

export default Form;


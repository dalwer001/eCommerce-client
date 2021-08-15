import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
// import Sidebar from '../AdminPanel/Sidebar/Sidebar';
// import Navbar from '../../Shared/Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';



const AddAdmin = () => {
    const [admin, setAdmin] = useState({})

    const handleBlur = e =>{
        const newInfo = {...admin}
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     const formData = new FormData()

    //     formData.append('email', admin.email)

    //     fetch('https://pacific-plateau-10670.herokuapp.com/addAdmin', {
    //         method: 'POST',
           
    //         body: formData
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data){
    //             e.target.reset();
    //             alert('Admin Created Successfully !');
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('email', admin.email)


        try {
            const res = await axios.post('https://pacific-plateau-10670.herokuapp.com/addAdmin', formData)
            if (res) {
                e.target.reset();
                alert('data post successfully');
            }
        }
        catch (error) {
            console.error(error)
        }
    }


    return (
        <section className="container-fluid row mx-0 px-0" >
            <div className="col-md-2 px-0">
               {/* <Sidebar></Sidebar> */}
            </div>
            <div className="col-md-10 p-5 pr-5 bg-warning">
                <h2 className="text-brand border-bottom fw-bolder text-light text-center">ADD ADMIN</h2>
                <form onSubmit ={handleSubmit}>
                    <div class="form-group mb-3 text-light">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur ={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;
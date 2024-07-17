import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
           
            <h3 className="font-bold text-lg">Signup</h3>
            
            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input 
                type="text"
                placeholder="Enter Your Name"
                className="border rounded-md w-80 px-3 py-2" 
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-sm text-red-500'><br />This field is required</span>}
            </div>
            
            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="email"
                placeholder="Enter Your Email"
                className="border rounded-md w-80 px-3 py-2" 
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-sm text-red-500'><br />This field is required</span>}
            </div>
            
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type="password"
                placeholder="Create Your Password"
                className="border rounded-md w-80 px-3 py-2" 
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-sm text-red-500'><br />This field is required</span>}
            </div>
            
            {/* Button */}
            <div className='flex mt-4 justify-around'>
              <button className="bg-pink-500 text-white rounded-md hover:bg-pink-800 duration-200 py-1 px-4">Signup</button>
              <div>
                Have an account?
                <button
                  className='underline text-blue-500 cursor-pointer'
                  type="button"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Login />
    </div>
  );
}

export default Signup;

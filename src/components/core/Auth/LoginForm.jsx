import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { Link ,useNavigate } from 'react-router-dom'
import {login} from "../../../Services/operations/authAPI"


const LoginForm = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  })

  const [showPassword,setShowPassword]=useState(false);
  const {email,password}=formData;
  const handleOnSumbit=(e)=>{
    e.preventDefault();
    dispatch(login(email,password,navigate));
  }
  const handleOnChange=(e)=>{
    setFormData((prevData)=>({
      ...prevData,
        [e.target.name]:e.target.value
      }))
  }
  return (
    <form onSubmit={handleOnSumbit}
      className='flex flex-col gap-y-4 mt-6 w-full'
     >    
     <label >
      <p className='text-richblack-5'>Email Address <sup className='text-pink-200 mb-1 text-[0.875rem] leading-[1.375rem]'>*</sup></p>
      <input type="email" required name="email" value={email} onChange={handleOnChange} placeholder='Enter email address' 
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className='w-full rounded-[0.5rem] p-[12px] text-richblack-5 mt-1 bg-richblack-800' />
     </label>
     <label className='relative' >
      <p className='mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5'>Password <sup className='text-pink-200 mb-1 text-[0.875rem] leading-[1.375rem]'>*</sup></p>
      <input type={showPassword ? "text":"password"}
      required 
      name="password"
       value={password} 
       onChange={handleOnChange} placeholder='Enter Password' 
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 ' />

<span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className='text-blue-100 mt-1 ml-auto
          max-w-max text-xs'>
            Forgot Password
          </p>
        </Link>
     </label>

     <button  type="sumbit"
     className='bg-yellow-50 mt-6 rounded-[8px] font-medium text-richblack-900 px[12px] py-[8px]'>
      Sign-In
     </button>


     </form>

    
  )
}

export default LoginForm
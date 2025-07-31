'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { registerUser } from '@/lib/firebase/auth';
export default function page() {
    const [email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            await registerUser(email,password);
            alert('Registered Successfully');
            }
            catch (error){
                alert(error.message);
            }
    }
  return (
    <form onSubmit={handleSubmit} className=' container d-flex justify-content-center align-items-center gap-3 flex-column border bg-warning bg-opacity-10 py-3 mt-4 w-auto'>
        <h1>Register</h1>

        <label htmlFor="email" >Email</label>
        <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} className='w-25 form-control' required/>
          <label htmlFor="password" >Set-Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' className='w-25 form-control' required/>
        {/* <label htmlFor="password" >Confirm Password</label>
        <input type="password" placeholder='Enter Your Password' className='w-25 form-control' required/> */}
 <div className='d-flex justify-content-around gap-2'> 
            <p className='fs-6'>already have an account?</p>
        <Link href="/Login" className='text-warning'>Sign-in</Link>   
             </div>        
        <input type="submit" className='btn btn-primary' />


    </form>
  )
}

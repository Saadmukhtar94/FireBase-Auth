'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import {resetPassword } from '@/lib/firebase/auth'



export default function Page() {
  const [email,setEmail] = useState('');
const handleSubmit = async (e) =>{
  e.preventDefault();
  try{
    await resetPassword(email);
    alert('Password reset,Email sent')
  } catch (error){
    alert(error.message);
  }
}
  return (
    <div>
          <form onSubmit={handleSubmit} className=' container d-flex justify-content-center align-items-center gap-3 flex-column border bg-warning bg-opacity-10 py-3 mt-4 w-auto'>
        <h1>Forgot Password</h1>

        <label htmlFor="email" >Enter Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' className='w-25 form-control' required/>
         
        <div className='d-flex justify-content-around gap-2'> 
            <p className='fs-6'>don't have an account?</p>
        <Link href="/Register" className='text-warning'>Register</Link>   
             </div>
        
        
        <input type="submit" className='btn btn-primary' />


    </form>
    </div>
  )
}

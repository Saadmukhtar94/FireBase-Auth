'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {loginUser} from '@/lib/firebase/auth'
import {useRouter} from 'next/navigation'
export default function Page() {
  const router = useRouter ()
  const [email,setEmail] = useState('');
  const [ password,setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
      setIsLoading(true); 

    try{
      await loginUser(email,password);{
      router.push('/dashboard')
      }
    }
    catch(error){

   console.log("error Login")
    alert(error.message);

 }
  }
  
  return (
    <form  onSubmit={handleSubmit} className=' container d-flex justify-content-center align-items-center gap-3 flex-column border bg-warning bg-opacity-10 py-3 mt-4 w-auto'>
        <h1>Login</h1>

        <label htmlFor="email" >Email</label>
        <input type="email" placeholder='Enter Your Email'  onChange={(e) => setEmail(e.target.value)}  className='w-25 form-control' required/>
          <label htmlFor="password" >Password</label>
        <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} className='w-25 form-control' required/>
        <Link href="/Forgot_password" className='text-warning'>Forgot Password</Link>        
        
        <button type="submit" className='btn btn-primary' disabled={isLoading} >
          {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : (
                    "Log In"
                  )}
           </button>

    </form>
  )
}

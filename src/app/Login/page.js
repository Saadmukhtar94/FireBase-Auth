import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <form className=' container d-flex justify-content-center align-items-center gap-3 flex-column border bg-warning bg-opacity-10 py-3 mt-4 w-auto'>
        <h1>Login</h1>

        <label htmlFor="email" >Email</label>
        <input type="email" placeholder='Enter Your Email' className='w-25 form-control' required/>
          <label htmlFor="password" >Password</label>
        <input type="password" placeholder='Enter Your Password' className='w-25 form-control' required/>
        <Link href="/Forgot_password" className='text-warning'>Forgot Password</Link>        
        
        <input type="submit" className='btn btn-primary' />


    </form>
  )
}

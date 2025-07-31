import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <form className=' container d-flex justify-content-center align-items-center gap-3 flex-column border bg-warning bg-opacity-10 py-3 mt-4 w-auto'>
        <h1>Register</h1>

        <label htmlFor="email" >Email</label>
        <input type="email" placeholder='Enter Your Email' className='w-25 form-control' required/>
          <label htmlFor="password" >Set-Password</label>
        <input type="password" placeholder='Enter Your Password' className='w-25 form-control' required/>
        <label htmlFor="password" >Confirm Password</label>
        <input type="password" placeholder='Enter Your Password' className='w-25 form-control' required/>
 <div className='d-flex justify-content-around gap-2'> 
            <p className='fs-6'>already have an account?</p>
        <Link href="/Login" className='text-warning'>Sign-in</Link>   
             </div>        
        <input type="submit" className='btn btn-primary' />


    </form>
  )
}

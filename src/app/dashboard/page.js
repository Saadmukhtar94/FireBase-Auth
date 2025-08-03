'use client'
import React,{useEffect, useState} from 'react'
import Image from 'next/image'

import { auth,logoutUser } from '@/lib/firebase/auth'
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';

export default function page() {
  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setEmail(user.email);        
      }
      else{
        router.push('/Login');
      }
    })
  })
  const  router = useRouter ()
  const [userEmail,setEmail] = useState ('')
  const handleLogout = async  () =>  {
    try {
      await logoutUser ()
      router.push('/Login')
    }
    catch (error){
      console.log("LogOut Error ;" , error)
    }
  }
  return (
    <div className='bg-primary bg-opacity-10 text-center d-flex flex-column vh-100  align-items-center'>
      <div className='d-flex pt-3 d-flex align-items-center pb-5'>
<Image
       src="/img.icons8.png"
      width={100}
      height={100}
       alt='firebase-logo'/>  
       <h1 className=' text-dark text-opacity-75'>Firebase</h1>
      </div>
       
       <div className='bg-light h-75 d-flex flex-column justify-content-center align-items-center px-4 my-auto mb-5'>
        <h2 className='pb-5'>Welcome to Dashboard</h2>
        <p className='w-75'>This Project provides a Firebase-based authentication system integerated intp a Next.js application</p>
        <p><strong>Email:</strong> {userEmail || "Loading...."}</p>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
       </div>
    </div>
  )
}

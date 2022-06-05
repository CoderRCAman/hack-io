import React from 'react'
import Link from 'next/link' 
import axios from '../axios'
import {HomeOutlined, LogoutOutlined, UserOutlined,SendOutlined} from '@ant-design/icons'

export default function LeftBar() { 
  const logout = async () => {
     try {
       const logoutResponse = await axios.get('/user/logout') ;
       if(logoutResponse.status === 200) 
        window.location.href = '/' 
     } catch (error) {
       
     }
  }
  return (
    <div className='  flex flex-col '>
      {/* <div className='flex flex-col justify-start'> */}
      
      <button 
      className='items-center space-x-2 flex text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  '
      >
      <HomeOutlined/>  <span>Home</span></button>
      
      <Link href="/profile">
      <button className='items-center flex  space-x-2 text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all '>
       <UserOutlined/> <span>Profile</span></button>
      </Link> 
      <Link href="/profile">
      <button className='items-center flex space-x-2 text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all '>
       <SendOutlined/> <span>Post</span></button>
      </Link>
      
      <button 
      onClick={logout }
      className='items-center  space-x-2 flex text-pink-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all '>
      <LogoutOutlined/><span>Logout</span></button>
      {/* </div> */}
       
     
    </div>
  )
}

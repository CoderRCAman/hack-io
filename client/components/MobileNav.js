import React from 'react'
import {HomeOutlined, LogoutOutlined, SendOutlined, UserOutlined, WifiOutlined} from '@ant-design/icons'
export default function MobileNav() {
  return (
    <div className="md:hidden flex space-x-12 justify-evenly p-2 fixed bottom-0 w-full bg-stone-200 text-pink-400 ">
      <div className='pb-1'>
      <HomeOutlined className ='text-2xl  ' />
      </div> 
      <div className='pb-1'>
      <UserOutlined className ='text-2xl ' />
      </div>  
      <div className='pb-1'>
      <LogoutOutlined className='text-2xl ' />
      </div>
      <div className='pb-2'>
      <SendOutlined className ='text-2xl ' />
      </div>
      <div className='pb-2'>
      <WifiOutlined className='text-2xl ' />
      </div>

   </div>
  )
}

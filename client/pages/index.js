import { useEffect } from 'react'
import Head from 'next/head'
import LeftBar from '../components/LeftBar'
import Navbar from '../components/Navbar'
import RightBar from '../components/RightBar'

export default function Home() {
	
	
	return (
		<div>
			<div className="h-[8vh] bg-stone-100 w-full flex items-center  text-xl font-semibold">
				<h2 className="ml-6">Animal Rescue</h2>
			</div>
			
		<div className="flex h-[92vh]">
			<div className='md:flex  flex-auto w-1/4 hidden   justify-center items-center border'>
				<LeftBar />
			</div>
			
			
			<div className='flex flex-auto w-3/4 border '>
		   
		</div>
		<div className='w-56 md:flex hidden'>
			<RightBar/>
		</div>
		</div>
		</div>
	)
}

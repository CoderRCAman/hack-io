import { useEffect } from 'react'
import Head from 'next/head'
import Sidebar from '../components/SideBar'

export default function Home() {
	
	
	return (
		<div>
			<div className="h-12 bg-stone-100 w-full flex items-center  text-xl font-semibold">
				<h2 className="ml-6">Animal Rescue</h2>
			</div>
		<div className="flex ">
			
			<Sidebar/>
			<div className='flex flex-1 border '>
		   
		</div>
		</div>
		</div>
	)
}

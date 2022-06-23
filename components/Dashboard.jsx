import React from 'react'
import data from '../data.json'
import Image from 'next/image'

function Dashboard() {
    let content = 0
    
    data.map((dat) => {
        console.log(dat.timeframes.daily.previous)
    })
    return (
        <div className='flex flex-col mx-4 my-12 '>
            <div className=''>
                {/* start of profile */}
                    <div className='flex flex-col justify-center overflow-hidden '>
                        <div className='py-10 flex flex-row justify-centertext-white bg-violet-800 rounded-lg shadow-xl
                        md:flex-col '>
                            <Image className='md:w-4/5' src='/images/image-jeremy.png' alt='profile-image' width={70} height={70}/>
                            <div className='mx-7 justify-start'>
                                <p className='flex flex-col text-xs'>Reported for</p>
                                <h2 className='flex flex-col text-xl'>jeremy Robson</h2>
                            </div>
                        </div>

                        <div className='px-4 bg-blue-900 rounded-b-lg text-sm '>
                            <ul className='flex justify-center'>
                                <li className='px-3 py-7 text-white'>Daily</li>
                                <li className='px-4 py-7 text-white'>Weekly</li>
                                <li className='px-4 py-7 text-white'>Monthly</li>
                            </ul>
                        </div>
                    </div>
                {/* end of profile */}
            </div>
        </div>
    )
}

export default Dashboard
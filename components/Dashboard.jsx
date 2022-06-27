import React from 'react'
import data from '../data.json'
import Image from 'next/image'
import Link from 'next/link'

function Dashboard() {
    // let content = 0
    
    // data.map((dat) => {
    //     console.log(dat.timeframes.daily.previous)
    // })
    return (
        <div className='container mx-auto flex flex-col  my-12 px-6'>
            <div className='box-border'>
                {/* start of profile */}
                    <div className='flex flex-col justify-center overflow-hidden text-white md:p44'>
                        <div className='py-12 px-8  flex flex-row justify-centertext-white bg-violet-800 rounded-lg shadow-xl
                        '>
                            <Image className='' src='/images/image-jeremy.png' alt='profile-image' width={50} height={50}/>
                            <div className='px-4 justify-start'>
                                <p className='text-xs'>Reported for</p>
                                <h2 className='text-xl'>jeremy Robson</h2>
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

                <div className='mt-10 shadow-xl relative'>
                    <div className='bg-orange-400 rounded-t-xl'>
                        <Image className='animate-bounce absolute ' src='/images/icon-work.svg' alt='work image' width={100} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> Work </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4'>
                            <span className='text-white text-4xl'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
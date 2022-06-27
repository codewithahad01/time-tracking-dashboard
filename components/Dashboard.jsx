import React from 'react'
import data from '../data.json'
import Image from 'next/image'
import Link from 'next/link'

function Dashboard() {
    let content = 0
    
    data.map((dat) => {
        return dat.dat
        
    })
    return (
        <div className='container mx-auto flex flex-col  my-12 px-6'>
            <div className=''>
                {/* start of profile */}
                    <div className='  justify-center overflow-hidden text-white md:p44 '>
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
                                <li className='px-3 py-7 text-white'><Link href='#home' aria-disabled><a className='hover:font-extrabold hover:text-xl md:animate-pulse' >Daily</a></Link></li>
                                <li className='px-4 py-7 text-white'><Link href='#home'><a className='hover:font-extrabold hover:text-xl md:animate-pulse' >Weekly</a></Link></li>
                                <li className='px-4 py-7 text-white'><Link href='#home'><a className='hover:font-extrabold hover:text-xl md:animate-'>Monthly</a></Link></li>
                            </ul>
                        </div>
                    </div>
                {/* end of profile */}

            <div className='grid md:grid-cols-3 md:gap-6'>
                <div className='mt-10 shadow-xl relative '>
                    <div className='bg-orange-400 rounded-t-xl'>
                        <Image className='animate-bounce absolute ' src='/images/icon-work.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {data.map((detail, index) => {
                                return detail.title.indexOf()
                            })} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl relative'>
                    <div className='bg-sky-400 rounded-t-xl  '>
                        <Image className='animate-bounce opacity-40  float-right' src='/images/icon-play.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {data.map(record => {return record.title[0]})} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>


                <div className='mt-10 shadow-xl relative'>
                    <div className='bg-red-400 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40 ' src='/images/icon-study.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {data.map(record => {return record.title[0]})} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl '>
                    <div className='bg-green-400 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40 ' src='/images/icon-exercise.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {data.map(record => {return record.title[0]})} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl'>
                    <div className='bg-violet-600 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40' src='/images/icon-social.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {data.map(record => {return record.title[0]})} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>

                <div className='mt-10 shadow-xl '>
                    <div className='bg-yellow-300 rounded-t-xl'>
                        <Image className='animate-bounce opacity-40 ' src='/images/icon-self-care.svg' alt='work image' width={80} height={80} />
                    </div>
                    <div className='bg-blue-900 p-4 rounded-t-xl'>
                        <div className='flex justify-between  '>
                            <span className='text-stone-200 text-xl '> {data.map(record => {return record.title[0]})} </span>
                            <Image className='h-2' src='/images/icon-ellipsis.svg' alt='elipsis image' layout='fixed' width={35} height={10} />
                        </div>
                        <div className='flex  justify-between pt-6 pb-4 md:flex-col md:text-center '>
                            <span className='text-white text-4xl md:text-6xl md:mb-4'>32 hrs</span>
                            <span className='text-white opacity-60'>Last Week-36hrs</span>
                        </div>
                    </div>
                </div>      
                </div>
            </div>
        </div>
    )
}

export default Dashboard
import React from 'react'

export default function BottomArea() {
  return (
    <div>
        <div className='relative container w-full p-8 lg:py-12 mx-auto px-8 justify-center text-center'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-1'>
                    <div className='flex flex-row'>
                        <img className='rounded-full h-20 w-20' src={process.env.PUBLIC_URL + '/icons/gitprofile.jpg'} alt="myprofile"/>
                        
                        <div className='ml-4'>
                        <h2 className='mb-2 flex text-base lg:text-xl font-semibold text-slate-200 justify-start items-center'>
                            Masterz3rr
                        </h2>
                            <p className='flex justify-start items-center mb-1'>
                                <svg className='w-4 h-4 text-slate-300' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z"/></svg>
                                <span className='ml-2 text-slate-300 text-xs md:text-base font-light'>14 Repositories</span>
                            </p>
                            <p className='flex justify-start items-center '>
                                <svg className='w-4 h-4 text-slate-300' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM248 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"/></svg>
                                <span className='ml-2 text-slate-300 text-xs md:text-base font-light'>2 Current Forks</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 mt-4 flex flex-col'>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <div className='col-span-2'>
                        <p className=' text-slate-200 text-base lg:text-2xl justify-start text-center lg:text-left'>You like the design? Fork my Github repo by clicking this button.</p><br/>
                        
                        </div>
                        <div className='col-span-1 place-content-center'>
                            <a href='https://github.com/masterz3rr/MyCV/fork' target="_blank" rel="noreferrer">
                                <button className='px-8 py-2 
                                    flex 
                                    bg-gradient-to-r from-violet-600 to-indigo-700 text-slate-300 rounded-full hover:from-indigo-700 hover:to-violet-600'>
                                    <svg className='mr-3 w-8 h-8 text-slate-300' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM248 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"/></svg>
                                    <p className=''>Fork my design</p>
                                </button>
                            </a>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
           

                { /* 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 place-items-center'>
                

                <div className='flex flex-col lg:flex-row justify-center items-center pr-24 '>
                    <p className='text-slate-200 text-base lg:text-2xl mr-4  justify-center items-center'>You like the design? Fork my Github repo by clicking this button.</p><br/>
                    <a href='https://github.com/masterz3rr/MyCV/fork' target="_blank" rel="noreferrer">
                    <button className='justify-center items-center flex px-8 py-2 bg-gradient-to-r from-violet-600 to-indigo-700 text-slate-300 rounded-full hover:from-indigo-700 hover:to-violet-600'>
                        <svg className='mr-3 w-8 h-8 text-slate-300' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM248 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"/></svg>
                        <p>Fork my design</p>
                    </button>
                    </a>
                </div>
                
                
            </div>
                */}
                
        </div>
        <div className='w-full mx-none bg-gradient-to-r from-violet-800 to-indigo-500 py-6'>
            <p className='flex justify-center items-center text-slate-200 '>Masterz3rr. Rights Reserved @ {new Date().getFullYear()} </p>
        </div>
    </div>
  )
}

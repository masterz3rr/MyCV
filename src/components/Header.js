import React, { useState} from 'react'
import MyProfile from '../components/myimage.png';
import './style.css';
import 'flowbite';
import { Toast } from 'flowbite-react';

export default function Header() {

    const [isActive, setIsActive] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText("alejerry24@gmail.com");        
        popup();
    }

    const popup = event => {
        setIsActive(current => !current);
    };
      

  return (
    <div>
        <div id="profile" className='relative w-full flex columns-2 h-screen lg:h-max overflow-hidden' >
            <div className='px-4 py-16 
                            lg:px-32 lg:py-32 
                            2xl:px-32 2xl:py-32 
                            float-left 
                            mt-0
                            xs:mt-32
                            sm:mt-0'>
                <span className='text-2xl 
                                2xl:text-5xl text-white font-light text-left'>Hi! I Am </span>
                <br/>
                <span className='text-4xl 
                    lg:text-8xl text-white text-left font-semibold'>Jerry S. Ale </span>
                <div className='my-10 xs:my-2 lg:my-10'>
                    <span className='text-xs 
                                    xs:text-[8px]
                                    lg:text-lg text-white bg-gradient-to-r from-violet-800 to-indigo-600 rounded-full px-3 py-2 lg:px-5 lg:py-3 mr-1 md:mr-3'>Web Dev</span>
                    <span className='text-xs 
                                    xs:text-[8px]
                                    lg:text-lg text-white rounded-full px-3 py-2 lg:px-5 lg:py-3 bg-gradient-to-r bg-indigo-600  mr-1 md:mr-3'>UI/UX</span>
                    <span className='text-xs 
                                    xs:text-[8px]
                                    lg:text-lg text-white rounded-full px-3 py-2 lg:px-5 lg:py-3 bg-gradient-to-r bg-indigo-600 mr-1 md:mr-3'>IT Instructor</span>
                </div>
                <div className='xs:mt-12 md:mt-0 pr-4 lg:pr-32'>
                    <p className='text-zinc-400 text-xs lg:text-base text-justify'>
                        A java programming enthusiast and a web developer primarily focusing on UI and UX design switched into an IT educator
                        for more than 4 years from a premiere university teaching major subjects such as web development, Java mobile development 
                        in Android Studio, and Java Programming.
                    </p>
                </div>
                <div className='mt-8 flex align-middle'>
                    <div className='flex py-3 ml-0 md:ml-8 mr-4'>
                        <p className='text-gray-200 text-xs md:text-base'>Connect with me: </p>
                    </div>
                    <button className='t-tooltip place-self-center mr-1 hover:cursor-pointer max-w-md' onClick={copy}
                        data-collapse-toggle="toast">
                        <img width="34" height="34" src={process.env.PUBLIC_URL + '/icons/gmail.svg'} alt="gmail"/> 
                        <div className='t-tooltip -ml-8 '>
                                <div className='hidden t-box bg-slate-200 p-4 text-white rounded-xl absolute mt-2'>
                                    <div className='columns-2 flex'>
                                        <div>
                                            <img  width="70" height="70" src={process.env.PUBLIC_URL + '/icons/profile1.png'} alt="myprofile"/>
                                        </div>
                                        <div className='px-3 text-left place-self-center'>
                                            <h3 className='text-indigo-600 font-semibold'>Connect via Gmail</h3>
                                            <p className='text-gray-800'>alejerry24@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                    </button>

                    <button className='t-tooltip place-self-center mr-1 hover:cursor-pointer max-w-md'
                        data-collapse-toggle="toast">
                        <a href='https://www.linkedin.com/in/jerryale/' target="_blank" rel="noreferrer">
                            <img width="36" height="36" src={process.env.PUBLIC_URL + '/icons/linkedIn.svg'} alt="linked in"/>   
                        </a>
                        
                        <div className='t-tooltip -ml-8 '>
                                <div className='hidden t-box bg-slate-200 p-4 text-white rounded-xl absolute mt-1'>
                                    <div className='columns-2 flex'>
                                        <div>
                                            <img  width="70" height="70" src={process.env.PUBLIC_URL + '/icons/profile1.png'} alt="myprofile"/>
                                        </div>
                                        <div className='px-3 text-left place-self-center'>
                                            <h3 className='text-indigo-600 font-semibold'>Connect via Linked In</h3>
                                            <p className='text-gray-800'>linkedin.com/in/jerryale/</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                    </button>


                    <button className='t-tooltip place-self-center mr-1 hover:cursor-pointer max-w-md'
                        data-collapse-toggle="toast">
                        <a href='https://github.com/masterz3rr' target="_blank" rel="noreferrer">
                            <img width="34" height="34" src={process.env.PUBLIC_URL + '/icons/github.svg'} alt="GitHub"/>  
                        </a>
                        
                        <div className='t-tooltip -ml-8 '>
                                <div className='hidden t-box bg-slate-200 p-4 text-white rounded-xl absolute mt-2'>
                                    <div className='columns-2 flex'>
                                        <div>
                                            <img className='rounded-full' width="70" height="70" src={process.env.PUBLIC_URL + '/icons/gitprofile.jpg'} alt="myprofile"/>
                                        </div>
                                        <div className='px-3 text-left place-self-center'>
                                            <h3 className='text-indigo-600 font-semibold'>View my Repository</h3>
                                            <p className='text-gray-800'>github.com/masterz3rr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                    </button>   

                    <button className='t-tooltip place-self-center hover:cursor-pointer max-w-md'
                        data-collapse-toggle="toast">
                        <a href='https://discord.com/invite/masterzerr#7094' target="_blank" rel="noreferrer">
                            <img width="34" height="34" src={process.env.PUBLIC_URL + '/icons/discord.svg'} alt="GitHub"/>  
                        </a>
                        
                        <div className='t-tooltip -ml-8 z-index-10'>
                                <div className='hidden t-box bg-slate-200 p-4 text-white rounded-xl absolute mt-2'>
                                    <div className='columns-2 flex'>
                                        <div>
                                            <img className='rounded-full' width="70" height="70" src={process.env.PUBLIC_URL + '/icons/gitprofile.jpg'} alt="myprofile"/>
                                        </div>
                                        <div className='px-3 text-left place-self-center'>
                                            <h3 className='text-indigo-600 font-semibold'>Chat on Discord</h3>
                                            <p className='text-gray-800'>masterzerr#7094</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                    </button>  

                </div>
            </div>

            <div className='flex float-left 
                                w-96 
                                xs:w-96
                                lg:w-8/12
                                2xl:w-6/12 bg-gradient-to-r from-violet-800 to-indigo-600 '>
                
                            
            </div>
                <div className="absolute inset-y-0 
                    xs:-right-96
                    lg:-right-72
                    2xl:-right-0
                     -mr-0 
                     xs:-mr-32 
                     lg:mr-32
                     2xl:mr-4 " >
                    <img className='
                    w-4/12 
                    lg:w-4/12
                    xl:w-9/12 h-auto pointer-events-none' src={MyProfile} alt="myprofile"/>
                </div>  

            </div>
                <div className="absolute -left-44 top-96 mt-52 md:mt-72 " >
                    <img className='w-auto 
                    h-40
                    md:h-72
                    -rotate-90  pointer-events-none'  src={process.env.PUBLIC_URL + '/icons/Shape.svg'} alt="gmail"/> 
                </div>  
       
            <div className={ isActive ? 'inline-block absolute top-5 left-5':'hidden absolute top-5 left-5'}>
            <Toast>
                <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">  
                    <img width="34" height="34" src={process.env.PUBLIC_URL + '/icons/gmail.svg'} alt="gmail"/> 
                </div>
                <div className="ml-3 text-sm font-normal">
                    Gmail copied to your clipboard.
                </div>
            <Toast.Toggle />
            </Toast>
        </div>    
    </div>
  )
}

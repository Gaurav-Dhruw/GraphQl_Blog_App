import React, {useContext} from 'react';
import Link from 'next/link';
import {ImHeart} from 'react-icons/im';
import {GrMail} from 'react-icons/gr'

const Header = () => {
    
    return (
        <div className='container mx-auto md:px-20  md:mb-20'>
            <div className='flex md:border-b-4 w-full items-center justify-between border-pink-500 py-6'>
                <div className=''>
                    <Link href="/">
                        
                        <div className='h-[3.5rem] md:h-full cursor-pointer font-bold text-4xl mx-6 md:mx-4'>
                            <img src='/logo.png' className='h-full'/>
                        </div>
                    </Link>
                </div>
                <div className='hidden md:flex '>
                        
                    <span className='transition ease duration-150 flex items-center  bg-white align-middle font-semibold cursor-pointer py-1,5 px-3 mx-3 shadow-lg rounded-lg hover:invert'>
                                <GrMail className='inline mr-1'/>
                                <span>Subscribe</span>
                    </span>
                    
                    
                    <span className=' transition ease duration-150 flex items-center bg-white shadow-lg rounded-lg hover:bg-black hover:text-white align-middle font-semibold cursor-pointer py-1.5 px-3 mx-3'>
                                <ImHeart className='inline fill-red-500 mr-1'/> 
                                <span>Donate</span>

                    </span>
                        
                        

                </div>
            </div>

        </div>
    )
}

export default Header
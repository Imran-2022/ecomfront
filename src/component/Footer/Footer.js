import React from 'react';
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import facebook from '../../assets/images/facebook.svg'
import youtube from '../../assets/images/youtube.svg'
import { useSelector } from 'react-redux';
const Footer = () => {
    const year = new Date().getFullYear()
    const {user} = useSelector((state) => state.auth);
    return (
        <footer className=" border sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://www.linkedin.com/in/md-imranul-haque/" className="hover:underline">Ecom™</a>. All Rights Reserved. <span className='text-red-600 font-bold'>{user?.isVerified?"verified Email":user&&"unVerified Email"}</span>
                    </span>
                    <div className="flex pt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://github.com/Imran-2022" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <img className='w-5 h-5' src={github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <img className='w-5 h-5' src={linkedin} alt="" />
                        </a>
                        <a href="https://www.youtube.com/@mdimranulhaquee" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <img className='w-5 h-5' src={youtube} alt="" />
                        </a>
                        <a href="https://www.facebook.com/mdimranulhaquee" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <img className='w-5 h-5' src={facebook} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
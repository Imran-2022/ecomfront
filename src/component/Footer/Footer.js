import React from 'react';
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import googlePlay from '../../assets/images/googlePlay.png'
import applePlay from '../../assets/images/applePlay.png'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div class=" bg-gray-900">
            <div class="max-w-2xl mx-auto text-white py-10">
                <div class="text-center">
                    <h3 class="text-3xl mb-3"> Download our Ecom web app </h3>
                    <p> Stay with E-com. All day, every day. </p>
                    <div class="flex justify-center my-10">
                        <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <img src={googlePlay} class="w-7 md:w-8"alt='img-googlePlay'/>
                            <div class="text-left ml-3">
                                <p class='text-xs text-gray-200'>Download on </p>
                                <p class="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                            <img src={applePlay} class="w-7 md:w-8" alt='img-applePlay'/>
                            <div class="text-left ml-3">
                                <p class='text-xs text-gray-200'>Download on </p>
                                <p class="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p class="order-2 md:order-1 mt-8 md:mt-0">2022 - {year} &copy; All right reserved by @ <a className='text-zinc-100' href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer">md imranul haque</a></p>
                    <div class="order-1 md:order-2 flex">
                        <span class="px-2"><a href="https://github.com/Imran-2022" target="_blank" rel="noreferrer"><img className='w-5' src={github} alt="" /></a></span>
                        <span class="px-2"><a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer"><img className='w-5' src={linkedin} alt="" /></a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
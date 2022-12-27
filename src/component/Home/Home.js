import React from 'react';
import Layout from '../../Layout';
import homecover from "../../assets/images/homecover.png"
import ShowProduct from './ShowProduct';

const Home = () => {

    // <p>{process.env.REACT_APP_HELLO_MESSAGE}</p>

    return (
        <Layout title="Home Page" className='py-6'>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="place-self-center mr-auto lg:col-span-7">
                    <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Get the Best Product From Our Store !</h1>
                        <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">[welcome there , if you need this kind of e-commerce project, just contact with developer, hit bellow button, thank you !]</p>
                        {/* <Link href="#" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link> */}
                        <a href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer" className="inline-flex justify-center  items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Developer
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={homecover} alt="mockup" />
                    </div>
                </div>
            </section>
            <ShowProduct/>
        </Layout>
    );
};

export default Home;
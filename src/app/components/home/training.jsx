import styles from './training.module.css';
import Link from 'next/link';

export default function Training(){

    return(
        <>
        <div className={`${styles.container}`}>

            <div className="max-w-[1440px] m-auto">
                <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">    

                    <div className='flex flex-col items-center lg:items-start lg:justify-between lg:relative'>
            
                            <div className='bg-[#377497ad] pt-10 md:pt-[72px] pb-8 pl-[4%] pr-[4%] md:pl-[55px] md:pr-[55px] lg:max-w-[539px] '>
            
                                <h2 className='text-white text-4xl r-bold mb-6'>Training and support</h2>
            
                                <p className='text-white r-light text-md pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                 
                                <Link href={'about-us'}>
                                
                                    <button
                                        type="button"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-md text-black  shadow-sm hover:bg-[#ebebeb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Learn More
                                    </button>

                                </Link> 

            
                            </div>
        
                            
                            <img
                                src='/images/smiling-nurse.png'
                                width='400px'
                                className='lg:absolute lg:left-[65%] lg:bottom-[0px]'
                            >
        
                            </img>
        
                    </div>

                </div>
            </div>


        </div>

        
        </>
    )

}
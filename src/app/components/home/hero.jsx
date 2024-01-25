import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero(){

    return(
        
        <>

            <div className={`${styles.heroBanner} md:h-[600px]`}>

                <div className="max-w-[1440px] m-auto h-[100%]">
                    <div className="sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px] h-[100%] flex items-end">

                        <div className='bg-[#1d8a92ce] ps-[4%] pe-[4%] pt-16 pb-4 md:pt-16 md:ps-14 md:pr-14 md:inline-block min-w-[100%] md:min-w-[0%]'>
        
                            <h2 className='r-bold text-5xl md:text-5xl text-white leading-[55px] md:leading-[55px]'>
                                Workforce,<br></br>
                                Education and <br></br>
                                Training.
                            </h2>
    
                            <div className='mt-6 md:mt-6 max-w-[500px]'>

                                <p className='r-light text-white text-md md:text-lg'>
                                    The Hammersmith and Fulham Training Hub team consists of experienced Practice Nurses, GPs and project management support. We work closely with general practice to share best practice and support the learning and development of staff across Hammersmith and Fulham.
                                </p>

                            </div>
        
                            <div className='mt-6 mb-1 md:mt-4 md:mb-4 text  text-center md:text-right text-lg md:text-lg'>
                                <Link href="/learning" className='text-white underline underline-offset-4'>Discover our learning programmes</Link>
                            </div>
        
                        </div>

                    </div>


                
                </div>

            </div>
            

        </>
    )
}
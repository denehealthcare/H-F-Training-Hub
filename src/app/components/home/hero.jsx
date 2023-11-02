import styles from './hero.module.css';

export default function Hero(){

    return(
        
        <>

            <div className={`${styles.heroBanner} md:h-[600px]`}>

                    <div className="md:ms-[5vw] md:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className='bg-[#1d8a92ce] ps-[4%] pe-[4%] pt-16 pb-4 md:pt-16 md:ps-14 md:pr-14 md:inline-block h-full'>
        
                            <h2 className='r-bold text-5xl md:text-5xl text-white leading-[55px] md:leading-[55px]'>
                                Workforce,<br></br>
                                Education and <br></br>
                                Training.
                            </h2>
    
                            <div className='mt-6 md:mt-6 max-w-[500px]'>
                                <p className='r-light text-white text-md md:text-lg'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </p>
                            </div>
        
                            <div className='mt-6 mb-1 md:mt-4 md:mb-4 text  text-center md:text-right text-lg md:text-lg'>
                                <a href="/" className='text-white underline underline-offset-4'>Discover our learning programmes</a>
                            </div>
        
                        </div>

                    </div>


                
                </div>
            

        </>
    )
}
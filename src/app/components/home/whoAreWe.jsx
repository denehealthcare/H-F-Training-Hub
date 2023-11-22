import styles from './whoAreWe.module.css';

export default function WhoAreWe(){

    return(
        <>
            <div className={`${styles.container}`}>
                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">    
    
                        <div className='pt-[40px] pb-[40px] md:pt-[90px] md:pb-[90px]'>
            
                                <div className='md:border-l-8 md:border-[#378C8E] md:ps-8 pb-8 xl:max-w-[700px]'>
            
                                    <h2 className='r-bold text-4xl text-[#378C8E] pt-8 pb-3 md:pb-4'>
                                        who are we
                                    </h2>
                    
                                    <p className='r-light text-md'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                    </p>
            
                                </div>
            
                        </div>

                      </div>
                    </div>
                </div>
        </>
    )
}
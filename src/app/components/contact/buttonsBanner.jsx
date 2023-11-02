import styles from './buttonsBanner.module.css'

export default function ButtonsBanner(){

    return(
        <>
        <div className={styles.container}>

            <div className="max-w-[1440px] m-auto">
                <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                    <div className='flex justify-end pt-[54px] pb-[54px]'>
        
                            <button
                                type="button"
                                className="r-light rounded-md me-4 bg-[#378C8E] px-[25px] py-[12px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Training
                            </button>
        
                            <button
                                type="button"
                                className="r-light rounded-md bg-indigo-600 px-[25px] py-[12px] text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Events
                            </button>
        
                        
                    </div>
                </div>
            </div>    
        </div>

        </>
    )
    
}
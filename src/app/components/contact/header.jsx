import styles from "./header.module.css";

export default function Header(){

    return(
        <>
        
        <div className={`${styles.container}`}>

            <div className={styles.overlay}></div>

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">
    
                        <div className={`${styles.test}`}>
        
                            <h1 className={`${styles.test} text-white text-4xl r-bold pt-[50px] md:pt-[129px]`}>Contact Us</h1>
        
                            <p className="text-white text-md mt-3 lg:max-w-[600px] pb-[50px] md:pb-[115px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
                        </div>
    
                    </div>
                </div>    
        </div>

        </>
    )
}
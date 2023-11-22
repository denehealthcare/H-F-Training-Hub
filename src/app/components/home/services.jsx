import Link from "next/link";

export default function Services(){

    return(
        <>
            <div className="max-w-[1440px] m-auto">
                <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 justify-items-center pt-[60px] pb-[60px]">
            
                        {/* Learning and development */}
                        <div className="max-w-[350px]">
                            <img
                                src="/images/learning-and-development.png"
                                width="100%"
                                className="h-[235px]"
                            >
                            </img>
            
                            <div className="bg-[#F2F2F2] border-l-2 border-b-2 border-t-8 border-r-2 border-[#D2D2D2] border-t-[#378C8E] shadow-md flex flex-col items-center ps-[32px] pe-[32px]">
            
                                <h3 className="r-reg text-xl mt-3">Learning and Development</h3>
            
                                <p className="text-center text-md text-[#717171] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                
                                <Link href={'/learning'} className="w-[100%]">
                                
                                    <button className="bg-[#307b7d] hover:bg-[#2a696a] text-white r-light w-full rounded-xl mt-2 text-sm pt-1 pb-1 mb-6 flex justify-center items-center">
                                            Find out more
                                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] ms-2 " height="1.2em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                    </button>

                                </Link>

            
                            </div>
                        </div>
            
            
            
                        {/* Events */}
                        <div className="max-w-[350px]">
                            <img
                                src="/images/events.png"
                                width="100%"
                                className="h-[235px]"
                            >
                            </img>
            
                                <div className="bg-[#F2F2F2] border-l-2 border-b-2 border-t-8 border-r-2 border-[#D2D2D2] border-t-[#68609C] shadow-md flex flex-col items-center ps-[32px] pe-[32px]">
            
                                <h3 className="r-reg text-xl mt-3">Events</h3>
            
                                <p className="text-center text-md text-[#717171] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
                                <Link href={'/events'} className="w-[100%]">

                                    <button className="bg-[#68609C] hover:bg-[#5a5485] text-white r-light w-full rounded-xl mt-2 text-sm pt-1 pb-1 mb-6 flex justify-center items-center">
                                    
                                        Find out more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] ms-2 " height="1.2em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

                                    </button>

                                </Link>    
            
                            </div>
            
                        </div>
            
            
                        {/* Resources */}
                        <div className="max-w-[350px]">
                            <img
                                src="/images/resources.png"
                                width="100%"
                                className="h-[235px]"
                            >
                            </img>
            
                                <div className="bg-[#F2F2F2] border-l-2 border-b-2 border-t-8 border-r-2 border-[#D2D2D2] border-t-[#4E8E37] shadow-md flex flex-col items-center ps-[32px] pe-[32px]">
            
                                <h3 className="r-reg text-xl mt-3">Resources</h3>


            
                                <p className="text-center text-md text-[#717171] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                <Link href={'/resources'} className="w-[100%]">

                                    <button className="bg-[#4E8E37] hover:bg-[#447c30] text-white r-light w-full rounded-xl mt-2 text-sm pt-1 pb-1 mb-6 flex justify-center items-center">
                                        Find out more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] ms-2 " height="1.2em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                    </button>

                                </Link>
            
                            </div>
            
                        </div>
            
                    </div>
            </div>
        </div>
        
        </>
    )
}
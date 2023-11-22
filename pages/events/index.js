import Layout from "@/app/components/layout/layout";
import Link from "next/link";

export default function events(){

    return(
        <>
            <Layout>

                <div className="bg-[#ECECEC]">



                    <div className="bg-[url('/images/events-header.png')] bg-no-repeat bg-cover bg-center  relative">
    
                        <div className="bg-[#68609c7e] z-50 h-[100%] w-[100%]">
    
                            <div className="max-w-[1440px] m-auto relative">
                                <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px] flex items-center">
    
                                    <h1 className=" text-white text-[2rem] sm:text-[2.5rem] r-bold py-[100px]">Upcoming Events</h1>
    
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
                    <div className="max-w-[1440px] m-auto mt-[50px] sm:mt-[80px] sm:pb-[80px]">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">
    
    
                            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center">
    
    
    
    
                                    <div className="col-span-1 max-w-[340px]">
    
                                        <Link href={`/events/view`}>
    
                                            <div className="w-[100%]">
                                                <img
                                                    src="/images/example-event.png"
                                                    width="100%"
                                                    className="h-[235px]"
                                                >
                                                </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#68609C] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">Event Number 1</h3>
                                                <p className="r-light text-[0.rem] text-[#656565]">07 Nov 23</p>
    
                                                <div className="mt-6">
                                                    <button className="bg-[#68609C] hover:bg-[#8077c1] text-[white] inline-block py-[5px] px-[25px] text-[0.9rem]">More info</button>
                                                </div>
    
                                                </div>
                                            </div>
    
                                        </Link>
    
                                    </div>
    
    
    
    
                                <div className="col-span-1 max-w-[340px]">
    
                                    <Link href={`/events/view`}>
    
                                        <div className="w-[100%]">
                                            <img
                                                src="/images/example-event.png"
                                                width="100%"
                                                className="h-[235px]"
                                            >
                                            </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#68609C] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">Event Number 1</h3>
                                                <p className="r-light text-[0.rem] text-[#656565]">07 Nov 23</p>
    
                                                <div className="mt-6">
                                                    <button className="bg-[#68609C] hover:bg-[#8077c1] text-[white] inline-block py-[5px] px-[25px] text-[0.9rem]">More info</button>
                                                </div>
    
                                            </div>
                                        </div>
    
                                    </Link>
    
                                </div>
    
    
    
    
    
                                <div className="col-span-1 max-w-[340px]">
    
                                    <Link href={`/events/view`}>
    
                                        <div className="w-[100%]">
                                            <img
                                                src="/images/example-event.png"
                                                width="100%"
                                                className="h-[235px]"
                                            >
                                            </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#68609C] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">Event Number 1</h3>
                                                <p className="r-light text-[0.rem] text-[#656565]">07 Nov 23</p>
    
                                                <div className="mt-6">
                                                    <button className="bg-[#68609C] hover:bg-[#8077c1] text-[white] inline-block py-[5px] px-[25px] text-[0.9rem]">More info</button>
                                                </div>
    
                                            </div>
                                        </div>
    
                                    </Link>
    
                                </div>
    
    
    
    
                                <div className="col-span-1 max-w-[340px]">
    
                                    <Link href={`/events/view`}>
    
                                        <div className="w-[100%]">
                                            <img
                                                src="/images/example-event.png"
                                                width="100%"
                                                className="h-[235px]"
                                            >
                                            </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#68609C] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">Event Number 1</h3>
                                                <p className="r-light text-[0.rem] text-[#656565]">07 Nov 23</p>
    
                                                <div className="mt-6">
                                                    <button className="bg-[#68609C] hover:bg-[#8077c1] text-[white] inline-block py-[5px] px-[25px] text-[0.9rem]">More info</button>
                                                </div>
    
                                            </div>
                                        </div>
    
                                    </Link>
    
                                </div>
    
    
    
    
    
    
                                                                <div className="col-span-1 max-w-[340px]">
    
                                        <Link href={`/events/view`}>
    
                                            <div className="w-[100%]">
                                                <img
                                                    src="/images/example-event.png"
                                                    width="100%"
                                                    className="h-[235px]"
                                                >
                                                </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#68609C] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">Event Number 1</h3>
                                                <p className="r-light text-[0.rem] text-[#656565]">07 Nov 23</p>
    
                                                <div className="mt-6">
                                                    <button className="bg-[#68609C] hover:bg-[#8077c1] text-[white] inline-block py-[5px] px-[25px] text-[0.9rem]">More info</button>
                                                </div>
    
                                                </div>
                                            </div>
    
                                        </Link>
    
                                    </div>
    
    
    
    
                                                                    <div className="col-span-1 max-w-[340px]">
    
                                        <Link href={`/events/view`}>
    
                                            <div className="w-[100%]">
                                                <img
                                                    src="/images/example-event.png"
                                                    width="100%"
                                                    className="h-[235px]"
                                                >
                                                </img>
    
                                            <div className="bg-[#FCFCFC] border-l-2 border-b-2 border-t-[6px] border-r-2 border-[#DFDFDF] border-t-[#68609C] shadow-md flex flex-col  ps-[32px] pe-[32px] pt-[10px] pb-[15px]">
    
    
                                                <h3 className="r-reg r-bold text-[1.1rem] mt-1 text-start text-[#656565]">Event Number 1</h3>
                                                <p className="r-light text-[0.rem] text-[#656565]">07 Nov 23</p>
    
                                                <div className="mt-6">
                                                    <button className="bg-[#68609C] hover:bg-[#8077c1] text-[white] inline-block py-[5px] px-[25px] text-[0.9rem]">More info</button>
                                                </div>
    
                                                </div>
                                            </div>
    
                                        </Link>
    
                                    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                            </div>
    
    
                        </div>
                    </div>



                </div>


            </Layout>
        </>
    )
}
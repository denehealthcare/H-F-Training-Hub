import Layout from "@/app/components/layout/layout";
import Accordion from "@/app/components/reuseable/accordion";


export default function resources(){

    

    return(
        <>
        <Layout>
                <div className="bg-[white] pt-[57px]">
                    <div className="max-w-[1440px] m-auto">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">

                            <h1 className=" text-[#686868] text-4xl r-bold flex justify-center items-end">Resources</h1>

                        </div>
                    </div>
                </div>

                <div className="w-[100%] bg-[#ECECEC]">
                    <svg viewBox="0 0 1536 155" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><path fill="#FFF" d="M 0 141 C 233.7 141 545.3 110 779 110 L 779 110 L 779 0 L 0 0 Z" stroke-width="0"></path> <path fill="#FFF" d="M 778 110 C 1005.4 110 1308.6 155 1536 155 L 1536 155 L 1536 0 L 778 0 Z" stroke-width="0"></path> </svg>
                </div>

                <div className="bg-[#ECECEC]">

                    <div className="max-w-[1440px] m-auto pt-[50px] sm:pt-[80px] sm:pb-[80px]">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">

                            <div className="grid grid-cols-2 gap-[30px] ">

                                <div className="col-span-1">

                                    <Accordion />

                                </div>


                                <div className="col-span-1">

                                    <Accordion />

                                </div>

                                <div className="col-span-1">

                                    <Accordion />

                                </div>


                                <div className="col-span-1">

                                    <Accordion />

                                </div>


                                <div className="col-span-1">

                                    <Accordion />

                                </div>


                                <div className="col-span-1">

                                    <Accordion />

                                </div>

                                <div className="col-span-1">

                                    <Accordion />

                                </div>


                                <div className="col-span-1">

                                    <Accordion />

                                </div>



                            </div>
                        
                        </div>
                    </div>

                </div>
        </Layout>
        </>
    )
}
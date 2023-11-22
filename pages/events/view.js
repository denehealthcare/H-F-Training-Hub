import Layout from "@/app/components/layout/layout"

export default function view(){

    return(
        <>
            <Layout>

                <div className="bg-[#ECECEC]">





                    <div className="bg-[url('/images/events-header.png')] bg-no-repeat bg-cover bg-center relative">

                        <div className="bg-[#68609c7e] z-50 h-[100%] w-[100%]">

                            <div className="max-w-[1440px] m-auto relative">
                                <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px] flex items-center">

                                    <h1 className=" text-white text-[2rem] sm:text-[2.5rem] r-bold py-[50px] sm:py-[100px]">Upcoming Events</h1>

                                </div>
                            </div>

                        </div>

                    </div>






                    <div className="max-w-[1440px] m-auto relative mt-[50px] sm:mt-[80px] pb-[50px] sm:pb-[80px]">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px] flex items-center">

                            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[90px] items-center">

                                <div className="lg:max-w-[530px]">

                                    <h2 className='r-bold text-[1.8rem] sm:text-[2rem] text-[#656565] ps-[23px]'>
                                        Event Number 1
                                    </h2>
                                    <p className="r-light text-[0.rem] text-[#656565] ps-[23px]">07 Nov 23</p>

                                    <div className="border-l-[6px] border-[#68609C] ps-[23px] py-[15px] mt-[30px]">

                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.
                                        </p>

                                        <p className="mt-2">
                                            Cras sed felis eget velit. Sed arcu non odio euismod lacinia at quis risus. Aliquet risus feugiat in ante metus dictum. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Pretium quam vulputate dignissim suspendisse in est ante in nibh.
                                        </p>

                                        <p className="mt-2">
                                            Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Blandit aliquam etiam erat velit scelerisque in dictum non. Amet porttitor eget.
                                        </p>



                                    </div>


                                </div>

                                <img src="/images/example-event.png" className="w-[100%] max-w-[600px]"/>






                            </div>



                        </div>
                    </div>


                </div>


            </Layout>
        </>
    )
}
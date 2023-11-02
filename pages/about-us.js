import Layout from "@/app/components/layout/layout"

export default function aboutUs(){

    return(
        <>
            <Layout>

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className="flex flex-col lg:flex-row justify-between items-center mt-[70px]">

                            <div className="flex flex-col justify-center gap-[13px] sm:max-w-[500px]">

                                <h1 className="r-bold text-[#EB6D6D] text-[1.25rem] text-start sm:text-center lg:text-start">WHO ARE WE</h1>

                                <h2 className="r-bold text-[#5F5F5F] text-[2rem] lg:text-[2.5rem] lg:leading-[50px] text-start sm:text-center lg:text-start">Helping General practice excel through quality training.</h2>

                                <p className="text-start sm:text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                            </div>

                            <img src="/images/about-us.png" className="w-[100%] lg:mt-[90px] max-w-[500px] lg:max-w-[1000px]"/>

                        </div>

                    </div>
                </div>



                <div className="bg-[url('/images/about-us-bg.png')] bg-center bg-no-repeat bg-cover relative">

                    <div className="bg-[#0da298b4] h-[100%] w-[100%] absolute top-0 z-10"></div>

                    <div className="max-w-[1440px] m-auto">
                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                            <div className="flex flex-col justify-center  lg:flex-row lg:justify-between py-[58px] z-50 relative gap-[20px] lg:gap-[50px]">
        
                                <h2 className="r-bold text-[white] text-[2rem] lg:text-[2.5rem] lg:leading-[50px] text-start sm:text-center lg:text-start self-center sm:max-w-[400px] lg:max-w-[490px]">What we do for general practice and how we can support you</h2>
        
                                <div className="lg:max-w-[501px] text-start sm:text-center lg:text-start">
                                    <p className="text-[white]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        
                                    <p className="mt-4 text-[white]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
        
                            </div>

                        </div>
                    </div>

                </div>






                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">





                        <div className="flex flex-col sm:flex-row justify-center mt-[50px] sm:mt-[80px] lg:mt-[133px] mb-[133px] gap-[90px]">

                            <div className="sm:max-w-[300px] text-center">
                                <div className="r-bold text-[#3EAFA8] text-[2rem] lg:text-[2.5rem]">50+</div>
                                <p className="text-center text-[20px]">Training courses and events hosted by the hammersmith training hub.</p>
                            </div>

                            <div className="sm:max-w-[300px] text-center">
                                <div className="r-bold text-[#3EAFA8] text-[2rem] lg:text-[2.5rem]">1200+</div>
                                <p className="text-center text-[20px]">General practice professional trained by the hammersmith training hub.</p>
                            </div>

                        </div>









                        <div className="border-[3px] border-[#F8F8F8] py-[30px] px-[35px] text-[#676767] rounded-[28px] flex flex-col lg:flex-row sm:justify-between gap-[30px] shadow-md lg:items-center ">

                            <div>

                                <h3 className="text-[1.5rem] lg:text-[2rem] r-reg text-center sm:text-start">Interested in training through hammersmith?</h3>
                                <p className="text-[1.1rem] text-center sm:text-start">Please take a look through our upcoming training events, if you have any questions just get in touch!</p>

                            </div>

                            <button className="bg-[#3EAFA8] px-[20px] py-[10px] text-white r-reg rounded-[50px]">
                                Upcoming events
                            </button>


                        </div>








                    </div>
                </div>



                <div className="bg-[url('/images/meet-the-team-bg.png')] bg-no-repeat bg-center bg-cover mt-[138px] pb-[139px] relative">
                    <div className="bg-[#0c11399d] absolute top-0 w-[100%] h-[100%] z-10"></div>

                    <div className="max-w-[1440px] m-auto">
                        <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] pt-[50px] pb-[50px] relative z-20">

                            <h3 className="text-white text-[2rem] r-bold border-l-[7px] border-[white] mt-[50px] pl-[20px]">MEET THE TEAM</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[80px] gap-[40px]">

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]"/>
                                    <h4 className="r-reg text-white text-[1.5rem]">Dave Smith</h4>
                                    <p className="text-white r-reg">CEO</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]" />
                                    <h4 className="r-reg text-white text-[1.5rem]">Dave Smith</h4>
                                    <p className="text-white r-reg">CEO</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]" />
                                    <h4 className="r-reg text-white text-[1.5rem]">Dave Smith</h4>
                                    <p className="text-white r-reg">CEO</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]" />
                                    <h4 className="r-reg text-white text-[1.5rem]">Dave Smith</h4>
                                    <p className="text-white r-reg">CEO</p>
                                </div>







                            </div>



                        </div>
                    </div>




                </div>







            </Layout>
        </>
    )
}
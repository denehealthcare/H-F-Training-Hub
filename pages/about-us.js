import Layout from "@/app/components/layout/layout";
import Link from "next/link";

export default function aboutUs(){

    const aboutUsBullets = [
        'Workforce planning and training needs analysis to best meet the needs of the patient populations and practices across the ICS',
        'Development and delivery of educational programmes to develop the primary care workforce at scale',
        'Supporting new primary care roles – help embed new staff into roles through the Additional Roles Reimbursement Scheme (ARRS)',
        'Opportunities for continuing professional development (CPD) for staff in primary care.',
        'Career support at all stages. Including retention programmes and portfolio options.',
        'Recruitment and training of educators',
        'Develop and retain staff through various programmes including mentoring and preceptorships',
        'Support practices and PCNs to become learning environments to support more trainee and student placements'
    ];

    return(
        <>
            <Layout>

                <div className="max-w-[1440px] m-auto">
                    <div className="ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]">

                        <div className="flex flex-col lg:flex-row justify-between items-center mt-[70px]">

                            <div className="flex flex-col justify-center gap-[13px] sm:max-w-[500px]">

                                <h1 className="r-bold text-[#EB6D6D] text-[1.25rem] text-start sm:text-center lg:text-start">WHO ARE WE</h1>

                                <h2 className="r-bold text-[#5F5F5F] text-[2rem] lg:text-[2.5rem] lg:leading-[50px] text-start sm:text-center lg:text-start">Helping General practice excel through quality training.</h2>

                                <p className="text-start sm:text-center lg:text-start">
                                    Hammersmith and Fulham Training hub supports all 28 GP practices that operate in the London Borough of Hammersmith & Fulham.
                                </p>
                                
                                
                                <p className="text-start sm:text-center lg:text-start">The Training Hub provides innovative ways of working with primary care to develop, train and educate our local workforce to meet the needs of our local population.</p>

                            </div>

                            <img src="/images/about-us.png" className="w-[100%] lg:mt-[90px] max-w-[500px] lg:max-w-[1000px]"/>

                        </div>

                        <div className="flex flex-col items-center lg:mt-[120px] lg:mb-[50px]">
                            <p className="sm:text-center max-w-[1000px] pb-[15px] text-[#5F5F5F] r-bold sm:text-xl lg:text-2xl">
                                The Training Hub continues to deliver key educational and workforce programmes to support primary care as laid out in priorities, activities and maturity of our organisation.
                            </p>

                            <ul className="mt-[20px] mb-[80px] flex flex-col gap-5">
                                {aboutUsBullets.map((bullet, index) => (
                                    <li 
                                        key={index}
                                        className="ms-4 flex items-center gap-4 r-semibold text-[#5F5F5F]"
                                    >
                                        <span>
                                            <svg width="15" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.5897 19.6645C25.4326 18.0126 28.6448 16.1038 29.6416 13.3874C30.6385 10.6343 29.457 7.11034 27.3156 4.6509C25.2111 2.22817 22.1466 0.94339 19.2667 0.356061C16.3499 -0.194559 13.5808 -0.084435 10.5902 0.539602C7.59956 1.20035 4.46125 2.30159 2.46749 4.6142C0.473734 6.96351 -0.301615 10.4875 0.10452 14.0115C0.510655 17.5354 2.06135 21.0227 4.7197 22.7113C7.37804 24.3631 11.144 24.2163 14.2085 23.4454C17.3099 22.6746 19.7836 21.3164 22.5897 19.6645Z" fill="url(#paint0_linear_153_275)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_153_275" x1="0" y1="0.000488281" x2="23.4146" y2="29.2688" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#EB6D6D" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                            {bullet}
                                    </li>
                                ))}
                            </ul>
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


                            <Link href={'/events'}>
                            
                                <button className="bg-[#3EAFA8] hover:bg-[#379992] px-[20px] py-[10px] text-white r-reg rounded-[50px]">
                                    Upcoming events
                                </button>

                            </Link>



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
                                    <h4 className="r-reg text-white text-[1.5rem]">Eve Costello</h4>
                                    <p className="text-white r-reg">Training Hub Lead</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]" />
                                    <h4 className="r-reg text-white text-[1.5rem]">Jessica Mathews</h4>
                                    <p className="text-white r-reg">Business Support Officer</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]" />
                                    <h4 className="r-reg text-white text-[1.5rem]">Katarina Durisova</h4>
                                    <p className="text-white r-reg">Research and Project Officer</p>
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/staff-image.png" className="w-[150px]" />
                                    <h4 className="r-reg text-white text-[1.5rem]">Mandekh Hussein</h4>
                                    <p className="text-white r-reg">Workforce Consultant</p>
                                </div>







                            </div>



                        </div>
                    </div>




                </div>

            </Layout>
        </>
    )
}
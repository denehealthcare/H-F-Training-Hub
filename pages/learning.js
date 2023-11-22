import Layout from "@/app/components/layout/layout";
import LearningBlock from "@/app/components/learning/learningBlock";

export default function learningAndDevelopment(){

    return(

        <Layout>

            <div className="bg-[url('/images/learning.png')] bg-no-repeat bg-center bg-t  relative">

                <div className="bg-[#35858693] z-50 h-[100%] w-[100%]">

                    <div className="max-w-[1440px] m-auto relative">
                        <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px] flex ">

                            <h1 className=" text-white text-[2rem] sm:text-[2.5rem] r-bold py-[100px]">Learning and development</h1>

                        </div>
                    </div>

                </div>

            </div>

            <div className="max-w-[1440px] m-auto mt-[50px] sm:mt-[80px] sm:pb-[80px]">
                <div className="ps-[3vw] pe-[3vw] sm:ps-[5vw] sm:pe-[5vw] xl:ps-[162px] xl:pe-[162px]">

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] sm:gap-[20px] lg:gap-[30px] xl:gap-[40px] mt-[70px]">
    
                    <div className="col-span-1">
                        <LearningBlock/>
                    </div>
    
    
                    <div className="col-span-1">
                        <LearningBlock />
                    </div>
    
                    <div>
                        <LearningBlock />
                    </div>
    
                    <div>
                        <LearningBlock />
                    </div>
    
    
                </div>
    
    
                    </div>
                </div>









        </Layout>
    )
}
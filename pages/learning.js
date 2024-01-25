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

                    <p>
                        Please see below a list of our upcoming training and events. Some training and courses are hosted on <a href="https://www.nwllearning.nhs.uk/login/index.php" className="text-blue-600 hover:text-blue-900" target="_blank">NWL Learning Hub</a> or <a href="https://www.e-lfh.org.uk/" className="text-blue-600 hover:text-blue-900" target="_blank">elearning for Health</a>. If you’re unable to find what you’re looking for please email us and we will be happy to help.    
                    </p>


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
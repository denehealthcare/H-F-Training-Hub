import Layout from "@/app/components/layout/layout";
import LearningBlock from "@/app/components/learning/learningBlock";

export default function learningAndDevelopment(){


    const programmes = [
        {
            title: 'ARRS',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] w-14"  viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm5.5-352c-16.8 0-30.4 13.7-30.3 30.5l.2 33.5H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H231.7l.1 9.7c.1 18.6-3.1 37-9.6 54.3H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-8.4 0-16.1-4.4-20.5-11.5s-4.7-16-.8-23.5l9.6-18.6c7.7-14.9 11.6-31.5 11.5-48.3l-.1-10.1H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h7.5l-.2-33.1c-.3-43.5 34.8-78.9 78.3-78.9c10 0 19.8 1.9 29.1 5.6l30.3 12.1c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4l-30.3-12.1c-3.6-1.4-7.4-2.2-11.3-2.2z" /></svg>,
            url: '/programmes/arrs'
        },
        {
            title: 'Apprenticeships',
            icon: < svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] w-14" viewBox="0 0 512 512" ><path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zm336.6-28.3c6.3-3.6 9.5-11.1 6.8-18c-2.1-5.5-4.6-10.8-7.4-15.9l-2.3-4c-3.1-5.1-6.5-9.9-10.2-14.5c-4.6-5.7-12.7-6.7-19-3l-2.9 1.7c-9.2 5.3-20.4 4-29.6-1.3s-16.1-14.5-16.1-25.1v-3.4c0-7.3-4.9-13.8-12.1-14.9c-6.5-1-13.1-1.5-19.9-1.5s-13.4 .5-19.9 1.5c-7.2 1.1-12.1 7.6-12.1 14.9v3.4c0 10.6-6.9 19.8-16.1 25.1s-20.4 6.6-29.6 1.3l-2.9-1.7c-6.3-3.6-14.4-2.6-19 3c-3.7 4.6-7.1 9.5-10.2 14.6l-2.3 3.9c-2.8 5.1-5.3 10.4-7.4 15.9c-2.6 6.8 .5 14.3 6.8 18l2.9 1.7c9.2 5.3 13.7 15.8 13.7 26.4s-4.5 21.1-13.7 26.4l-3 1.7c-6.3 3.6-9.5 11.1-6.8 18c2.1 5.5 4.6 10.7 7.4 15.8l2.4 4.1c3.1 5.1 6.4 9.9 10.1 14.5c4.6 5.7 12.7 6.7 19 3l2.9-1.7c9.2-5.3 20.4-4 29.6 1.3s16.1 14.5 16.1 25.1v3.4c0 7.3 4.9 13.8 12.1 14.9c6.5 1 13.1 1.5 19.9 1.5s13.4-.5 19.9-1.5c7.2-1.1 12.1-7.6 12.1-14.9v-3.4c0-10.6 6.9-19.8 16.1-25.1s20.4-6.6 29.6-1.3l2.9 1.7c6.3 3.6 14.4 2.6 19-3c3.7-4.6 7.1-9.4 10.1-14.5l2.4-4.2c2.8-5.1 5.3-10.3 7.4-15.8c2.6-6.8-.5-14.3-6.8-18l-3-1.7c-9.2-5.3-13.7-15.8-13.7-26.4s4.5-21.1 13.7-26.4l3-1.7zM184 224a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"/></svg>,
            url: '/programmes/apprenticeships'
        },
        {
            title: 'Advanced Practice',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] w-14" viewBox="0 0 448 512"><path d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z" /></svg>,
            url: '/programmes/advanced-practice'
        },
        {
            title: 'PCN Learning Environments',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] w-14" viewBox="0 0 640 512"><path d="M128 0C92.7 0 64 28.7 64 64V288H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H320V288H128V64H448V96h64V64c0-35.3-28.7-64-64-64H128zM512 128H400c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V256H544c-17.7 0-32-14.3-32-32V128zm32 0v96h96l-96-96z" /></svg>,
            url: '/programmes/pcn-learning-environments'
        },
        {
            title: 'Functional Skills',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="fill-[white] w-14" viewBox="0 0 512 512"><path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM285.3 208H336c26.5 0 48-21.5 48-48s-21.5-48-48-48c-.9 0-1.8 0-2.7 .1C326.7 93.4 308.9 80 288 80c-8.6 0-16.6 2.2-23.5 6.2C255.9 72.8 241 64 224 64s-31.9 8.8-40.5 22.2c-7-3.9-15-6.2-23.5-6.2c-26.5 0-48 21.5-48 48c-26.5 0-48 21.5-48 48c0 20.9 13.4 38.7 32.1 45.3c0 .9-.1 1.8-.1 2.7c0 26.5 21.5 48 48 48c5.6 0 11-1 16-2.7V288c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3c5 1.8 10.4 2.7 16 2.7c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16zM160 176v2.7l-.1 0c0-.9 .1-1.8 .1-2.7z" /></svg>,
            url: '/programmes/functional-skills'
        }




    ]

    return(

        <Layout>

            <div className="bg-[url('/images/learning.png')] bg-no-repeat bg-center bg-t relative">

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
                        Hammersmith and Fulham Training Hub offer support for all of the primary care workforce in H&F, through a number of programmes. Please click on the links below to see more information about each programme                    
                    </p>


                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[20px] lg:gap-[30px] xl:gap-[40px] mt-[70px]">
    
                    {programmes.map(p => (
                        <div className="col-span-1">
                            <LearningBlock
                                title={p.title}
                                icon={p.icon}
                                url={p.url}
                            />
                        </div>    
                    ))}
    
                </div>
    
    
                    </div>
                </div>









        </Layout>
    )
}
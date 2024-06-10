import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function FunctionalSkills() {

    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>Functional Skills</h1>

                    <p className="mt-5">
                        Its Free! GCSE or Functional Skills Maths & English!A great career building opportunity for you!
                    </p>

                    <p className="mt-5">
                        Part –time students, with no prior qualifications can join in- person, 3 hours a week, day or night at Southall, Ealing or Hammersmith. Scan the QR Code on your phone or use the links below to have a look at all the details and contact us at the H&F Training hub if you are interested. Visit the website for more info:
                    </p>

                    <p className="mt-5">
                        <a href="https://www.wlc.ac.uk/course-detail/gcse-mathematics/" target="_blank" className="text-blue-600 hover:text-blue-800">GCSE Mathematics (Adults)</a> 
                    </p>

                    <p className="mt-5">
                        <a href="https://www.wlc.ac.uk/course-detail/gcse-english/" target="_blank" className="text-blue-600 hover:text-blue-800">GCSE English (wlc.ac.uk)</a>
                    </p>

                    <p className="mt-5">
                        <a href="https://www.wlc.ac.uk/course-detail/gcse-english/" target="_blank" className="text-blue-600 hover:text-blue-800">GCSE English (wlc.ac.uk)</a>
                    </p>

                    <p className="mt-5">
                        QR codes found on the flyer <a href="/files/qr-codes.pdf" target="_blank" className="text-blue-600 hover:text-blue-800">here</a>:
                    </p>







                </main>

            </ResponsiveContainer>
        </Layout>
    )
}
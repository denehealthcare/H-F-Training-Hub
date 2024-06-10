import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function AdvancedPractice() {

    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>PCN Learning Environments</h1>

                    <p className="mt-5">
                        Historically, management of learning environments has been at individual practice level, which focusses the work on a few individuals within that one practice. With a move to PCN-wide learning environments, PCNs will have the opportunity to host learners across multiple practices, creating an integrated pathway for learning.
                    </p>

                    <p className="mt-5">
                        NHS England recognise the key role that PCNs take in increasing the workforce in Primary Care. The Training Hubs will work with NHS England to expand PCNs educational capacity to develop and support a sustainable workforce, to grow and support learners across all professions.
                    </p>

                    <p className="mt-5">
                        Please get in touch with Eve Costello if you have any questions about this evecostello@nhs.net. 
                    </p>

                </main>

            </ResponsiveContainer>
        </Layout>
    )
}
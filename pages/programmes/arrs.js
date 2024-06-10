import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function Arrs() {

    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>ARRS</h1>

                    <p className="mt-5">
                        The Additional Roles Reimbursement Scheme (ARRS) was introduced in 2019 to improve access to general practice. Through the scheme Primary Care Networks (PCNs) can claim reimbursement for salaries of 17 new roles within the Primary Care multidisciplinary team to meet the needs of the local population. In introducing these new roles primary care can expand the range of services and offers to improve access for patients.
                    </p>

                    <p className="mt-5">
                        The H&F Training Hub supports future workforce planning as one of their core functions. Training Hubs are designed to meet the educational needs of the multidisciplinary primary care team and bring together NHS organisations, community providers and local authorities. This resource will allow Training Hubs to work with their PCNs and support workforce planning, providing a valuable resource for systems developing their primary care workforce.
                    </p>

                    <p className="mt-5">
                        An overview of the current ARRS roles can be found below, for the most up to date information visit <a href="https://www.e-lfh.org.uk/programmes/new-roles-in-primary-care/" target="_blank" className="text-blue-500 hover:text-blue-700">NHS England E-Learning for Healthcare</a>.
                    </p>

                </main>

            </ResponsiveContainer>
        </Layout>
    )
}
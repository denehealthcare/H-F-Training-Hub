import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function AdvancedPractice() {

    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>Advanced Practice</h1>

                    <p className="mt-5">
                        Advanced clinical practitioners come from a range of professional backgrounds such as nursing, pharmacy, paramedics and occupational therapy. They are healthcare professionals educated to Master’s level and have developed the skills and knowledge to allow them to take on expanded roles and scope of practice caring for patients.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        What is advanced clinical practice?
                    </h2>

                    <p className="mt-5">
                        Advanced clinical practice (ACP) is a defined level of practice within clinical professions such as nursing, pharmacy, paramedics and occupational therapy. This level of practice is designed to transform and modernise pathways of care, enabling the safe and effective sharing of skills across traditional professional boundaries.
                    </p>

                    <p className="mt-5">
                        Advanced clinical practitioners (ACPs) are healthcare professionals, educated to Master’s level or equivalent, with the skills and knowledge to allow them to expand their scope of practice to better meet the needs of the people they care for.  ACPs are deployed across all healthcare settings and work at a level of advanced clinical practice that pulls together the four ACP pillars of clinical practice, leadership and management, education and research.
                    </p>

                    <p className="mt-5">
                        A definition of ACP, its underpinning standards and governance, can be found in the <a href="https://www.hee.nhs.uk/sites/default/files/documents/multi-professionalframeworkforadvancedclinicalpracticeinengland.pdf" target="_blank" className="text-blue-600 hover:text-blue-800">Multi-professional framework for advanced clinical practice in England</a>. The framework ensures there is national consistency in the level of practice across multi-professional roles that is clearly understood by the public, advanced clinical practitioners, their colleagues, education providers and employers.
                    </p>

                    <p className="mt-5">
                        The roles undertaken by advanced clinical practitioners are determined by the needs of the employer and how they require the level of practice to be deployed within their setting.  This may fit with nationally understood roles, such as those within emergency departments or very bespoke roles based upon the needs of a specific population such as an advanced clinical practitioner dietitian running a complex enteral feeding (tube feeding) service for paediatric patients).
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Why is advanced clinical practice important?
                    </h2>

                    <p className="mt-5">
                        <a href="https://www.hee.nhs.uk/sites/default/files/documents/multi-professionalframeworkforadvancedclinicalpracticeinengland.pdf" target="_blank" className="text-blue-600 hover:text-blue-800">The NHS Long-Term Plan</a> highlights how advanced clinical practice is central to helping transform service delivery and better meet local health needs by providing enhanced capacity, capability, productivity and efficiency within multi-professional teams.
                    </p>

                    <p className="mt-5">
                        Developing advanced clinical practice roles, as well as the level of practice just below and above ACP level should be considered a key component of contemporary workforce planning, as described in the NHS Long Term Plan.      
                    </p>

                </main>

            </ResponsiveContainer>
        </Layout>
    )
}
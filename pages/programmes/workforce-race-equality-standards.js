import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function WorkforceRaceEqualityStandards() {

    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>Workforce Race Equality Standards</h1>

                    <p className="mt-5">
                        <a href="/files/freedom-to-speak.pdf" target="_blank" className="text-blue-600 hover:text-blue-800">The Workforce Race Equality Standard (WRES)</a> was mandated in 2015 for NHS commissioners and NHS healthcare providers as a means of tackling workforce race inequality across the NHS. The goal of the strategy is to promote a safe, welcoming, and discrimination free environment for all NHS staff, including primary care.
                    </p>

                    <p className="mt-5">
                        Research shows that unfair treatment of Black Asian and Minority Ethnic (BME) staff adversely affects the care and treatment of all patients. Talent is also being wasted through unfairness in the appointment, treatment, and development of a large section of the NHS workforce, including primary care. The Northwest London Training Hubs, via the Primary School Board, is tasked with ensuring:
                    </p>

                    <ul className="ps-6 mt-5">
                        <li>1. <b>All</b> Primary Care colleagues will have access to independent support / Speak up Guardians.</li>
                        <li>2. <b>All</b> Primary Care colleagues will have access to Equality, Diversity, and Inclusion (EDI) training.</li>
                        <li>3. <b>The continuation</b> of WRES transformation by staying connected to the wider Health Education England WRES programme and roll out of the WRES Framework</li>
                    </ul>

                </main>

            </ResponsiveContainer>
        </Layout>
    )
}


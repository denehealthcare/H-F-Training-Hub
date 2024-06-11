import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function HealthcareSupportWorker() {

    const list = [
        'Care certificate',
	    'Treatment room management',
	    'Physiological measurements',
	    'New patient health checks',
	    'Wound Care',
	    'Hypertension',
	    'Diabetes',
	    'Respiratory care',
	    'Heart disease'
    ];

    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>Healthcare Support Worker Programmes</h1>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        HCSW Career Development
                    </h2>

                    <p className="mt-5">
                        The H&F Training Hub can support current or aspiring Healthcare Support Workers to gain all the knowledge & skills at the start of their new career. The course covers:
                    </p>

                    <ul className="list-disc ps-8">
                        {list.map(l => (
                            <li>
                                {l}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-5">
                        Please get in touch with Eve Costello for more details evecostello@nhs.net 
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Nursing Associate
                    </h2>

                    <p className="mt-5">
                        HCSWs can look at routes to becoming a registered Nursing Associate. The role is bridging the gap between health care support worker and registered nurse and helping meet the changing health and care needs of patients and the public. This is accessed through the two year Student Nursing Associate Apprenticeship. The main Universities we are working with that run the programme are Southbank University and University West London. 
                    </p>

                    <p className="mt-5">
                        During training to becoming a Nursing Associate you would work across all four fields of nursing: adult, children’s, mental health, and learning disability. You will undertake placements throughout the two year programme, which will mean travelling to different sites throughout the two years.
                    </p>

                    <p className="mt-5">
                        You'll undertake around one or two days a week of academic learning and work-based learning the rest of the week when you are not on placement.
                    </p>

                    <p className="mt-5">
                        Aspiring Nursing Associates must have their functional skills Maths and English.
                    </p>

                    <p className="mt-5">
                        Please note you must have the permission and support of your practice before commencing the programme. 
                    </p>
                    
                </main>

            </ResponsiveContainer>
        </Layout>
    )
}
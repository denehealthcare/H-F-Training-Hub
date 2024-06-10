import Layout from "@/app/components/layout/layout";
import ResponsiveContainer from "@/app/components/layout/responsiveContainer";

export default function Apprenticeships() {

    const clinicalApprenticeships = [
        {
            title: 'Nurse Associate',
            url: 'https://nwltraininghub.co.uk/trainee-nursing-associates/'
        },
        {
            title: 'Physician Associate',
            url: 'https://haso.skillsforhealth.org.uk/?s=Physician+Associate&lvl=all&sec=all#overview-431-label'
        },
        {
            title: 'Registered Nurse',
            url: 'https://haso.skillsforhealth.org.uk/?s=Registered+NUrse&lvl=all&sec=all#overview-9811-label'
        },
        {
            title: 'Healthcare Worker',
            url: 'https://haso.skillsforhealth.org.uk/?s=Healthcare+worker&lvl=all&sec=all#overview-395-label'
        },
        {
            title: 'Advanced Practitioner',
            url: 'https://haso.skillsforhealth.org.uk/?s=advanced+practitioner&lvl=all&sec=all#overview-355-label'
        }
    ];

    const nonClinicalApprenticeships = [
        {
            title: 'Business Administration',
            url: 'https://haso.skillsforhealth.org.uk/?s=Business+Administration&lvl=all&sec=all#overview-364-label'
        },
        {
            title: 'Community Health and Wellbeing',
            url: 'https://haso.skillsforhealth.org.uk/?s=Health+%26+wellbeing&lvl=all&sec=all#overview-24672-label'
        },
        {
            title: 'Operations Manager',
            url: 'https://haso.skillsforhealth.org.uk/?s=manager&lvl=all&sec=all#overview-6119-label'
        },
        {
            title: 'Data Technician',
            url: 'https://haso.skillsforhealth.org.uk/?s=Data+Technician&lvl=all&sec=all#overview-24556-label'
        },
        {
            title: 'Clinical Coder',
            url: 'https://haso.skillsforhealth.org.uk/?s=clinical+coder&lvl=all&sec=all#overview-366-label'
        },
        {
            title: 'Team Leader/Supervisor',
            url: 'https://haso.skillsforhealth.org.uk/?s=supervisor&lvl=all&sec=all#overview-454-label'
        },
    ];

    const benefits = [
        { title: 'Attract candidates who may not otherwise consider a career in healthcare.'},
        { title: 'Enhance your existing workforce by developing staff already working in Primary Care' },
        { title: 'Can be used to address skills shortages in the workforce' },
        { title: 'If done well apprenticeships can reduce training and recruitment costs as well as improving retention rates' },
        { title: 'Develop transferrable skills to increased flexibility across the workforce.' },
        { title: 'Assist with succession planning' },
        { title: 'Increase the number of younger people working in Primary Care'},
        { title: 'Recruit a diverse workforce' },
    ];




    return (

        <Layout>
            <ResponsiveContainer>

                <main className="mb-5">

                    <h1 className={`text-[#5F5F5F] text-4xl r-bold pt-[50px] md:pt-[129px]`}>Apprenticeships</h1>

                    <p className="mt-5">
                        Apprenticeships are on the job training combined with off the job learning leading to national qualifications and are available for clinical and non-clinical roles. There are different levels of apprenticeships from intermediate to degree levels. Typically apprenticeships are around 20% ‘off the job’ training and 80% normal work and will take 1 to 5 years to complete depending on the level of apprenticeship.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Types of Apprenticeships
                    </h2>

                    <p className="mt-2">
                        There are many apprenticeships available including;
                    </p>

                    <p className="mt-2 font-bold text-[#5F5F5F]">
                        Clinical
                    </p>

                    <ul className="list-disc ps-8">
                        {clinicalApprenticeships.map(c => (
                            <li>
                                <a href={c.url} target="_blank" className="text-blue-600 hover:text-blue-800">
                                   {c.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-2 font-bold text-[#5F5F5F]">
                        Non-Clinical
                    </p>

                    <ul className="list-disc ps-8">
                        {nonClinicalApprenticeships.map(c => (
                            <li>
                                <a href={c.url} target="_blank" className="text-blue-600 hover:text-blue-800">
                                    {c.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-2">
                        For a full list of current healthcare apprenticeships visit the website for <a href="https://haso.skillsforhealth.org.uk/standards/" target="_blank" className="text-blue-600 hover:text-blue-800">Healthcare Apprenticeships Standards Online (HASO)</a> or here for a summary of <a href="https://haso.skillsforhealth.org.uk/wp-content/uploads/2023/07/2022.07.11-Which-apprenticeship-qualifications-support-the-primary-care-workforce.pdf" target="_blank" className="text-blue-600 hover:text-blue-800">apprenticeships that support the Primary Care workforce</a>.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Benefits to General Practices
                    </h2>

                    <ul className="list-disc ps-8">
                        {nonClinicalApprenticeships.map(c => (
                            <li>
                                <a href={c.url} target="_blank" className="text-blue-600 hover:text-blue-800">
                                    {c.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Entry Requirements
                    </h2>

                    <p className="mt-2">
                        Each apprenticeship will have different requirements however all apprenticeships require Maths and English qualifications, at 4-9 (A-C) GCSE grade levels, or equivalent English and Maths qualifications.
                    </p>

                    <p className="mt-2">
                        If you do not have English and Maths qualifications matching the requirements you can undertake Functional Skills qualifications before applying for an apprenticeship. Contact your local college for course dates.
                    </p>

                    <p className="mt-2">
                        In addition to Functional Skills you must have support from your practice partners and management team and an understanding of the commitment required for your chosen apprenticeship programme.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Levy Funding
                    </h2>

                    <p className="mt-2">
                        Funding is available to contribute towards the cost of apprenticeships. The funding is different depending on whether you’re a non-levy payer or a levy payer. Most employers in Primary Care will not be paying the Levy Fee but can apply for a levy fee transfer.
                    </p>

                    <p className="mt-2">
                        Most GP practices are able to have 100% of the course fees paid for by a levy transfer from a trust facilitated by the Training Hub. Funding varies from £1,500 to £27,000 depending on the apprenticeship.
                    </p>

                    <p className="mt-2">
                        More information can be found on the <a href="https://www.gov.uk/government/publications/apprenticeship-funding/apprenticeship-funding" target="_blank" className="text-blue-600 hover:text-blue-800">Gov.uk</a> website.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Levy-payers
                    </h2>

                    <p className="mt-2">
                        If you’re a UK employer with an annual payroll of more than £3m, you must pay a levy which can only be used for the training and assessment of apprentices in your organisation. 
                    </p>

                    <p className="mt-2">
                        You’ll fund your apprenticeship through a digital levy account to which Government adds 10%. If the cost exceeds the credit in your account, the Government will contribute 95% of these extra costs. If you don’t choose to use your levy or donate it the government will reclaim it after 24 months. You can find more details about this in this <a href="https://www.gov.uk/government/publications/apprenticeship-funding/apprenticeship-funding" target="_blank" className="text-blue-600 hover:text-blue-800">video for employers who pay the apprenticeship levy</a>.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Non-levy payers
                    </h2>

                    <p className="mt-2">
                        You will pay for 5% of the cost of the apprenticeship, up to the Government funding rate, and the Government will pay the rest of the cost to the learning provider. However, levy-paying organisation can transfer some of their levy to you to mitigate this cost.
                    </p>

                    <p className="mt-2">
                        Non-levy payers can now access the government’s digital Apprenticeship Service. Find out more information on the benefits and how to access this on <a href="https://www.apprenticeships.gov.uk/404" target="_blank" className="text-blue-600 hover:text-blue-800">Education and Skills Funding Agency website</a> or via this <a href="https://www.youtube.com/watch?v=dR1MPVdIG78" target="_blank" className="text-blue-600 hover:text-blue-800">YouTube video</a>.
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        Levy Fund Transfers
                    </h2>

                    <p className="mt-2">
                        A levy-paying employer can choose to donate up to 25% of their apprenticeship levy fund to any other employer who can then use it to fund learning and assessment of their apprentices.
                    </p>

                    <p className="mt-2">
                        <a href="https://www.youtube.com/watch?v=C-tdOv37Iu8" target="_blank" className="text-blue-600 hover:text-blue-800">Watch The Department of Education Sector video</a> to find out about the apprenticeship levy transfer, providing information for organisations wanting to transfer their levy or organisations looking to receive transferred levy funds.
                    </p> target="_blank"

                    <p className="mt-2">
                        If you are an organisation hoping to benefit from a levy transfer please read the <a href="https://www.gov.uk/guidance/apprenticeship-funding-rules-for-employers/apprenticeships-funded-by-transfer-of-levy-funds" target="_blank" className="text-blue-600 hover:text-blue-800">‘Apprenticeship funding rules for employers’</a>. 
                    </p>

                    <h2 className="mt-5 text-[#5F5F5F] text-lg r-bold">
                        How to access levy funding
                    </h2>

                    <p className="mt-2">
                        As an employer your organisation needs to set up a Digital Apprenticeship Service (DAS) account with the Government. If your organisation has employed an Apprentice previously you may already have an account that someone manages. New update has been issued for employer registration on Apprenticeship Service. Please follow the Department for Education gov.uk links to find out more:
                    </p>

                    <ol className="mt-5">
                        <li>
                            1. <a href="https://esfa.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fhelp.apprenticeships.education.gov.uk%2Fhc%2Fen-gb%2Farticles%2F12204774920722-REGISTER-FOR-AN-APPRENTICESHIP-SERVICE-ACCOUNT%3Fmkt_tok%3DODY4LU9UUC03NDAAAAGNDHVcwTrjOX6yJh7U08xF66wH95KZnw88meFd7cF930WLCD6fklQun5TM9bZRSmTCdSOMnI_hDqvOrEacGbQOCwDK57h94Vg5ylxq9aF3&theme=hc&locale=en-gb&brand_id=360000366759&auth_origin=360000366759%2Ctrue%2Ctrue" target="_blank" className="text-blue-600 hover:text-blue-800">REGISTER FOR AN APPRENTICESHIP SERVICE ACCOUNT – Apprenticeship Service Support (education.gov.uk)</a>
                        </li>
                        <li>
                            2. How to register and use the apprenticeship service as an employer – GOV.UK <a href="https://www.gov.uk/" target="_blank" className="text-blue-600 hover:text-blue-800">(www.gov.uk)</a>
                        </li>
                    </ol>

                    <p className="mt-2">
                        A Digital Apprenticeship Service (DAS) Account is required for levy transfers information on how to do this can be found online: <a href="https://www.youtube.com/watch?v=YcbaCKifAKw" target="_blank" className="text-blue-600 hover:text-blue-800">Registering an account on the Apprenticeship Service</a>.
                    </p>


























                </main>

            </ResponsiveContainer>
        </Layout>
    )
}
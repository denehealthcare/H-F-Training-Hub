import '../src/app/globals.css';
import Layout from "@/app/components/layout/layout";
import Hero from '@/app/components/home/hero';
import WhoAreWe from '@/app/components/home/whoAreWe';
import Training from '@/app/components/home/training';
import Services from '@/app/components/home/services';


export default function Index(){

    return(
        <Layout>

            <Hero/>
            <WhoAreWe/>
            <Training/>
            <Services/>

        </Layout>
    )
}
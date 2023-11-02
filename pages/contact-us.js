import '../src/app/globals.css';
import Layout from "@/app/components/layout/layout";
import Header from "@/app/components/contact/header";
import ContactDetails from '@/app/components/contact/contactDetails';
import Map from '@/app/components/contact/map';
import ButtonsBanner from '@/app/components/contact/buttonsBanner';

export default function ContactUs(){

    return(
        <>
        <Layout>
            <Header/>
            <ContactDetails/>
            <Map/>
            <ButtonsBanner/>
        </Layout>
        </>
    )

}
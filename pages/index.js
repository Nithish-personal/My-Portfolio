import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Homepage from '../components/homepage-content'

function HomePage() {
    return (
        <>  
            <Head>                
                <title>My Portfolio</title>
            </Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <Header/>
            <Homepage/>
            <Footer/>
        </>

        )
 }
 
 export default HomePage
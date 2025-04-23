    import React from 'react'
    import Navbar from '../asample/naviagtion'
    import AnimatedBubbles from './bubble'
    import Industries from './industries'
    import GlassMirrorCard from './glass'
    import InsightSection from '../graphics/insight'
    import Footer from '../mainpage/footer'
    const page = () => {
    return (
        <div>
            <Navbar/>
        <AnimatedBubbles/>
       
        <Industries/>
        <InsightSection/>
        <Footer/>
        
        
        </div>
    )
    }

    export default page

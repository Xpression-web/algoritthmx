    import React from 'react'
    import SEOAmazonSection from './home'
    import AmazonServices from './amazonservices'
    import AmazonStrategy from './opportunity'
    import AmazonSEOBenefits from './benefits'
    import AmazonMarketingSection from './unmatched'
    import AmazonRevenueSection from './revenue'
    import AmazonReachSection from './ambiations'

    const page = () => {
    return (
        <div>
        <SEOAmazonSection/>
        <AmazonServices/>
        <AmazonStrategy/>
        <AmazonSEOBenefits/>
        <AmazonMarketingSection/>
        <AmazonRevenueSection/>
        <AmazonReachSection/>
        </div>
    )
    }

    export default page

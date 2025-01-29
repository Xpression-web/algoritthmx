import React from 'react'
import MediaSection from './home'
import WhatSection from './what'
import SocialMediaAudit from './key'
import SocialCommitment from './commitment'
import ComplimentarySection from './complimentary'
import Accordion from './chosee'

const page = () => {
  return (
    <div>
    <MediaSection/>
    <WhatSection/>
    <SocialMediaAudit/>
    <SocialCommitment/>
    <ComplimentarySection/>
    <Accordion/>
    </div>
  )
}

export default page

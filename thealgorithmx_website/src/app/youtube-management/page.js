import React from 'react'
import YoutubeSection from './home'
import YoutubeHeroSection from './increase'
import YoutubeGrowHeroSection from './connect'
import YoutubeSmoothScrollStack from './solutions'
import YoutubeServicesGrid from './help'
import YoutubeBusinessSection from './need'

const page = () => {
  return (
    <div>
    <YoutubeSection/>
    <YoutubeHeroSection/>
    <YoutubeGrowHeroSection/>
    <YoutubeSmoothScrollStack/>
    <YoutubeServicesGrid/>
    <YoutubeBusinessSection/>
    </div>
  )
}

export default page

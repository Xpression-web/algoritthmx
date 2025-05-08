// pages/index.js
'use client'
import { useState,useEffect } from 'react';
import Head from 'next/head';


export default function Home() {
  const [activeMenu, setActiveMenu] = useState('Scoping Session');
  const [expandedSection, setExpandedSection] = useState('Discover');
  const [isScrolling, setIsScrolling] = useState(false);
  
  const menuSections = [
    {
      title: 'Discover',
      items: ['Scoping Session', 'Business Analysis']
    },
    {
      title: 'Design',
      items: ['Scoping Session1', 'Business Analysis1']
    },
    {
      title: 'Engineering',
      items: ['Scoping Session2', 'Business Analysis2']
    }
  ];

  const handleSectionClick = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  
    // Set scrolling flag to true
    setIsScrolling(true);
    
    // Scroll to section when title is clicked
    const scrollId = section.toLowerCase();
    const element = document.getElementById(scrollId);
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 800); // 800ms should cover most smooth scrolls
    } else {
      setIsScrolling(false); // Reset flag if element not found
    }
  };
  
  const handleMenuItemClick = (item) => {
    setActiveMenu(item);
    setIsScrolling(true);
    
    const element = document.getElementById(item.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    } else {
      setIsScrolling(false); // Reset flag if element not found
    }
  };

  useEffect(() => {
  const handleScroll = () => {
    // Skip updating if a programmatic scroll is in progress
    if (isScrolling) return;
    
    const offset = 120;
    let currentItem = '';
    let currentSection = '';

    menuSections.forEach(section => {
      const sectionId = section.title.toLowerCase();
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        const top = sectionEl.getBoundingClientRect().top;
        if (top < offset + 50) {
          currentSection = section.title;
        }
      }

      section.items.forEach(item => {
        const itemId = item.replace(/\s+/g, '-').toLowerCase();
        const itemEl = document.getElementById(itemId);
        if (itemEl) {
          const top = itemEl.getBoundingClientRect().top;
          if (top < offset + 50) {
            currentItem = item;
          }
        }
      });
    });

    if (currentItem && currentItem !== activeMenu) {
      setActiveMenu(currentItem);
    }

    if (currentSection && currentSection !== expandedSection) {
      setExpandedSection(currentSection);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [activeMenu, expandedSection, menuSections, isScrolling]); 
  

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Product Development Workflow</title>
        <meta name="description" content="Product Development Workflow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section - Full width */}
      <div className="relative bg-black text-white py-24">
        <div className="max-w-5xl mx-auto px-4 pt-[50px]">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-start mb-8">
          <span style={{ 
  position: 'relative', 
  display: 'inline', 
  zIndex: 1, 
  color: '#f5f5f5'  // Light text color for contrast
}}>
  Mobile App User
  <div style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#00bcd4', // A cyan highlight works well on black
    zIndex: -1,
    opacity: 0.6,  // Optional: makes it more "glassy"
    borderRadius: '4px' // Optional: slight rounding
  }}></div>
</span>

            {' '}Interface & Experience Design
          </h1>
          <p className="text-xl text-start text-white mb-8 ">
            With our defined approach and step by step process, we deliver beyond what's expected. 
            Our team doesn't limit itself to delivering a product. We craft brilliance together and deliver experiences that are ever-evolving.
          </p>
          <div className="text-start">
            <button className="bg-[#00bcd4] text-black px-8 py-3 rounded-lg 	hover:bg-[#00838f] transition duration-200">
              Book a free consultation
            </button>
          </div>
        </div>
      </div>

      {/* Content Section with Sidebar and Sticky Form */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-64 bg-black  pt-8 px-4 sticky top-[100px] h-screen overflow-y-auto">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-6">
              <div 
                className="flex items-center cursor-pointer mb-2"
                onClick={() => handleSectionClick(section.title)}
              >
               <div
                className={`h-0.5 mr-4 transition-all duration-500 ${expandedSection === section.title ? 'bg-white w-16' : 'bg-gray-300 w-8'}`}
              />
                <span className="text-white font-medium">{section.title}</span>
              </div>
              
              {expandedSection === section.title && section.items.map((item) => (
                <div 
                  key={item}
                  className="flex items-center cursor-pointer ml-16 mb-2"
                  onClick={() => handleMenuItemClick(item)}
                >
                  <div className="w-2 h-0.5 mr-2 bg-gray-500" />
                  <span className={`text-sm transition-colors duration-300 ${activeMenu === item ? 'text-[#00bcd4] font-semibold' : 'text-white'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

       

        {/* Middle Content */}
{/* Middle Content */}
<div className="flex-1">
  <div className="max-w-3xl mx-auto py-12 px-4">
    {/* DISCOVER SECTION */}
    <div id="discover" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Discover Phase
      </h2>
      <p className="text-lg text-white mb-12">
        The foundation of every successful product begins with comprehensive discovery. Our discovery phase ensures we fully understand your vision, goals, and market positioning before moving forward.
      </p>
    </div>

    {/* Scoping Session */}
    <div id="scoping-session" className="mb-20">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Scoping Session
      </h1>
      <p className="text-lg text-white mb-6">
        A scoping session is the initial interaction between you and our tech team, designed to capture your vision and translate it into actionable requirements.
      </p>
      <p className="text-lg text-white mb-8">
        We believe clear communication is the cornerstone of transforming innovative ideas into successful products. Our scoping session provides:
      </p>

      <ul className="space-y-6 mb-12">
        <li className="flex items-start">
          <div className="rounded-full bg-[#00bcd4] h-2 w-2 mt-2 mr-4"></div>
          <p className="text-lg text-white">
            <span className="font-semibold">Bilateral Communication:</span> Two-way knowledge exchange ensures both teams understand priorities and constraints
          </p>
        </li>
        <li className="flex items-start">
          <div className="rounded-full bg-[#00bcd4] h-2 w-2 mt-2 mr-4"></div>
          <p className="text-lg text-white">
            <span className="font-semibold">Strategic Planning:</span> Comprehensive project roadmap with timelines, milestones, and deliverables
          </p>
        </li>
        <li className="flex items-start">
          <div className="rounded-full bg-[#00bcd4] h-2 w-2 mt-2 mr-4"></div>
          <p className="text-lg text-white">
            <span className="font-semibold">Cultural Alignment:</span> Understanding our agile methodologies and development practices
          </p>
        </li>
        <li className="flex items-start">
          <div className="rounded-full bg-[#00bcd4] h-2 w-2 mt-2 mr-4"></div>
          <p className="text-lg text-white">
            <span className="font-semibold">Scope Documentation:</span> Detailed scope of work that defines features, functionalities, and success metrics
          </p>
        </li>
        <li className="flex items-start">
          <div className="rounded-full bg-[#00bcd4] h-2 w-2 mt-2 mr-4"></div>
          <p className="text-lg text-white">
            <span className="font-semibold">Technology Stack:</span> Customized selection of technologies best suited for your requirements
          </p>
        </li>
        <li className="flex items-start">
          <div className="rounded-full bg-[#00bcd4] h-2 w-2 mt-2 mr-4"></div>
          <p className="text-lg text-white">
            <span className="font-semibold">Budget Framework:</span> Transparent cost estimates with detailed delivery timeline
          </p>
        </li>
      </ul>

      <div className="bg-gray-900 p-6 rounded-lg mb-12">
        <h3 className="text-xl font-semibold text-white mb-4">Key Deliverables</h3>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Project Requirements Document (PRD)</li>
          <li>Technical Architecture Overview</li>
          <li>Project Timeline & Milestones</li>
          <li>Cost Estimation Report</li>
          <li>Risk Assessment Matrix</li>
        </ul>
      </div>
    </div>
{/* Business Analysis */}
<div id="business-analysis" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Business Analysis
      </h2>
      <p className="text-lg text-white mb-8">
        Our business analysis process creates a solid foundation for your product by understanding market dynamics, user needs, and competitive positioning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Market Research</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Industry trends analysis</li>
            <li>• Target audience segmentation</li>
            <li>• Market size estimation</li>
            <li>• Customer pain points identification</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Competitive Analysis</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Competitor feature mapping</li>
            <li>• SWOT analysis</li>
            <li>• Market positioning strategy</li>
            <li>• Differentiation opportunities</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white mb-6">Our Approach</h3>
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-[#00bcd4] text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Discovery Workshops</h4>
            <p className="text-gray-300">Interactive sessions to understand your business goals, challenges, and vision</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[#00bcd4] text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">User Research</h4>
            <p className="text-gray-300">User interviews, surveys, and behavioral analysis to understand your target audience</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[#00bcd4] text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Requirements Analysis</h4>
            <p className="text-gray-300">Translate business needs into detailed functional and non-functional requirements</p>
          </div>
        </div>
      </div>
    </div>

    {/* DESIGN SECTION */}
    <div id="design" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Design Process
      </h2>
      <p className="text-lg text-white mb-12">
        Our design process transforms insights into intuitive interfaces that deliver exceptional user experiences while maintaining your brand identity.
      </p>
    </div>

    {/* Scoping Session 1 (Design) */}
    <div id="scoping-session1" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        UX/UI Design Strategy
      </h2>
      <p className="text-lg text-white mb-8">
        Strategic design planning that aligns user experience with business objectives to create products that users love and businesses profit from.
      </p>

      <div className="space-y-12">
        <div className="border-l-4 border-[#00bcd4] pl-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Information Architecture</h3>
          <p className="text-gray-300 mb-4">
            We structure your content and features for optimal user flow and discoverability.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Content organization strategies</li>
            <li>• User journey mapping</li>
            <li>• Navigation structure design</li>
            <li>• Sitemap development</li>
          </ul>
        </div>

        <div className="border-l-4 border-[#00bcd4] pl-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Visual Design System</h3>
          <p className="text-gray-300 mb-4">
            Creating cohesive visual languages that reflect your brand and resonate with users.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• Brand identity integration</li>
            <li>• Color palette development</li>
            <li>• Typography selection</li>
            <li>• Design component library</li>
          </ul>
        </div>

        <div className="border-l-4 border-[#00bcd4] pl-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Accessibility Standards</h3>
          <p className="text-gray-300 mb-4">
            Ensuring your product is inclusive and usable by everyone.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>• WCAG compliance</li>
            <li>• Screen reader optimization</li>
            <li>• Color contrast testing</li>
            <li>• Keyboard navigation</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Business Analysis 1 (Design) */}
    <div id="business-analysis1" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Design Research & Validation
      </h2>
      <p className="text-lg text-white mb-8">
        Data-driven design decisions backed by user research and iterative testing to ensure optimal user engagement and satisfaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">User Testing Methods</h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Usability testing sessions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>A/B testing strategies</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Heatmap analysis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>User feedback loops</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Metrics & Analytics</h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>User engagement metrics</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Conversion rate optimization</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>User satisfaction scores</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Performance indicators</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#00bcd4] bg-opacity-10 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-white mb-4">Design Iteration Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-[#00bcd4] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">1</div>
            <h4 className="text-white font-semibold mb-2">Research</h4>
            <p className="text-gray-300 text-sm">Gather user insights and define design goals</p>
          </div>
          <div className="text-center">
            <div className="bg-[#00bcd4] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">2</div>
            <h4 className="text-white font-semibold mb-2">Design</h4>
            <p className="text-gray-300 text-sm">Create and prototype solutions</p>
          </div>
          <div className="text-center">
            <div className="bg-[#00bcd4] text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">3</div>
            <h4 className="text-white font-semibold mb-2">Validate</h4>
            <p className="text-gray-300 text-sm">Test, measure, and refine</p>
          </div>
        </div>
      </div>
    </div>

    {/* ENGINEERING SECTION */}
    <div id="engineering" className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Engineering Excellence
      </h2>
      <p className="text-lg text-white mb-12">
        Cutting-edge development practices combined with robust architecture to build scalable, secure, and performant applications.
      </p>

      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Development Stack</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Modern frameworks (React, Vue, Angular)</li>
              <li>• Cloud infrastructure (AWS, GCP, Azure)</li>
              <li>• Microservices architecture</li>
              <li>• DevOps practices</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Automated testing</li>
              <li>• Code review processes</li>
              <li>• Performance monitoring</li>
              <li>• Security audits</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Agile Methodology</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Scrum framework</li>
              <li>• Sprint planning</li>
              <li>• Daily standups</li>
              <li>• Continuous integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-2xl font-semibold text-white mb-8">Our Engineering Process</h3>
          <div className="space-y-8">
            <div className="flex items-start">
             
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Architecture Design</h4>
                <p className="text-gray-300">Design scalable system architecture that aligns with your business needs and growth projections</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#00bcd4] rounded-full w-8 h-8 flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Development Sprint</h4>
                <p className="text-gray-300">Iterative development cycles with regular feedback loops and continuous improvement</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#00bcd4] rounded-full w-8 h-8 flex items-center justify-center mr-6 flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Testing & Deployment</h4>
                <p className="text-gray-300">Comprehensive testing followed by smooth deployment with minimal downtime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00bcd4] to-cyan-600 p-8 rounded-lg text-black">
          <h3 className="text-2xl font-bold mb-4">Our Tech Commitment</h3>
          <p className="text-lg">
            We're committed to using the latest technologies while maintaining stability and reliability. Our team continuously learns and adapts to emerging trends to deliver future-proof solutions.
          </p>
        </div>
      </div>
    </div>
    
  </div>
</div>

        {/* Right Form */}
        <div className=" flex items-center justify-center md:items-start">
        <div className=" w-80 sticky top-[100px] p-[10px]  overflow-y-auto pt-8">
        <div className=" backdrop-blur-md rounded-lg overflow-hidden shadow-xl mx-auto my-4 max-w-xs border border-white/20">


            {/* Image at the top */}
            <div className="relative h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-black opacity-80"></div>




              <img 
                src="/images/ai11.avif" 
                alt="Two people meeting" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-xl md:text-2xl font-bold">Transform your business! Build a powerful mobile app now!</h2>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-4 text-white">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Message"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-white text-sm">3 + 4 =</span>
                  <input
                    type="text"
                    className="w-16 bg-black border border-white rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit"
                    className="bg-[#00bcd4] text-black px-6 py-2 rounded 	hover:bg-[#00838f] transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
        {/* Mobile Form at the bottom  
        <div className="block md:hidden w-full px-4 pb-8">
          <div className="bg-black rounded-lg overflow-hidden shadow-xl mx-auto max-w-xs">
            
            <div className="relative h-24">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-lg font-bold">Transform your business! Build a powerful mobile app now!</h2>
              </div>
            </div>
            
            
            <div className="p-4 text-white">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Message"
                    className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-gray-300 text-sm">3 + 4 =</span>
                  <input
                    type="text"
                    className="w-16 bg-gray-700 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
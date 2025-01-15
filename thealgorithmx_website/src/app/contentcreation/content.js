import React from "react";
import styles from "./style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "800",
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

export default function Content() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className={` ${styles["container1"]} w-full max-w-[1200px] mx-auto ${styles["algo-content-creation-services"]}`}>
        {/* Left Section (Sticky) */}
  <div className={` ${styles["flx_left"]} flex flex-col lg:flex-row`}>
  <div className="flex flex-col md:flex-col lg:flex-col space-y-2">
      <span className={`${styles["explore"]} ${monsterfont1.className} text-white`}>Explore Our</span>
      <div className="space-x-2">
      <span className={`${styles["explore"]}${monsterfont.className} text-white`}>Content</span>
      </div>
      <div>
      <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>Creation</span>
      </div>
      <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>Variety</span>
  </div>

  {/* Vertical Line and Text */}
  <div className="flex items-center">
    <div className="h-20 border-l-8 border-blue-500 rounded-full mr-6"></div>
    <p className={` ${styles["content"]} text-semi-white`}>
      <span className={` ${monsterfont3.className}`}>DISCOVERING OUR RANGE</span>
      <br />
      <span className={` ${monsterfont2.className}`}>OF CONTENT</span>
    </p>
  </div>
</div>


        {/* Right Section (Scrollable) */}
        <div className= {`${styles["flx_right"]}`}>
        <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`} >Article Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
              At our premier content creation firm, we carefully plan article concepts and generate top-notch content tailored to enhance your brand’s online presence.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Product Description</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Our content creation agency crafts compelling product descriptions that highlight the key features, captivate your customers and drive conversions.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Editing & Proofreading 
            </h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            AlgorithmX offers excellent proofreading services to ensure your content is consistently error-free.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>White Paper</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            We produce well-researched documents that establish your brand’s thought leadership and credibility.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Blog Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Our well-written and engaging SEO-optimized blogs enhance your SERP ranking, drive traffic, and elevate your visibility online.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Website Content</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            We offer comprehensive website content creation services, creating compelling content that effectively communicates your brand’s message and reaches your desired audience.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>SEO Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            AlgorithmX’s SEO content creation services involve thorough keyword research that enables us to craft tailored and optimized content for your business needs.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Press Release</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Being a content creation marketing agency, we create media exposure and enhance brand recognition with our on-time press releases.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Article Rewriting</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Iterate pre-written articles to enhance content quality and boost SEO effectiveness.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Copy Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Our engaging advertising copies attract and convert, establishing a strong online presence across all major content creation platforms.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>FAQ's</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            We create informative, clear, and concise FAQs that educate your clients and address their common queries as part of your content creation services.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Newsletter Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            AlgorithmX produces comprehensive and well-structured newsletters that list your latest updates and insights to keep your subscribers informed and engaged.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Technical Content Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Being one of the best content creation companies in USA, we simplify complex information with accuracy and clarity for your audience.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Emailers</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            We design persuasive and precise email campaigns to drive conversions and promote customer relationships to reach your marketing goals.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Case Studies</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Our team of content creation specialists provides detailed case studies with your achievements and solutions to build trust with your customers and showcase your expertise.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Magazine Writing</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            AlgorithmX’s content and branding creation team covers a wide range of topics with in-depth research tailored to your style to inform and educate your clients effectively.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>E-book </h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            We generate impactful e-books to assist you in digitally accessing untapped markets.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Social Media Posts</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Our social media content creation agency focuses on crafting on-brand content for each of your social media platforms with consistent updates to maintain engagement.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

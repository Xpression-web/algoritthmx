    import React from 'react';
    import { Montserrat } from 'next/font/google';
    import styles from "../android-app/style.module.css";

    const monsterfont1 = Montserrat ({
    subsets : ["latin"],
    weight :"400",
    })
    const monsterfont = Montserrat ({
    subsets : ["latin"],
    weight :"800",
    })


    const timelineSteps = [
    {
        number: "1",
        title: "Research",
        description:
        "In any app marketing campaign, the initial and most important step involves conducting research to understand market conditions thoroughly. It is essential to know what interests your users and how you can better meet their needs. Through extensive research, our ASO services company in USA identifies the relevant keywords to target in order to boost your app downloads. By analyzing the market and competition, we determine the most productive marketing strategies, ensuring your app includes sought-after features and demanded functionalities, setting you apart from your competitors and attracting more app downloads",
        color: "text-red-500",
        dotColor: "bg-red-500",
    },
    {
        number: "2",
        title: "Market Analysis",
        description:
        "At AlgortihmX, we examine the competitive landscape and positioning of your app in the app store to discern the opportunities available. We conduct thorough analysis to understand the distinguishing features and USPs of your app using which we develop a tailored app store marketing strategy that targets your desired demographics, attracts more customers and boost app downloads.",
        color: "text-red-400",
        dotColor: "bg-red-400",
    },
    {
        number: "3",
        title: "Strategic Planning",
        description:
        "In this phase, our leading app store optimization agency grasps your business goals for the app to ensure our custom ASO strategy aligns with them. We constantly assist you in developing a data-backed marketing plan resonating with your customer behavior, guaranteeing that your marketing initiatives are comprehensive and centered on enhancing positive outcomes.",
        color: "text-orange-500",
        dotColor: "bg-orange-500",
    },
    {
        number: "4",
        title: "Keywords Research",
        description:
        "Our dedicated app store optimization specialists conduct comprehensive keyword research to identify the relevant keywords your intended audience is searching for, enabling you to attract more downloads and improve the app’s visibility. Leveraging our proficiency in keyword research, we improve your app’s ranking in the app store and push more downloads.",
        color: "text-orange-400",
        dotColor: "bg-orange-400",
    },
    {
        number: "5",
        title: "Content Optimization",
        description:
        "After finding out which keywords we aim to focus on, we optimize your content based on them in our app store optimization services. We ensure that the title, description, and visuals of your app are tailored for these keywords, enabling your app to be more visible on the app store thus increasing its organic downloads.",
        color: "text-yellow-500",
        dotColor: "bg-yellow-500",
    },
    {
        number: "6",
        title: "App Promotion",
        description:
        "In order to promote apps, we employ a blend of paid and organic marketing with our main goal to increase the number of downloads for your app. Depending on the nature of your app, we advertise it on top-notch app marketing platforms to reach your desired audience and boost download numbers.",
        color: "text-yellow-400",
        dotColor: "bg-yellow-400",
    },
    {
        number: "7",
        title: "Reporting & Review",
        description:
        "AlgorithmX uses analysis and reporting for keeping track of your app store optimization strategy, helping you monitor its effectiveness and the growth of your app downloads. Understanding how your app downloads are progressing allows you to identify areas of improvement that may lead to higher conversion rates. Our talented team helps you increase the number of downloads for your app by leveraging our specialization in app store optimization and paid marketing platforms. Whether it's crafting an ASO strategy or overseeing marketing campaigns, we ensure that your app gains visibility on the app store and receives the attention it deserves.",
        color: "text-yellow-400",
        dotColor: "bg-yellow-400",
    },
    ];

    const DevelopmentTimeline = () => {
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
            <h1 className={`${styles["dynamic-title"]}  ${monsterfont1.className} md:text-center `}>
                Dynamic Approach to Android App Development
            </h1>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-4">
                {/* First row - items 1-4 */}
                <div className="relative col-span-full mb-16">
                    {/* Timeline for first row */}
                    <div className="hidden md:block absolute left-[0.5%] right-[0%] h-0.5 top-14">
                    <div className="absolute right-full w-10 h-full border-t-2 border-dashed border-zinc-700"></div>
                    <div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-500 to-orange-400"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                    {timelineSteps.slice(0, 4).map((step, index) => (
                        <div key={index} className="relative">
                        <div className="flex items-start gap-3">
                            <div className="relative">
                            <span className={`${step.color} font-bold text-xl block mb-4`}>
                                {step.number}
                            </span>
                            <div className={`hidden md:block absolute -bottom-[1.125rem] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${step.dotColor} z-10`}></div>
                            </div>
                            <h3 className={` ${styles["dynamic-subtitle"]}  ${monsterfont.className}  `}>{step.title}</h3>
                        </div>
                        
                        {/* Mobile Timeline */}
                        <div className="md:hidden relative my-4">
                            <div className="w-full h-0.5 bg-yellow-700"></div>
                            <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                        </div>
                        
                        <div className={` ${styles["dynamic-description"]}  ${monsterfont1.className} mt-4 md:mt-8 `}>
                            {step.description}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Second row - items 5-6 */}
                <div className="relative col-span-full">
                    {/* Timeline for second row */}
                    <div className="hidden md:block absolute left-[0.5%] right-[43%] h-0.5 top-14">
                    <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                    <div className="absolute left-full  w-20 h-full border-t-2 border-dashed border-zinc-700"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                    {timelineSteps.slice(4, 7).map((step, index) => (
                        <div key={index} className="relative">
                        <div className="flex items-start gap-3">
                            <div className="relative">
                            <span className={`${step.color} font-bold text-xl block mb-4`}>
                                {step.number}
                            </span>
                            <div className={`hidden md:block absolute -bottom-[1.125rem] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${step.dotColor} z-10`}></div>
                            </div>
                            <h3 className={`${styles["dynamic-subtitle"]}  ${monsterfont.className}  `}>{step.title}</h3>
                        </div>
                        
                        {/* Mobile Timeline */}
                        <div className="md:hidden relative my-4">
                            <div className="w-full h-0.5 bg-orange-700"></div>
                            <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                        </div>
                        
                        <div className={`${styles["dynamic-description"]}  ${monsterfont1.className} mt-4 md:mt-8 `}>
                            {step.description}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default DevelopmentTimeline;
import React from 'react';

const ERPProcess = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'Analysis of business requirements and engineering of ERP needs.',
      color: 'bg-yellow-400',
      textColor: 'text-yellow-400'
    },
    {
      title: 'Technical design',
      description: 'Crafting secure, scalable architecture and role-specific UX/UI for ERP software.',
      color: 'bg-orange-500',
      textColor: 'text-orange-500'
    },
    {
      title: 'ERP project planning',
      description: 'Defining project scope, success metrics, team, timelines, budget, risks, and mitigation.',
      color: 'bg-red-500',
      textColor: 'text-red-500'
    },
    {
      title: 'ERP development',
      description: 'Creating new solutions, modernizing existing ERP, or customizing market-available ERPs.',
      color: 'bg-green-500',
      textColor: 'text-green-500'
    },
    {
      title: 'Quality assurance',
      description: 'Conducting thorough testing concurrently with coding.',
      color: 'bg-emerald-400',
      textColor: 'text-emerald-400'
    },
    {
      title: 'Integration',
      description: 'Establishing connections among ERP modules and integrating ERP with systems.',
      color: 'bg-pink-500',
      textColor: 'text-pink-500'
    },
    {
      title: 'Data migration',
      description: 'Migrating enterprise data to ERP from spreadsheets or previous systems.',
      color: 'bg-blue-400',
      textColor: 'text-blue-400'
    },
    {
      title: 'Deployment',
      description: 'Configuring ERP infrastructure, deploying solutions, and transferring knowledge to users.',
      color: 'bg-blue-600',
      textColor: 'text-blue-600'
    },
    {
      title: 'User training',
      description: 'Creating user manuals and maintenance guides; providing in-person or remote training.',
      color: 'bg-purple-500',
      textColor: 'text-purple-500'
    },
    {
      title: 'After-launch services',
      description: 'Ongoing ERP software support and evolution.',
      color: 'bg-purple-400',
      textColor: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-12">
          STEP-BY-STEP PROCESS OF
          <br />
          <span className="font-extrabold">ERP DEVELOPMENT</span>
        </h1>

        <div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border-b-2 border-gray-800 hover:border-transparent has-[.group:hover_+_&]:border-transparent last:border-b-0"

            >
              {/* The vertical line on the left */}
              <div className={`absolute left-0 top-0 h-full w-1 ${step.color} transition-all duration-200 group-hover:-translate-x-3 group-hover:bg-blue-500`} />

              {/* Title */}
              <div className={`w-48 ${step.textColor} font-medium pl-6`}>
                {step.title}
              </div>

              {/* Description */}
              <div className="text-white/90 flex-1">
                {step.description}
              </div>
              
              {/* Hover effect for previous element's border */}
              <div className="absolute -top-2 left-0 right-0 h-2 bg-black opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPProcess;
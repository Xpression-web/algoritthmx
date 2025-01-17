import React from 'react';
import styles from '../front-end/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
});

const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
});


const CRMTechStack = () => {
  const technologies = [
    {
      title: 'Custom Development',
      items: [
        { name: 'HTML5', icon: '/images/HTML5.png' },
        { name: 'CSS3', icon: '/api/placeholder/24/24' },
        { name: 'JavaScript', icon: '/api/placeholder/24/24' },
        { name: 'Angular', icon: '/api/placeholder/24/24' },
        { name: 'Python', icon: '/api/placeholder/24/24' },
        { name: 'ASP.NET', icon: '/api/placeholder/24/24' },
        { name: 'Nodejs', icon: '/api/placeholder/24/24' },
        { name: 'React', icon: '/api/placeholder/24/24' },
        { name: 'PHP', icon: '/api/placeholder/24/24' },
        { name: 'Java', icon: '/api/placeholder/24/24' },
        { name: 'meteor', icon: '/api/placeholder/24/24' },
        { name: 'Go', icon: '/api/placeholder/24/24' },
        { name: 'Vuejs', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Database Management',
      items: [
        { name: 'MSSQL', icon: '/api/placeholder/24/24' },
        { name: 'MySQL', icon: '/api/placeholder/24/24' },
        { name: 'MongoDB', icon: '/api/placeholder/24/24' },
        { name: 'Cassandra', icon: '/api/placeholder/24/24' },
        { name: 'Google Cloud Storage', icon: '/api/placeholder/24/24' },
        { name: 'Oracle', icon: '/api/placeholder/24/24' },
        { name: 'hive', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'API & Integrations',
      items: [
        { name: 'Google Map', icon: '/api/placeholder/24/24' },
        { name: 'REST API', icon: '/api/placeholder/24/24' },
        { name: 'postman', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Devops',
      items: [
        { name: 'Google Developer', icon: '/api/placeholder/24/24' },
        { name: 'Azure Devops', icon: '/api/placeholder/24/24' },
        { name: 'GitLab CI', icon: '/api/placeholder/24/24' },
        { name: 'Docker', icon: '/api/placeholder/24/24' },
        { name: 'Jenkins', icon: '/api/placeholder/24/24' },
      ]
    },
   
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="text-center mb-12">
        <p className={` ${styles["tech-title"]} ${monsterfont1.className} mb-2`}>WE LEVERAGE</p>
        <h1 className={` ${styles["tech-subtitle"]} ${monsterfont2.className  }`}>TECH STACK</h1>
        <h2 className={` ${styles["tech-subtitle"]} ${monsterfont.className  }`}>EXPERTISE</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div key={index} className="mb-8 md:mb-12 pb-8 border-b border-gray-800">
            <div className="grid grid-cols-[1fr,2fr] md:grid-cols-[200px,1fr] gap-4 items-start">
              <h3 className={` ${styles["tech-subtitle1"]} ${monsterfont.className  }`}>{tech.title}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 whitespace-nowrap">
                {tech.items.map((item, itemIndex) => (
                <div 
                key={itemIndex} 
                className={`${styles["box"]} inline-flex items-center gap-2 hover:bg-black transition-colors whitespace-nowrap w-fit `}
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-6 h-6"
                />
                <span className={`${styles["tech-description"]} ${monsterfont.className} text-semi-white`}>
                  {item.name}
                </span>
              </div>
              
              
                
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMTechStack;
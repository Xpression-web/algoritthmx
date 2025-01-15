import React from 'react';
import styles from './style.module.css';
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



const TechStack = () => {
  const technologies = [
    {
      title: 'Core Technologies',
      items: [
        { name: 'HTML5', icon: '/api/placeholder/24/24' },
        { name: 'CSS3', icon: '/api/placeholder/24/24' },
        { name: 'JavaScript', icon: '/api/placeholder/24/24' },
        { name: 'SCSS', icon: '/api/placeholder/24/24' },
        { name: 'TypeScript', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'Angular', icon: '/api/placeholder/24/24' },
        { name: 'Next', icon: '/api/placeholder/24/24' },
        { name: 'React', icon: '/api/placeholder/24/24' },
        { name: 'Vue', icon: '/api/placeholder/24/24' },
        { name: 'Nuxt', icon: '/api/placeholder/24/24' },
        { name: 'Svelte', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Styling & UI Management',
      items: [
        { name: 'Bootstrap', icon: '/api/placeholder/24/24' },
        { name: 'Material-UI', icon: '/api/placeholder/24/24' },
        { name: 'Tailwind CSS', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Package Manager',
      items: [
        { name: 'npm', icon: '/api/placeholder/24/24' },
        { name: 'pnpm', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Version Control',
      items: [
        { name: 'GIT', icon: '/api/placeholder/24/24' },
        { name: 'GITHUB', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Development Environment',
      items: [
        { name: 'Visual Code', icon: '/api/placeholder/24/24' },
        { name: 'Visual Studio IDE', icon: '/api/placeholder/24/24' },
        { name: 'Dreamweaver', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'APIs & Data Handling',
      items: [
        { name: 'Axios', icon: '/api/placeholder/24/24' },
        { name: 'GraphQL', icon: '/api/placeholder/24/24' },
        { name: 'Restful-APIs', icon: '/api/placeholder/24/24' }
      ]
    }
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
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`${styles["box"]} p-3 flex items-center gap-2 hover:bg-black transition-colors`}
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-6 h-6"
                    />
                    <span className={`${styles["tech-description"]} ${monsterfont.className} text-semi-white`}>{item.name}</span>
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

export default TechStack;
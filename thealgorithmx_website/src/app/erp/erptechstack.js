import React from 'react';

const ERPTechStack = () => {
  const technologies = [
    {
      title: 'Front-end',
      items: [
        { name: 'HTML5', icon: '/api/placeholder/24/24' },
        { name: 'CSS3', icon: '/api/placeholder/24/24' },
        { name: 'JavaScript', icon: '/api/placeholder/24/24' },
        { name: 'Angular', icon: '/api/placeholder/24/24' },
        { name: 'React', icon: '/api/placeholder/24/24' },
        { name: 'meteor', icon: '/api/placeholder/24/24' },
        { name: 'Vuejs', icon: '/api/placeholder/24/24' },
      ]
    },
    {
        title: 'Back-end',
        items: [
          { name: 'Python', icon: '/api/placeholder/24/24' },
          { name: 'ASP.NET', icon: '/api/placeholder/24/24' },
          { name: 'Nodejs', icon: '/api/placeholder/24/24' },
          { name: 'PHP', icon: '/api/placeholder/24/24' },
          { name: 'Java', icon: '/api/placeholder/24/24' },
          { name: 'Go', icon: '/api/placeholder/24/24' },
        ]
      },
    {
      title: 'Databases',
      items: [
        { name: 'MSSQL', icon: '/api/placeholder/24/24' },
        { name: 'MySQL', icon: '/api/placeholder/24/24' },
        { name: 'MongoDB', icon: '/api/placeholder/24/24' },
        { name: 'Cassandra', icon: '/api/placeholder/24/24' },,
        { name: 'Oracle', icon: '/api/placeholder/24/24' },
        { name: 'Apache Hbase', icon: '/api/placeholder/24/24' },
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
        <p className="text-blue-500 mb-2">WE LEVERAGE</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">TECH STACK</h1>
        <h2 className="text-3xl md:text-4xl font-bold">EXPERTISE</h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {technologies.map((tech, index) => (
          <div key={index} className="mb-8 md:mb-12 pb-8 border-b border-gray-800">
            <div className="grid grid-cols-[1fr,2fr] md:grid-cols-[200px,1fr] gap-4 items-start">
              <h3 className="text-lg md:text-xl text-[#89CFF0]">{tech.title}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 ">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-gray-900 rounded-lg p-3 flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-6 h-6"
                    />
                    <span className="text-sm ">{item.name}</span>
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

export default ERPTechStack;
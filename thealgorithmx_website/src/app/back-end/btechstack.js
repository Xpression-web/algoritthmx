import React from 'react';

const BackEndTechStack = () => {
  const technologies = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'Python', icon: '/api/placeholder/24/24' },
        { name: 'Java', icon: '/api/placeholder/24/24' },
        { name: 'ASP.NET Core', icon: '/api/placeholder/24/24' },
        { name: 'C#', icon: '/api/placeholder/24/24' },
        { name: 'Django', icon: '/api/placeholder/24/24' },
        { name: 'PHP', icon: '/api/placeholder/24/24' },
        { name: 'Ruby', icon: '/api/placeholder/24/24' },
        { name: 'Node.js', icon: '/api/placeholder/24/24' },
        { name: 'Flask', icon: '/api/placeholder/24/24' },
        { name: 'Go', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MSSQL', icon: '/api/placeholder/24/24' },
        { name: 'MongoDB', icon: '/api/placeholder/24/24' },
        { name: 'MySQL', icon: '/api/placeholder/24/24' },
        { name: 'Cassandra', icon: '/api/placeholder/24/24' },
        { name: 'Neo4j', icon: '/api/placeholder/24/24' },
        { name: 'Redis', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'API Development',
      items: [
        { name: 'Express.js', icon: '/api/placeholder/24/24' },
        { name: 'Django REST Framework', icon: '/api/placeholder/24/24' },
        { name: 'Apollo Server', icon: '/api/placeholder/24/24' },
        { name: 'Flask-RESTful', icon: '/api/placeholder/24/24' },
        { name: 'Graphene', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Authentication & Authorization',
      items: [
        { name: 'AuthO', icon: '/api/placeholder/24/24' },
        { name: 'JWT', icon: '/api/placeholder/24/24' },
        { name: 'OAAuth2', icon: '/api/placeholder/24/24' },
        { name: 'Passport.js', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Message Brokers',
      items: [
        { name: 'RabbitMQ', icon: '/api/placeholder/24/24' },
        { name: 'Apache Kafka', icon: '/api/placeholder/24/24' },
        { name: 'Redis Pub', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Microservices & Serverless Architecture',
      items: [
        { name: 'AWS Lambda', icon: '/api/placeholder/24/24' },
        { name: 'Expressjs with Docker', icon: '/api/placeholder/24/24' },
        { name: 'Google Cloud Functions', icon: '/api/placeholder/24/24' }
      ]
    },
    {
      title: 'Testing & Quality Assurance',
      items: [
        { name: 'Axios', icon: '/api/placeholder/24/24' },
        { name: 'PyTest', icon: '/api/placeholder/24/24' },
        { name: 'RSpec', icon: '/api/placeholder/24/24' },
        { name: 'JUnit', icon: '/api/placeholder/24/24' },
        { name: 'Mocha', icon: '/api/placeholder/24/24' },
        { name: 'Django-Test-Framework', icon: '/api/placeholder/24/24' },

      ]
    },
    {
      title: 'DevOps and CI/CD',
      items: [
        { name: 'Git', icon: '/api/placeholder/24/24' },
        { name: 'GITHUB', icon: '/api/placeholder/24/24' },
        { name: 'GitLab', icon: '/api/placeholder/24/24' },
        { name: 'Bitbucket', icon: '/api/placeholder/24/24' },
        { name: 'GitLab-CI', icon: '/api/placeholder/24/24' },
        { name: 'Travis-CI', icon: '/api/placeholder/24/24' },
        { name: 'Jenkins', icon: '/api/placeholder/24/24' },
      ]
    },
    {
      title: 'Security',
      items: [
        { name: 'OpenSSL', icon: '/api/placeholder/24/24' },
        { name: 'bcrypt', icon: '/api/placeholder/24/24' },
        { name: 'OWASP-Top-Ten', icon: '/api/placeholder/24/24' },
        { name: 'Helmet', icon: '/api/placeholder/24/24' },
        { name:'Nessus', icon: '/api/placeholder/24/24' },
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

export default BackEndTechStack;
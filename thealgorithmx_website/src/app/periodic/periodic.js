'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { id: 'content', name: 'Content', color: 'yellow' },
    { id: 'architecture', name: 'Architecture', color: 'lime' },
    { id: 'html', name: 'HTML', color: 'pink' },
    { id: 'reputation', name: 'Reputation', color: 'purple' },
    { id: 'links', name: 'Links', color: 'amber' },
    { id: 'user', name: 'User', color: 'cyan' },
    { id: 'toxins', name: 'Toxins', color: 'emerald' },
    { id: 'local', name: 'Local', color: 'green' },
    { id: 'publishing', name: 'Publishing', color: 'blue' },
    { id: 'ecommerce', name: 'Ecommerce', color: 'gray' },
  ];

  // Define content descriptions
  const categoryDescriptions = {
    content: "where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results)",
    architecture: "where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results). Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results)",
    html: "HTML elements like titles, headings, and meta descriptions are critical for SEO as they help search engines understand your content and display it properly in search results.",
    reputation: "Your site's reputation affects how search engines rank your content. This includes factors like domain authority, trustworthiness, and the quality of sites linking to you.",
    links: "Links are crucial for SEO - both internal links between your own pages and external links from other sites. They help search engines discover content and determine its importance.",
    user: "User experience signals like page speed, mobile-friendliness, and engagement metrics significantly impact SEO rankings.",
    toxins: "Toxic elements that can harm your SEO include keyword stuffing, hidden text, duplicate content, and other manipulative practices that violate search engine guidelines.",
    local: "Local SEO factors help businesses appear in location-based searches. This includes optimizing for Google Business Profile, local keywords, and location-specific content.",
    publishing: "Publishing practices affect how your content is discovered and indexed. This includes content freshness, structured data, and content distribution strategies.",
    ecommerce: "Ecommerce SEO involves optimizing product pages, category structures, and managing things like reviews and inventory to improve visibility in product searches."
  };

  const handleCategoryClick = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  const handleOutsideClick = () => {
    if (activeCategory) {
      setActiveCategory(null);
    }
  };

  // Function to get color classes based on category
  const getElementStyle = (category) => {
    const colorMap = {
      'content': 'bg-black border-yellow-500 text-yellow-300',
      'architecture': 'bg-black border-green-600 text-green-300',
      'html': 'bg-black border-pink-600 text-pink-300',
      'reputation': 'bg-black border-purple-600 text-purple-300',
      'links': 'bg-black border-amber-600 text-amber-300',
      'user': 'bg-black border-cyan-600 text-cyan-300',
      'toxins': 'bg-black border-emerald-600 text-emerald-300',
      'local': 'bg-black border-green-500 text-green-200',
      'publishing': 'bg-black border-blue-600 text-blue-300',
      'ecommerce': 'bg-black border-gray-600 text-gray-300',
    };
    
    return `${colorMap[category] || 'bg-black border-gray-600 text-gray-200'} ${
      activeCategory && activeCategory !== category ? 'opacity-30' : 'opacity-100'
    }`;
  };

  // Get button color class based on category
  const getButtonColorClass = (category) => {
    const colorMap = {
      'content': 'text-yellow-300 border-yellow-500',
      'architecture': 'text-green-300 border-green-600',
      'html': 'text-pink-300 border-pink-600',
      'reputation': 'text-purple-300 border-purple-600',
      'links': 'text-amber-300 border-amber-600',
      'user': 'text-cyan-300 border-cyan-600',
      'toxins': 'text-emerald-300 border-emerald-600',
      'local': 'text-green-200 border-green-500',
      'publishing': 'text-blue-300 border-blue-600',
      'ecommerce': 'text-gray-300 border-gray-600',
    };
    
    return colorMap[category] || 'text-gray-300 border-gray-600';
  };

  // Get text color class based on category with no border
  const getTextColorClass = (category) => {
    const colorMap = {
      'content': 'text-yellow-300',
      'architecture': 'text-green-300',
      'html': 'text-pink-300',
      'reputation': 'text-purple-300',
      'links': 'text-amber-300',
      'user': 'text-cyan-300',
      'toxins': 'text-emerald-300',
      'local': 'text-green-200',
      'publishing': 'text-blue-300',
      'ecommerce': 'text-gray-300',
    };
    
    return colorMap[category] || 'text-gray-300';
  };

  // Define the elements for the SEO periodic table
  const tableElements = [
    // Row 1
    { id: 'Qu', name: 'QUALITY', category: 'content', position: [0, 0], number: '45' },
    { id: 'He', name: 'Helium', category: 'user', position: [17, 0], number: '2' },
    
    // Row 2
    { id: 'Rs', name: 'RESEARCH', category: 'content', position: [0, 1], number: '46' },
    { id: 'Be', name: 'Beryllium', category: 'architecture', position: [1, 1], number: '4' },
    { id: 'B', name: 'Boron', category: 'toxins', position: [12, 1], number: '5' },
    { id: 'C', name: 'Carbon', category: 'toxins', position: [13, 1], number: '6' },
    { id: 'N', name: 'Nitrogen', category: 'toxins', position: [14, 1], number: '7' },
    { id: 'O', name: 'Oxygen', category: 'local', position: [15, 1], number: '8' },
    { id: 'F', name: 'Flourine', category: 'local', position: [16, 1], number: '9' },
    { id: 'Ne', name: 'Neon', category: 'user', position: [17, 1], number: '10' },
    
    // Row 3
    { id: 'An', name: 'ANSWERS', category: 'content', position: [0, 2], number: '44' },
    { id: 'Mg', name: 'Magnesium', category: 'architecture', position: [1, 2], number: '12' },
    { id: 'Al', name: 'Aluminium', category: 'publishing', position: [12, 2], number: '13' },
    { id: 'Si', name: 'Silicon', category: 'publishing', position: [13, 2], number: '14' },
    { id: 'P', name: 'Phosphorus', category: 'publishing', position: [14, 2], number: '15' },
    { id: 'S', name: 'Sulfur', category: 'publishing', position: [15, 2], number: '16' },
    { id: 'Cl', name: 'Chlorine', category: 'publishing', position: [16, 2], number: '17' },
    { id: 'Ar', name: 'Argon', category: 'user', position: [17, 2], number: '18' },
    
    // Row 4
    { id: 'Dt', name: 'DEPTH', category: 'content', position: [0, 3], number: '44' },
    { id: 'Ca', name: 'Calcium', category: 'architecture', position: [1, 3], number: '20' },
    { id: 'Ga', name: 'Gallium', category: 'publishing', position: [12, 3], number: '31' },
    { id: 'Ge', name: 'Germanium', category: 'publishing', position: [13, 3], number: '32' },
    { id: 'As', name: 'Arsenic', category: 'publishing', position: [14, 3], number: '33' },
    { id: 'Se', name: 'Selenium', category: 'publishing', position: [15, 3], number: '34' },
    { id: 'Br', name: 'Bromine', category: 'publishing', position: [16, 3], number: '35' },
    { id: 'Kr', name: 'Krypton', category: 'user', position: [17, 3], number: '36' },
    
    // Row 5
    { id: 'Kw', name: 'KEYWORDS', category: 'content', position: [0, 4], number: '43' },
    { id: 'Sr', name: 'Strontium', category: 'architecture', position: [1, 4], number: '38' },
    { id: 'In', name: 'Indium', category: 'publishing', position: [12, 4], number: '49' },
    { id: 'Sn', name: 'Tin', category: 'publishing', position: [13, 4], number: '50' },
    { id: 'Sb', name: 'Antimony', category: 'publishing', position: [14, 4], number: '51' },
    { id: 'Te', name: 'Tellurium', category: 'publishing', position: [15, 4], number: '52' },
    { id: 'I', name: 'Iodine', category: 'publishing', position: [16, 4], number: '53' },
    { id: 'Xe', name: 'Xenon', category: 'user', position: [17, 4], number: '54' },
    
    // Row 6 
    { id: 'Fr', name: 'FRESHNESS', category: 'content', position: [0, 5], number: '87' },
    { id: 'Ba', name: 'Barium', category: 'architecture', position: [1, 5], number: '56' },
    { id: 'Y', name: 'Yttrium', category: 'html', position: [2, 5], number: '39' },
    { id: 'Hf', name: 'Hafnium', category: 'links', position: [3, 5], number: '72' },
    { id: 'Ta', name: 'Tantalum', category: 'links', position: [4, 5], number: '73' },
    { id: 'W', name: 'Tungsten', category: 'links', position: [5, 5], number: '74' },
    { id: 'Re', name: 'Rhenium', category: 'links', position: [6, 5], number: '75' },
    { id: 'Os', name: 'Osmium', category: 'links', position: [7, 5], number: '76' },
    { id: 'Ir', name: 'Iridium', category: 'links', position: [8, 5], number: '77' },
    { id: 'Pt', name: 'Platinum', category: 'links', position: [9, 5], number: '78' },
    { id: 'Au', name: 'Gold', category: 'links', position: [10, 5], number: '79' },
    { id: 'Hg', name: 'Mercury', category: 'links', position: [11, 5], number: '80' },
    { id: 'Tl', name: 'Thallium', category: 'publishing', position: [12, 5], number: '81' },
    { id: 'Pb', name: 'Lead', category: 'publishing', position: [13, 5], number: '82' },
    { id: 'Bi', name: 'Bismuth', category: 'publishing', position: [14, 5], number: '83' },
    { id: 'Po', name: 'Polonium', category: 'publishing', position: [15, 5], number: '84' },
    { id: 'At', name: 'Astatine', category: 'publishing', position: [16, 5], number: '85' },
    { id: 'Rn', name: 'Radon', category: 'user', position: [17, 5], number: '86' },

    // Row 7
    { id: 'Mm', name: 'MULTIMEDIA', category: 'content', position: [0, 6], number: '88' },
    { id: 'Ra', name: 'Radium', category: 'architecture', position: [1, 6], number: '88' },
    { id: 'Zr', name: 'Zirconium', category: 'links', position: [2, 6], number: '40' },
    { id: 'Rf', name: 'Rutherfordium', category: 'links', position: [3, 6], number: '104' },
    { id: 'Db', name: 'Dubnium', category: 'links', position: [4, 6], number: '105' },
    { id: 'Sg', name: 'Seaborgium', category: 'links', position: [5, 6], number: '106' },
    { id: 'Bh', name: 'Bohrium', category: 'reputation', position: [6, 6], number: '107' },
    { id: 'Hs', name: 'Hassium', category: 'reputation', position: [7, 6], number: '108' },
    { id: 'Mt', name: 'Meitnerium', category: 'reputation', position: [8, 6], number: '109' },
    { id: 'Ds', name: 'Darmstadtium', category: 'ecommerce', position: [9, 6], number: '110' },
    { id: 'Rg', name: 'Roentgenium', category: 'ecommerce', position: [10, 6], number: '111' },
    { id: 'Cn', name: 'Copernicium', category: 'links', position: [11, 6], number: '112' },
    { id: 'Nh', name: 'Nihonium', category: 'publishing', position: [12, 6], number: '113' },
    { id: 'Fl', name: 'Flerovium', category: 'ecommerce', position: [13, 6], number: '114' },
    { id: 'Mc', name: 'Moscovium', category: 'ecommerce', position: [14, 6], number: '115' },
    { id: 'Lv', name: 'Livermorium', category: 'ecommerce', position: [15, 6], number: '116' },
    { id: 'Ts', name: 'Tennessine', category: 'ecommerce', position: [16, 6], number: '117' },
    { id: 'Og', name: 'Oganesson', category: 'ecommerce', position: [17, 6], number: '118' },
  ];

  return (
    <div className="min-h-screen bg-black text-white" onClick={handleOutsideClick}>
      <Head>
        <title>SEO Periodic Table</title>
        <meta name="description" content="Interactive SEO Periodic Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">SEO Periodic Table</h1>
        
        {/* Periodic Table Grid with overlaid elements */}
        <div className="relative w-full h-full mb-4" onClick={(e) => e.stopPropagation()}>
          <div className="grid grid-cols-18 gap-1">
            {/* Create a grid with empty cells */}
            {Array.from({ length: 7 * 18 }).map((_, index) => {
              const col = index % 18;
              const row = Math.floor(index / 18);
              
              // Category row (row 0, columns 2-17)
              if (row === 0 && col >= 2 && col <= 16) {
                return (
                  <div key={index} className="aspect-square bg-black">
                    {col === 2 && (
                      <div className="absolute col-start-2 col-end-17 flex flex-wrap gap-[30px]" style={{ top: '20px', left: '110px', right: '35px' }}>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            className={`px-1.5 py-1 text-xs rounded-md border ${getButtonColorClass(category.id)} bg-black ${
                              activeCategory === category.id ? 'font-bold' : ''
                            }`}
                            onClick={() => handleCategoryClick(category.id)}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              // Description area (rows 2-4, columns 3-11)
              if (activeCategory && row >= 1 && row <= 4 && col >= 3 && col <= 11) {
                // Only render once at the first cell of the area
                if (row === 1 && col === 3) {
                  return (
                    <div key={index} className="aspect-square relative">
                      <div 
                        className={`absolute ${getTextColorClass(activeCategory)} bg-black rounded p-2`} 
                        style={{ 
                          top: '0', 
                          left: '-62px', 
                          width: 'calc(934% + 8px)', 
                          height: 'calc(400% + 3px)',
                          zIndex: 10,
                          overflowY: 'auto'
                        }}
                      >
                        <p className="text-md leading-tight">{categoryDescriptions[activeCategory]}</p>
                      </div>
                    </div>
                  );
                } else {
                  // For the other cells in the description area, render empty cells
                  return <div key={index} className="aspect-square"></div>;
                }
              }
              
              // Find if there's an element at this position
              const element = tableElements.find(el => el.position[0] === col && el.position[1] === row);
              
              if (element) {
                return (
                  <div
                    key={index}
                    className={`aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle(element.category)}`}
                    style={{ zIndex: 5 }}
                  >
                    <div className="text-tiny opacity-75">{element.number}</div>
                    <div className="flex flex-col h-full justify-center items-center text-center">
                      <div className="text-sm font-bold">{element.id}</div>
                      <div className="text-tiny">{element.name}</div>
                    </div>
                  </div>
                );
              } else {
                // Empty cell
                return <div key={index} className="aspect-square"></div>;
              }
            })}
          </div>
        </div>
      </main>

      {/* Add custom CSS for text sizes and grid */}
      <style jsx global>{`
        .text-tiny {
          font-size: 0.55rem;
          line-height: 0.75rem;
        }
        
        /* Create a grid with 18 equal columns */
        .grid-cols-18 {
          grid-template-columns: repeat(18, minmax(0, 1fr));
        }
        
        /* Improve element hover states */
        .aspect-square {
          transition: all 0.2s ease-in-out;
        }
        
      `}</style>
    </div>
  );
}
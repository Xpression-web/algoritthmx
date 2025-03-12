'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function Periodic() {
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
    content: "Content is the bulk of what makes up the internet. And after technical SEO fundamentals, it's the second-largest area where Google penalties show up. All of the text and multimedia assets that populate web pages must meet industry SEO standards or face down ranking in SERPs (search engine results).",
    architecture: "Architecture description would go here.",
    html: "HTML description would go here.",
    reputation: "Reputation description would go here.",
    links: "Links description would go here.",
    user: "User description would go here.",
    toxins: "Toxins description would go here.",
    local: "Local description would go here.",
    publishing: "Publishing description would go here.",
    ecommerce: "Ecommerce description would go here."
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

  // Function to get color classes based on category and active state
  const getElementStyle = (category) => {
    const colorMap = {
      'content': 'bg-yellow-800 border-yellow-600 text-yellow-300',
      'architecture': 'bg-green-900 border-green-700 text-green-300',
      'html': 'bg-pink-900 border-pink-700 text-pink-300',
      'reputation': 'bg-purple-900 border-purple-700 text-purple-300',
      'links': 'bg-amber-900 border-amber-700 text-amber-300',
      'user': 'bg-cyan-900 border-cyan-700 text-cyan-300',
      'toxins': 'bg-emerald-900 border-emerald-700 text-emerald-300',
      'local': 'bg-green-800 border-green-600 text-green-200',
      'publishing': 'bg-blue-900 border-blue-700 text-blue-300',
      'ecommerce': 'bg-gray-900 border-gray-700 text-gray-300',
    };
    
    return `${colorMap[category] || 'bg-gray-800 border-gray-600 text-gray-200'} ${
      activeCategory && activeCategory !== category ? 'opacity-30' : 'opacity-100'
    }`;
  };

  // Get button color class based on category
  const getButtonColorClass = (category) => {
    const colorMap = {
      'content': 'text-yellow-300',
      'architecture': 'text-green-300',
      'html': 'text-pink-300',
      'reputation': 'text-purple-300',
      'links': 'text-amber-300',
      'user': 'text-cyan-300',
      'toxins': 'text-emerald-300',
      'local': 'text-green-300',
      'publishing': 'text-blue-300',
      'ecommerce': 'text-gray-300',
    };
    
    return colorMap[category] || 'text-gray-300';
  };

  return (
    <div className="min-h-screen bg-black text-white" onClick={handleOutsideClick}>
      <Head>
        <title>SEO Periodic Table</title>
        <meta name="description" content="Interactive SEO Periodic Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">SEO Periodic Table</h1>
        
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8" onClick={(e) => e.stopPropagation()}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md transition-colors ${getButtonColorClass(category.id)} hover:bg-gray-800 ${
                activeCategory === category.id ? 'underline font-bold' : ''
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Description Area */}
        {activeCategory && (
          <div className="mb-8 p-6  rounded-lg max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg">
              {categoryDescriptions[activeCategory]}
            </p>
          </div>
        )}
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-2 max-w-6xl mx-auto" onClick={(e) => e.stopPropagation()}>
          {/* Row 1 - Left Elements (Content Category) */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('content')}`}>
            <div className="text-xs">45</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Qu</div>
              <div className="text-xs font-medium">QUALITY</div>
              <div className="text-xs opacity-70">CONTENT</div>
            </div>
          </div>
          
          {/* Row 1 - Middle Spacers */}
          <div className="col-span-10"></div>
          
          {/* Row 1 - Right Element (User Category) */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('user')}`}>
            <div className="text-xs">2</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">He</div>
              <div className="text-xs font-medium">Helium</div>
              <div className="text-xs opacity-70">4.0026</div>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('content')}`}>
            <div className="text-xs">46</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Rs</div>
              <div className="text-xs font-medium">RESEARCH</div>
              <div className="text-xs opacity-70">CONTENT</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('architecture')}`}>
            <div className="text-xs">4</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Be</div>
              <div className="text-xs font-medium">Beryllium</div>
              <div className="text-xs opacity-70">9.0122</div>
            </div>
          </div>
          
          {/* Row 2 - Middle Spacers */}
          <div className="col-span-5"></div>
          
          {/* Row 2 - Right Elements (Toxins & Local Categories) */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('toxins')}`}>
            <div className="text-xs">5</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">B</div>
              <div className="text-xs font-medium">Boron</div>
              <div className="text-xs opacity-70">10.81</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('toxins')}`}>
            <div className="text-xs">6</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">C</div>
              <div className="text-xs font-medium">Carbon</div>
              <div className="text-xs opacity-70">12.011</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('toxins')}`}>
            <div className="text-xs">7</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">N</div>
              <div className="text-xs font-medium">Nitrogen</div>
              <div className="text-xs opacity-70">14.007</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('local')}`}>
            <div className="text-xs">8</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">O</div>
              <div className="text-xs font-medium">Oxygen</div>
              <div className="text-xs opacity-70">15.999</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('local')}`}>
            <div className="text-xs">9</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">F</div>
              <div className="text-xs font-medium">Fluorine</div>
              <div className="text-xs opacity-70">18.998</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('user')}`}>
            <div className="text-xs">10</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Ne</div>
              <div className="text-xs font-medium">Neon</div>
              <div className="text-xs opacity-70">20.18</div>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('content')}`}>
            <div className="text-xs">44</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">An</div>
              <div className="text-xs font-medium">ANSWERS</div>
              <div className="text-xs opacity-70">CONTENT</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('architecture')}`}>
            <div className="text-xs">12</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Mg</div>
              <div className="text-xs font-medium">Magnesium</div>
              <div className="text-xs opacity-70">24.305</div>
            </div>
          </div>
          
          {/* Row 3 - Middle Spacers */}
          <div className="col-span-5"></div>
          
          {/* Row 3 - Right Elements (Publishing Category) */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('publishing')}`}>
            <div className="text-xs">13</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Al</div>
              <div className="text-xs font-medium">Aluminium</div>
              <div className="text-xs opacity-70">26.982</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('publishing')}`}>
            <div className="text-xs">14</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Si</div>
              <div className="text-xs font-medium">Silicon</div>
              <div className="text-xs opacity-70">28.085</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('publishing')}`}>
            <div className="text-xs">15</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">P</div>
              <div className="text-xs font-medium">Phosphorus</div>
              <div className="text-xs opacity-70">30.974</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('publishing')}`}>
            <div className="text-xs">16</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">S</div>
              <div className="text-xs font-medium">Sulfur</div>
              <div className="text-xs opacity-70">32.06</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('publishing')}`}>
            <div className="text-xs">17</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Cl</div>
              <div className="text-xs font-medium">Chlorine</div>
              <div className="text-xs opacity-70">35.45</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('user')}`}>
            <div className="text-xs">18</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Ar</div>
              <div className="text-xs font-medium">Argon</div>
              <div className="text-xs opacity-70">39.948</div>
            </div>
          </div>
          
          {/* Row 4 */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('content')}`}>
            <div className="text-xs">64</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Dt</div>
              <div className="text-xs font-medium">DEPTH</div>
              <div className="text-xs opacity-70">CONTENT</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('architecture')}`}>
            <div className="text-xs">20</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Ca</div>
              <div className="text-xs font-medium">Calcium</div>
              <div className="text-xs opacity-70">40.078</div>
            </div>
          </div>
          
          {/* Continue with more rows as needed... */}
          
          {/* Row 5 */}
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('content')}`}>
            <div className="text-xs">43</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Kw</div>
              <div className="text-xs font-medium">KEYWORDS</div>
              <div className="text-xs opacity-70">CONTENT</div>
            </div>
          </div>
          <div className={`col-span-1 aspect-square border-2 p-1 rounded flex flex-col ${getElementStyle('architecture')}`}>
            <div className="text-xs">38</div>
            <div className="flex flex-col h-full justify-center items-center text-center">
              <div className="text-2xl font-bold">Sr</div>
              <div className="text-xs font-medium">Strontium</div>
              <div className="text-xs opacity-70">87.62</div>
            </div>
          </div>
          
          {/* You can continue adding more rows as needed */}
        </div>
      </main>
    </div>
  );
}
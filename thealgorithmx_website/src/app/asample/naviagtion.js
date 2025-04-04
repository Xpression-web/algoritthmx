'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Twitter, Instagram, Facebook, Linkedin, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'

// Menu data with added icons for nested items only
const menuData = {
  'Company': { type: 'link', href: '/company' },
  'Creative Assets': {
    type: 'dropdown',
    items: [
      { name: 'Branding', href: '/creative/design-templates' },
      { name: 'Graphics', href: '/creative/stock-photos' },
      { name: 'Video', href: '/creative/video-assets' },
      { name: 'Content Creation', href: '/creative/audio-resources' },
    ]
  },
  '</Code>': {
    type: 'dropdown',
    items: [
      { 
        name: 'Web', 
        href: null,
        subItems: [
          { name: 'Frontend Development', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'Backend Development', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      { 
        name: 'CMS', 
        href: null,
        subItems: [
          { name: 'Wordpress', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'Magento', href: '/code/ios', icon: 'fa-apple' },
          { name: 'Shopify', href: '/code/ios', icon: 'fa-apple' },
          { name: 'Big Commerce', href: '/code/ios', icon: 'fa-apple' },
          { name: 'Drupal', href: '/code/ios', icon: 'fa-apple' },
          { name: 'HubSpot', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      {
        name: 'Product', 
        href: null,
        subItems: [
        ]
      },
      { 
        name: 'AI & Automation', 
        href: null,
        subItems: [
          { name: 'AI Development', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'Gen AI', href: '/code/ios', icon: 'fa-apple' },
          { name: 'Intelligent Automation', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      { 
        name: 'Enterprise Solutions',
        href: null,
        subItems: [
          { name: 'CRM', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'ERP', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      { 
        name: 'Data Analytics',
        href: null,
        subItems: [
          { name: 'Business Intelligence Services', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'Big Data', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      { 
        name: 'Next Gen',
        href: null,
        subItems: [
          { name: 'Blockchain', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'Metaverse', href: '/code/ios', icon: 'fa-apple' },
          { name: 'Web3', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      { 
        name: 'Platform Engineering',
        href: null,
        subItems: [
          { name: 'Cloud & Devops', href: '/code/android', icon: 'fa-snowflake' },
          { name: 'Architecture Re-engineering', href: '/code/ios', icon: 'fa-apple' },
        ]
      },
      { name: 'Integration & Middleware', href: '/leads/crm-tools' },
      { name: 'Testing & Automation', href: '/leads/crm-tools' },
      { name: 'Software Development', href: '/leads/crm-tools' },
    ]
  },
  'Leads & Revenue': {
    type: 'dropdown',
    items: [
      { 
        name: 'SEO', 
        href: null,
        subItems: [
          { name: 'SEO Audits', href: '/seoaudits', icon: 'fa-snowflake' },
                                  { name: 'Local SEO', href: '/local-seo', icon: 'fa-snowflake' },
                                  { name: 'Ecommerce SEO', href: '/ecommerce-seo', icon: 'fa-snowflake' },
                                  { name: 'SEO Consulting', href: '/seo-consulting', icon: 'fa-snowflake' },
                                  { name: ' Link Building', href: '/link-building', icon: 'fa-snowflake' },
                                  { name: 'Technical SEO Audit', href: '/technical-seo-audit', icon: 'fa-snowflake' },
                                  { name: 'National SEO', href: '/national-seo', icon: 'fa-snowflake' },
                                  { name: 'Mobile SEO', href: '/mobile-seo', icon: 'fa-snowflake' },
                                  { name: 'Global/International SEO', href: '/global-seo', icon: 'fa-snowflake' },
                                  { name: 'Enterprise SEO', href: '/enterprise-seo', icon: 'fa-snowflake' },
                                  { name: 'Amazon SEO', href: '/amazon-seo', icon: 'fa-snowflake' },
                                  { name: 'Penalization Recovery', href: '/penalization-recovery',icon: 'fa-snowflake' },
        ]
      },
      { 
        name: 'Social Media', 
        href: null,
        subItems: [
        { name: 'Social Media Audit', href: '/social-media-audit', icon: 'fa-snowflake' },
                                { name: 'Facebook Management', href: '/facebook-management', icon: 'fa-snowflake'},
                                { name: 'Instagram Management', href: '/instagram-management', icon: 'fa-snowflake'},
                                { name: 'Linkedin Management', href: '/linkedin-management', icon: 'fa-snowflake'},
                                { name: 'Twitter Management', href: '/twitter-management', icon: 'fa-snowflake'},
                                { name: 'Youtube Management', href: '/youtube-management', icon: 'fa-snowflake'},
                                { name: 'Tiktok Management', href: '/tiktok-management', icon: 'fa-snowflake'},
                                { name: 'Social Media Consulting', href: '/social-media-consulting', icon: 'fa-snowflake'},
        ]
      },
      { 
        name: 'PPC Advertising', 
        href: null,
        subItems: [
        { name: 'Google Ads', href: '/google-ads', icon: 'fa-snowflake' },
                                { name: 'Bing Ads', href: '/bing-ads', icon: 'fa-snowflake'},
                                { name: 'Ads Audit', href: '/ads-audit', icon: 'fa-snowflake'},
                                { name: 'Ads Suspension Recovery', href: '/ads-suspension-recovery', icon: 'fa-snowflake'},
                                { name: 'Facebook Ads', href: '/facebook-ads', icon: 'fa-snowflake'},
                                { name: 'Instagram Ads', href: '/instagram-ads', icon: 'fa-snowflake'},
                                { name: 'Linkedin Ads', href: '/linkedin-ads', icon: 'fa-snowflake'},
                                { name: 'Landing Page Design', href: '/landing-page-design', icon: 'fa-snowflake'},
                                { name: 'X/Twitter Ads', href: '/twitter-ads', icon: 'fa-snowflake'},
                                { name: 'Youtube Ads', href: '/youtube-ads', icon: 'fa-snowflake'},
                                { name: 'Tiktok Ads', href: '/tiktok-ads', icon: 'fa-snowflake'},
                                { name: 'Snapchat Ads', href: '/snapchat-ads', icon: 'fa-snowflake'},
                                { name: 'Amazon Ads', href: '/amazon-ads', icon: 'fa-snowflake'},
                                { name: 'Display Ads', href: '/display-ads', icon: 'fa-snowflake'},
                                { name: 'Remarketing', href: '/remarketing', icon: 'fa-snowflake'},
                                { name: 'Ecommerce Advertising', href: '/ecommerce-advertising', icon: 'fa-snowflake'},
        ]
      },
      { 
        name: 'Content', 
        href: null,
        subItems: [
        { name: 'Creation & Marketing', href: '/creation-and-marketing', icon: 'fa-snowflake' },
        { name: 'SEO Copywriting', href: '/seo-copywriting', icon: 'fa-snowflake'},
        ]
      },
      { name: 'App Store Optimization', href: '/leads/crm-tools' },
      { name: 'Conversion Rate Optimization', href: '/leads/sales-funnel' },
      { name: 'Public Relations', href: '/leads/analytics' },
      { name: 'Franchise', href: '/leads/analytics' },
      { name: 'Influencer', href: '/leads/analytics' },
    ]
  },
  'Resources': { type: 'link', href: '/resources' },
}

// Apple-style menu data for the iPad section (only used in Code section)
const appleMenuData = {
  'App Development': {
    type: 'header', // Non-clickable header
    items: [
          { name: 'Android Development', href: '/ipad-support', isClickable: true},
          { name: 'iPhone/iPad Development', href: '/ipad-support', isClickable: true },
          { name: 'Xamarin Development', href: '/ipad-support', isClickable: true },
          { name: 'Flutter Development', href: '/ipad-support', isClickable: true },
          { name: 'React Native Development', href: '/ipad-support', isClickable: true}
    ]
  },
  'IOT ': {
    type: 'header', // Non-clickable header
    items: [
      { name: 'IOT Development', href: '/ipad-support', isClickable: true },
    ]
  }
}

// Get icon class including prefix handling
const getIconClass = (iconName) => {
  if (!iconName) return 'fas fa-chevron-right'; // Default icon
  
  // Check if iconName already has a prefix
  if (iconName.startsWith('fa-')) {
    // Determine correct prefix based on icon name
    if (iconName === 'fa-react' || iconName === 'fa-vuejs' || 
        iconName === 'fa-angular' || iconName === 'fa-android' || 
        iconName === 'fa-apple') {
      return `fab ${iconName}`;
    }
    return `fas ${iconName}`;
  }
  
  return `fas fa-${iconName}`;
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItems, setExpandedMobileItems] = useState({})
  const [expandedMobileSubItems, setExpandedMobileSubItems] = useState({})
  const navbarRef = useRef(null)
  const menuItemRefs = useRef({})
  const [contentHeight, setContentHeight] = useState(0)
  const dropdownRef = useRef(null)
  
  // Close dropdown when hovering away from navbar and dropdown
  const handleMouseLeave = () => {
    setIsOpen(false)
    setActiveMenu(null)
    setActiveSubMenu(null)
  }

  // Monitor active menu height changes
  useEffect(() => {
    function updateHeight() {
      if (activeMenu && menuItemRefs.current[activeMenu]) {
        const newHeight = menuItemRefs.current[activeMenu].scrollHeight
        setContentHeight(newHeight)
      }
    }

    if (activeMenu) {
      // Initialize height immediately
      updateHeight()
      
      // Add resize listener to handle window size changes
      window.addEventListener('resize', updateHeight)
      
      // Use MutationObserver to detect content changes
      const observer = new MutationObserver(updateHeight)
      if (menuItemRefs.current[activeMenu]) {
        observer.observe(menuItemRefs.current[activeMenu], {
          childList: true,
          subtree: true,
          attributes: true
        })
      }
      
      return () => {
        window.removeEventListener('resize', updateHeight)
        observer.disconnect()
      }
    } else {
      setContentHeight(0)
    }
  }, [activeMenu, activeSubMenu])

  // Find the first item with subitems in the menu
  const findFirstItemWithSubitems = (menuName) => {
    if (!menuData[menuName] || !menuData[menuName].items) return null;
    
    const firstItemWithSubitems = menuData[menuName].items.find(item => item.subItems && item.subItems.length > 0);
    return firstItemWithSubitems ? firstItemWithSubitems.name : null;
  }

  const handleMenuHover = (menuName) => {
    // Don't open dropdown for link-type menus
    if (menuData[menuName].type === 'link') {
      // Close any open dropdown when hovering over link-type items
      setIsOpen(false)
      setActiveMenu(null)
      setActiveSubMenu(null)
      return;
    }
    
    if (menuData[menuName].type === 'dropdown') {
      setIsOpen(true)
      setActiveMenu(menuName)
      
      // Find first item with subitems
      const firstSubitem = findFirstItemWithSubitems(menuName);
      setActiveSubMenu(firstSubitem);
    }
  }
  
  // Handle submenu hover
  const handleSubMenuHover = (itemName) => {
    setActiveSubMenu(itemName)
  }

  // Handle mouse enter on navbar areas that should close the dropdown
  const handleCloseDropdown = () => {
    setIsOpen(false)
    setActiveMenu(null)
    setActiveSubMenu(null)
  }

  // Toggle mobile menu open state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  // Toggle mobile dropdown items
  const toggleMobileItem = (menuName) => {
    // Close all other expanded items first for accordion-style behavior
    let newExpandedItems = {};
    
    // If the clicked item is already open, close it
    if (expandedMobileItems[menuName]) {
      newExpandedItems = {};
    } else {
      // Otherwise open the clicked item only
      newExpandedItems = { [menuName]: true };
    }
    
    setExpandedMobileItems(newExpandedItems);
  }

  // Toggle mobile sub-items
  const toggleMobileSubItem = (itemName) => {
    // Close all other expanded sub-items first
    let newExpandedSubItems = {};
    
    // If the clicked sub-item is already open, close it
    if (expandedMobileSubItems[itemName]) {
      newExpandedSubItems = {};
    } else {
      // Otherwise open the clicked sub-item only
      newExpandedSubItems = { [itemName]: true };
    }
    
    setExpandedMobileSubItems(newExpandedSubItems);
  }

  // Backdrop overlay variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  // Function to chunk array into specified size for the multi-column layout
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: { x: '-100%', transition: { duration: 0.3 } },
    open: { x: 0, transition: { duration: 0.3 } }
  }

  // Special rendering for Product section in mobile view
  const renderMobileProductSection = () => {
    return (
      <div className="bg-[#0a1518] pl-4">
        {/* App Development Section */}
        <div className="mb-3">
          <div className="text-xs text-gray-500 px-4 py-2">app</div>
          <div className="pl-2">
            {appleMenuData['App Development'].items.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* IOT Section */}
        <div className="mb-2">
          <div className="text-xs text-gray-500 px-4 py-2">IOT</div>
          <div className="pl-2">
            {appleMenuData['IOT '].items.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={navbarRef} 
      className="relative"
      onMouseLeave={handleMouseLeave}
    >
      {/* Backdrop overlay when dropdown is open */}
      <AnimatePresence>
        {(isOpen || isMobileMenuOpen) && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
            style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
            onClick={() => isMobileMenuOpen ? setIsMobileMenuOpen(false) : null}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 h-full w-4/5 bg-[#193439] bg-opacity-95 backdrop-blur-md z-40 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <div className="flex items-center">
                <Image 
                  src="/images/logo5.png" 
                  alt="Logo"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <button 
                onClick={toggleMobileMenu} 
                className="text-white p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="py-4">
              {/* Mobile menu items */}
              {Object.keys(menuData).map((menuName) => (
                <div key={menuName} className="border-b border-gray-700 last:border-b-0">
                  {menuData[menuName].type === 'link' ? (
                    <Link 
                      href={menuData[menuName].href}
                      className="flex items-center justify-between px-4 py-4 text-base text-white font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {menuName}
                    </Link>
                  ) : (
                    <div>
                      <div 
                        className="flex items-center justify-between px-4 py-4 text-base text-white font-medium"
                        onClick={() => toggleMobileItem(menuName)}
                      >
                        <span>{menuName}</span>
                        {expandedMobileItems[menuName] ? (
                          <ChevronDown size={20} className="text-white" />
                        ) : (
                          <ChevronRight size={20} className="text-white" />
                        )}
                      </div>
                      
                      {/* Mobile submenu */}
                      {expandedMobileItems[menuName] && (
                        <div className="bg-[#122429] p-2">
                          {menuData[menuName].items.map((item) => (
                            <div key={item.name} className="mb-1 last:mb-0">
                              {/* For normal items */}
                              {!item.subItems ? (
                                <Link 
                                  href={item.href}
                                  className="flex items-center px-4 py-3 text-sm text-white"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <div>
                                  <div 
                                    className="flex items-center justify-between px-4 py-3 text-sm text-white"
                                    onClick={() => toggleMobileSubItem(item.name)}
                                  >
                                    <span>{item.name}</span>
                                    {expandedMobileSubItems[item.name] ? (
                                      <ChevronDown size={16} className="text-white" />
                                    ) : (
                                      <ChevronRight size={16} className="text-white" />
                                    )}
                                  </div>
                                  
                                  {/* Custom rendering for Product section */}
                                  {expandedMobileSubItems[item.name] && menuName === '</Code>' && item.name === 'Product' ? (
                                    renderMobileProductSection()
                                  ) : (
                                    /* For other sections with subitems */
                                    expandedMobileSubItems[item.name] && item.subItems && (
                                      <div className="pl-4 bg-[#0a1518]">
                                        {item.subItems.map((subItem) => (
                                          <Link 
                                            key={subItem.name}
                                            href={subItem.href}
                                            className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-300"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                          >
                                            <i className={getIconClass(subItem.icon)}></i>
                                            <span>{subItem.name}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile social icons */}
              <div className="flex items-center space-x-6 px-6 pt-6">
                <Link href="/twitter" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </Link>
                <Link href="/instagram" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </Link>
                <Link href="/facebook" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </Link>
                <Link href="/linkedin" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isOpen ? 'bg-opacity-80 backdrop-blur-md' : 'bg-black'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Mobile menu toggle button - only visible on small screens */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-white"
              >
                <Menu size={24} />
              </button>
            </div>
            
            {/* Left side - Navigation Items - hidden on mobile */}
            <div className="hidden md:flex flex-1 justify-start">
              <div className="flex items-center space-x-6 flex-nowrap">
                {Object.keys(menuData).map((menuName) => (
                  <div 
                    key={menuName}
                    className="relative whitespace-nowrap"
                    onMouseEnter={() => handleMenuHover(menuName)}
                  >
                    {menuData[menuName].type === 'link' ? (
                      <Link
                        href={menuData[menuName].href}
                        className="text-white hover:text-gray-300 px-2 py-2 text-sm font-medium"
                      >
                        {menuName}
                      </Link>
                    ) : (
                      <div
                        className={`text-white hover:text-gray-300 px-2 py-2 text-sm font-medium cursor-pointer ${activeMenu === menuName && isOpen ? 'text-blue-400' : ''}`}
                      >
                        {menuName}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Center - Logo */}
            <div 
              className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none md:flex-1 md:flex md:justify-center"
              onMouseEnter={handleCloseDropdown}
            >
              <Link href="/" className="text-white">
                <Image 
                  src="/images/logo5.png" 
                  alt="Logo"
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Right side - Connect Button & Social Icons - hidden on mobile */}
            <div 
              className="hidden md:flex flex-1 justify-end items-center space-x-4"
              onMouseEnter={handleCloseDropdown}
            >
              <div className="relative">
                <a href="/contact-us" className="flex items-center pr-8 pl-6 py-3 rounded-full bg-black text-white border border-gray-600 hover:border-gray-400 transition">
                  <span className={`text-[14px] leading-[22px] font-[400] font-[Helvetica] text-white whitespace-nowrap mr-6`}>Connect</span>
                  <div className="absolute left-[91px] top-1/2 -translate-y-1/2">
                    <div className="bg-blue-500 p-3.5 rounded-full">
                      <Phone size={15} />
                    </div>
                  </div>
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <Link href="/twitter" className="text-white hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="/instagram" className="text-white hover:text-blue-400">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="/facebook" className="text-white hover:text-blue-400">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link href="/linkedin" className="text-white hover:text-blue-400">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full width dropdown menu with smooth height transition - desktop only */}
        <div 
          ref={dropdownRef}
          className="fixed top-16 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md text-white z-20 shadow-xl overflow-hidden transition-all duration-300 ease-in-out md:block hidden"
          style={{ 
            height: isOpen ? `${contentHeight + 32}px` : '0px', // 32px for padding
            opacity: isOpen ? 1 : 0
          }}
        >
          <div className="  py-4 md:pl-[280px] sm:px-6">
            {/* Content for each menu */}
            {Object.keys(menuData).map((menuName) => (
              menuData[menuName].type === 'dropdown' && (
                <div 
                  key={menuName}
                  ref={el => menuItemRefs.current[menuName] = el}
                  className={`transition-opacity duration-300 ${activeMenu === menuName ? 'opacity-100' : 'opacity-0 hidden'}`}
                >
                  {/* Check if this is the code menu to display Apple-style menu */}
                  {menuName === '</Code>' ? (
                    <div className="flex">
                      {/* Left column - Main categories code section */}
                      <div className="w-1/4 pr-8 ">
                        <ul className="space-y-2"> 
                          {menuData[menuName].items.map((item) => (
                            <li 
                              key={item.name}
                              onMouseEnter={() => handleSubMenuHover(item.name)}
                              className="flex flex-col"
                            >
                              {/* Display primary item without icon */}
                              {!item.subItems && item.href ? (
                                <Link 
                                  href={item.href}
                                  className={`text-lg font-medium cursor-pointer ${activeSubMenu === item.name ? 'text-blue-400' : 'text-red-500 hover:text-blue-400'}`}
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <div
                                  className={`text-lg font-medium cursor-pointer ${activeSubMenu === item.name ? 'text-blue-400' : 'text-red-500 hover:text-blue-400'}`}
                                >
                                  {item.name}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Right column - Subcategory items in column format */}
                      <div className="w-3/4 pl-8">
                        {/* Only show subitems when specific submenu is active */}
                        {activeSubMenu && 
                         menuData[menuName].items.find(item => item.name === activeSubMenu)?.subItems && (
                          <div className="flex">
                            {chunkArray(
                              menuData[menuName].items.find(item => item.name === activeSubMenu)?.subItems || [], 
                              8
                            ).map((chunk, index) => (
                              <div key={`col-${index}`} className="flex flex-col space-y-2 mr-8">
                                {chunk.map((subItem) => (
                                  <Link 
                                    key={subItem.name} 
                                    href={subItem.href} 
                                    className="flex items-center space-x-3 text-yellow-300 hover:text-blue-400"
                                  >
                                    <div className="text-blue-400">
                                      <i className={getIconClass(subItem.icon)}></i>
                                    </div>
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Show apple-style menu for Product submenu specifically */}
                        {activeSubMenu === 'Product' && (
                          <div className="flex">
                            {Object.keys(appleMenuData).map((headerName) => (
                              <div key={headerName} className="mr-16">
                                {/* Non-clickable header */}
                                <h3 className="text-sm font-normal text-gray-400 mb-4">{headerName}</h3>
                                <ul className="space-y-3">
                                  {appleMenuData[headerName].items.map((item) => (
                                    <li key={item.name}>
                                      {item.isClickable ? (
                                        <Link 
                                          href={item.href}
                                          className="text-base font-medium text-white hover:text-blue-400"
                                        >
                                          {item.name}
                                        </Link>
                                      ) : (
                                        <span className="text-base font-medium text-gray-300">
                                          {item.name}
                                        </span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* For other menus, use standard layout */
                    <div className="flex">
                      {/* Left column - Categories */}
                      <div className="w-1/4 pr-8">
                        <ul className="space-y-2">
                          {menuData[menuName].items.map((item) => (
                            <li 
                              key={item.name}
                              onMouseEnter={() => handleSubMenuHover(item.name)}
                            >
                              {!item.subItems ? (
                                <Link 
                                  href={item.href}
                                  className="text-lg font-medium text-green-400 hover:text-blue-400"
                                >
                                  {item.name}
                                </Link>
                              ) : (
                                <div
                                  className={`text-lg font-medium cursor-pointer ${activeSubMenu === item.name ? 'text-blue-400' : 'text-green-400 hover:text-blue-400'}`}
                                >
                                  {item.name}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Right area - Subcategory items */}
                      <div className="w-3/4 pl-8">
                        {/* Show subitems when specific submenu is active */}
                        {activeSubMenu && 
                         menuData[menuName].items.find(item => item.name === activeSubMenu)?.subItems && (
                          <div className="flex">
                            {chunkArray(
                              menuData[menuName].items.find(item => item.name === activeSubMenu)?.subItems || [], 
                              8
                            ).map((chunk, index) => (
                              <div key={`col-${index}`} className="flex flex-col space-y-2 mr-8">
                                {chunk.map((subItem) => (
                                  <Link 
                                    key={subItem.name} 
                                    href={subItem.href} 
                                    className="flex items-center space-x-3 text-yellow-300 hover:text-blue-400"
                                  >
                                    <div className="text-blue-400">
                                      <i className={getIconClass(subItem.icon)}></i>
                                    </div>
                                    <span>{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
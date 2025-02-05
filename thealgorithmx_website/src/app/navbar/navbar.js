'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Twitter, Instagram, Facebook, Linkedin, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
    const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const mainContent = document.getElementById('main-content');
        if (activeDropdown !== null || isOpen) {
            mainContent?.classList.add('blur-effect');
        } else {
            mainContent?.classList.remove('blur-effect');
        }
    }, [activeDropdown, isOpen]);

    useEffect(() => {
        const mainContent = document.getElementById('main-content');
        if (activeDropdown !== null) {
            mainContent?.classList.add('blur-effect');
        } else {
            mainContent?.classList.remove('blur-effect');
        }
    }, [activeDropdown]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
                setMobileSubmenuOpen(null);
                setMobileCategoryOpen(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItems = [
        {
            name: 'Company',
            href: '/company',
            subItems: []
        },
        {
            name: 'Creative Assets',
            href: '#',
            subItems: [
                { category: 'Branding', href: '/branding' },
                { category: 'Graphics', href: '/graphics' },
                { category: 'Video', href: '/video' },
                { category: 'Content Creation', href: '/contentcreation' },
            ]
        },
        {
            name: '</Code>',
            href: '#',
            subItems: [
                {
                    category: 'App/Mobile',
                    icon: '',
                    items: [
                        { name: 'Android Development', href: '/android-app', icon: '/icons/android.svg' },
                        { name: 'iPhone/iPad Development', href: '/iphone-app', icon: '/icons/ios.svg' },
                        { name: 'Xamarin Development', href: '/xamarin', icon: '/icons/xamarin.svg' },
                        { name: 'Flutter Development', href: '/flutter', icon: '/icons/flutter.svg' },
                        { name: 'React Native Development', href: '/react-native', icon: '/icons/react.svg' }
                    ]
                },
                {
                    category: 'Web',
                    icon: '',
                    items: [
                        { name: 'Front-End Designing-HTML/CSS/Bootstrap/More', href: '/front-end', icon: '/icons/android.svg' },
                        { name: 'Back-End Developmen-Python/.NET/More', href: '/back-end', icon: '/icons/ios.svg' }
                    ]
                },
                {
                    category: 'CMS Development',
                    icon: '',
                    items: [
                        { name: 'Shopify', href: '/shopify', icon: '/icons/android.svg' },
                        { name: 'Magento', href: '/magento', icon: '/icons/ios.svg' },
                        { name: 'Wordpress', href: '/wordpress', icon: '/icons/xamarin.svg' },
                        { name: 'HubSpot', href: '/hubspot', icon: '/icons/flutter.svg' },
                        { name: 'Big Commerce', href: '/bigcommerce', icon: '/icons/react.svg' },
                        { name: 'Drupal', href: '/drupal', icon: '/icons/react.svg' }
                    ]
                },
                { category: 'CRM', href: '/crm' },
                { category: 'ERP', href: '/erp' },
                { category: 'Blockchain', href: '/blockchain' },
                { category: 'Software', href: '/software' },
            ]
        },
        {
            name: 'Leads & Revenue',
            href: '#',
            subItems: [
                {
                    category: 'SEO',
                    icon: '',
                    items: [
                        { name: 'SEO Audits', href: '/seoaudits', icon: '/icons/android.svg' },
                        { name: 'Local SEO', href: '/local-seo', icon: '/icons/ios.svg' },
                        { name: 'Ecommerce SEO', href: '/ecommerce-seo', icon: '/icons/xamarin.svg' },
                        { name: 'SEO Consulting', href: '/seo-consulting', icon: '/icons/flutter.svg' },
                        { name: ' Link Building', href: '/link-building', icon: '/icons/flutter.svg' },
                        { name: 'Technical SEO Audit', href: '/technical-seo-audit', icon: '/icons/flutter.svg' },
                        { name: 'National SEO', href: '/national-seo', icon: '/icons/flutter.svg' },
                        { name: 'Mobile SEO', href: '/mobile-seo', icon: '/icons/flutter.svg' },
                        { name: 'Global/International SEO', href: '/global-seo', icon: '/icons/flutter.svg' },
                        { name: 'Enterprise SEO', href: '/enterprise-seo', icon: '/icons/flutter.svg' },
                        { name: 'Amazon SEO', href: '/amazon-seo', icon: '/icons/flutter.svg' },
                        { name: 'Penalization Recovery', href: '/penalization-recovery', icon: '/icons/flutter.svg' },
                    ]
                },
                {
                    category: 'Social Media',
                    icon: '',
                    items: [
                        { name: 'Social Media Audit', href: '/social-media-audit', icon: '/icons/android.svg' },
                        { name: 'Facebook Management', href: '/facebook-management', icon: '/icons/ios.svg' },
                        { name: 'Instagram Management', href: '/instagram-management', icon: '/icons/ios.svg' },
                        { name: 'Linkedin Management', href: '/linkedin-management', icon: '/icons/ios.svg' },
                        { name: 'Twitter Management', href: '/twitter-management', icon: '/icons/ios.svg' },
                        { name: 'Youtube Management', href: '/youtube-management', icon: '/icons/ios.svg' },
                        { name: 'Tiktok Management', href: '/tiktok-management', icon: '/icons/ios.svg' },
                        { name: 'Social Media Consulting', href: '/social-media-consulting', icon: '/icons/ios.svg' },
                    ]
                },
                { category: 'PPC Advertising', href: '/ppc-advertising' },
                {
                    category: 'Content ',
                    icon: '',
                    items: [
                        { name: 'Creation & Marketing', href: '/creation-and-marketing', icon: '/icons/android.svg' },
                        { name: 'SEO Copywriting', href: '/seo-copywriting', icon: '/icons/ios.svg' },
                    ]
                },
                { category: 'App Store', href: '/app-store' },
                { category: 'Conversion Rate', href: '/conversion-rate-optimization' },
                { category: 'Public Relations', href: '/public-relations' },
                { category: 'Franchise', href: '/franchise-marketing' },
                { category: 'Influencer', href: '/influencer-marketing' },
            ]
        },
        {
            name: 'Resources',
            href: '/company',
            subItems: []
        },
    ];

    const handleMouseEnter = (index) => {
        if (window.innerWidth > 768) {
            setActiveDropdown(index);
            if (navItems[index].subItems.length > 0) {
                setActiveCategory(0);
            }
        }
    };

    const handleMouseLeave = (e) => {
        if (!e.relatedTarget || !(e.relatedTarget instanceof Element) || !e.relatedTarget.closest('.dropdown-content')) {
            setActiveDropdown(null);
            setActiveCategory(null);
        }
    };

    const handleCategoryHover = (categoryIndex) => {
        setActiveCategory(categoryIndex);
    };

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
        setMobileSubmenuOpen(null);
        setMobileCategoryOpen(null);
    };

    const toggleMobileSubmenu = (index) => {
        setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index);
        setMobileCategoryOpen(null);
    };

    const toggleMobileCategory = (categoryIndex) => {
        setMobileCategoryOpen(mobileCategoryOpen === categoryIndex ? null : categoryIndex);
    };

    return (
        <>
            <style jsx global>{`
                /* ... keep existing styles ... */
                @media (min-width: 768px) {
                    .blur-effect {
                        filter: blur(4px);
                        pointer-events: none;
                    }
                    
                    .navbar-transparent {
                        background-color: transparent;
                        
                    }
                    
                    .navbar-scrolled {
                        background-color: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(10px);
                    }
                    
                    .dropdown-overlay {
                        background-color: rgba(0, 0, 0, 0.9);
                        
                    }
                }

                /* Updated Mobile styles to white background */
                @media (max-width: 767px) {
                    .blur-effect {
                        filter: blur(4px);
                        pointer-events: none;
                    }
                    .navbar-transparent,
                    .navbar-scrolled {
                        background: black;
                    }
                    
                    .mobile-menu {
                        background: white;
                    }
                }

                .mobile-menu {
                    transition: transform 0.3s ease-in-out;
                }

                .mobile-menu.open {
                    transform: translateX(0);
                }

                .mobile-menu.closed {
                    transform: translateX(-100%);
                }

                .mobile-submenu {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-in-out;
                }

                .mobile-submenu.open {
                    max-height: 1000px;
                }
                .dropdown-wrapper {
                    position: fixed;
                    top: 64px; /* Height of navbar */
                    left: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(8px);
                    z-index: 40;
                }

                .dropdown-content {
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.2s ease-in-out;
    
                }

                .dropdown-content.active {
                    opacity: 1;
                    visibility: visible;
                     backdrop-filter: blur(16px);
    
                }
            `}</style>

            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'navbar-scrolled' : 'navbar-transparent'
            }`}>
                <div className="relative">
                    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-3 items-center h-16">
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-white hover:text-gray-300"
                                >
                                    <Menu size={24} />
                                </button>
                            </div>

                            <div className="hidden md:flex items-center space-x-6">
                                {navItems.map((item, index) => (
                                    <div key={item.name} className="relative" onMouseEnter={() => handleMouseEnter(index)}>
                                        <Link href={item.href} className={`text-[14px] leading-[22px] font-[400] font-[Helvetica] text-white whitespace-nowrap `}>
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-center">
                                <Link href="/mainpage">
                                    <img
                                        src="images/logo5.png"
                                        alt="Company Logo"
                                        className="h-12 w-auto"
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center justify-end space-x-4">
                                <div className="relative">
                                <a href="/contact-us"  className="flex items-center pr-8 pl-6 py-3 rounded-full bg-black text-white border border-gray-600 hover:border-gray-400 transition">
                                        <span className={`text-[14px] leading-[22px] font-[400] font-[Helvetica] text-white whitespace-nowrap mr-6`}>Connect</span>
                                        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                                            <div className="bg-blue-500 p-2.5 rounded-full">
                                                <Phone size={20} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Link href="http://x.com/algorithmxinc" target="_blank" className="text-white hover:text-gray-200">
                                    <img src="/images/icons8-twitter.svg" alt="twitter" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[240deg] hover:brightness-[100%] hover:contrast-[100%]" />
                                    </Link>
                                    <Link href="https://www.instagram.com/thealgorithmx/" target="_blank" className="text-white hover:text-gray-200">
                                    <img src="/images/icons8-instagram.svg" alt="instagram" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
                                    </Link>
                                    <Link href="https://www.facebook.com/algorithmxinc" target="_blank" className="text-white hover:text-gray-200">
                                    <img src="/images/icons8-facebook.svg" alt="Facebook" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/algorithmxinc" target="_blank" className="text-white ">
                                    <img src="/images/icons8-linkedin.svg" alt="linkedin" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
                                    </Link>
                                </div>

                            </div>

                            <div 
                                ref={menuRef}
                                className={`fixed inset-y-0 left-0 w-64 bg-white transform ${
                                    isOpen ? 'mobile-menu open' : 'mobile-menu closed'
                                } md:hidden overflow-y-auto`}
                            >
                                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                                    <Link href="">
                                        <img
                                            src="images/logo5.png"
                                            alt="Company Logo"
                                            className="h-8 w-auto"
                                        />
                                    </Link>
                                    <button
                                        onClick={toggleMobileMenu}
                                        className="text-black hover:text-gray-600"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="px-4 py-6 space-y-2">
    {navItems.map((item, index) => (
        <div key={item.name} className="border-b border-gray-200">
            {item.subItems.length > 0 ? (
                <div 
                    className="flex items-center justify-between py-3 text-black cursor-pointer"
                    onClick={() => toggleMobileSubmenu(index)}
                >
                    <span className={`text-[20px] leading-[28px] font-[400] font-[Helvetica] text-black whitespace-nowrap`}>{item.name}</span>
                    <ChevronDown 
                        className={`transform transition-transform ${mobileSubmenuOpen === index ? 'rotate-180' : ''}`} 
                        size={20} 
                    />
                </div>
            ) : (
                <Link href={item.href} className={`block py-3 text-[20px] leading-[28px] font-[400] font-[Helvetica] text-black whitespace-nowrap`}>
                    {item.name}
                </Link>
            )}
            
            {item.subItems.length > 0 && (
                <div className={`mobile-submenu ${mobileSubmenuOpen === index ? 'open' : ''}`}>
                    {item.subItems.map((category, categoryIndex) => (
                        <div key={category.category} className="pl-4">
                            {category.items ? (
                                <div 
                                    className="flex items-center justify-between py-2 text-gray-600 cursor-pointer"
                                    onClick={() => toggleMobileCategory(categoryIndex)}
                                >
                                    <span>{category.category}</span>
                                    <ChevronRight 
                                        className={`transform transition-transform ${mobileCategoryOpen === categoryIndex ? 'rotate-90' : ''}`} 
                                        size={18} 
                                    />
                                </div>
                            ) : (
                                <Link href={category.href} className={`block py-2 text-gray-600`}>
                                    {category.category}
                                </Link>
                            )}
                            
                            {category.items && (
                                <div className={`mobile-submenu ${mobileCategoryOpen === categoryIndex ? 'open' : ''}`}>
                                    {category.items.map((subItem) => (
                                        <Link 
                                            key={subItem.name} 
                                            href={subItem.href}
                                            className={`block py-2 pl-2 text-[14px] leading-[22px] font-[300] font-[Helvetica] text-black whitespace-nowrap`}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
        
    ))}
    <div className="pt-6">
                                        <div className="flex space-x-4">
                                            <Link href="https://twitter.com" target="_blank" className="text-black hover:text-gray-600">
                                                <Twitter size={20} />
                                            </Link>
                                            <Link href="https://instagram.com" target="_blank" className="text-black hover:text-gray-600">
                                                <Instagram size={20} />
                                            </Link>
                                            <Link href="https://facebook.com" target="_blank" className="text-black hover:text-gray-600">
                                                <Facebook size={20} />
                                            </Link>
                                            <Link href="https://linkedin.com" target="_blank" className="text-black hover:text-gray-600">
                                                <Linkedin size={20} />
                                            </Link>
                                        </div>
                                    </div>
</div>
                            </div>

                            {activeDropdown !== null && navItems[activeDropdown]?.subItems.length > 0 && (
                                <div 
                                    className="dropdown-wrapper"
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`dropdown-content active`}>
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                                            <div className="flex">
                                                <div className="w-64">
                                                    {navItems[activeDropdown].subItems.map((category, idx) => (
                                                        <Link key={category.category} href={category.href || '#'}>
                                                            <div 
                                                                className={`flex items-center px-4 py-1 cursor-pointer ${
                                                                    activeCategory === idx ? 'text-white' : 'text-gray-300'
                                                                }`} 
                                                                onMouseEnter={() => handleCategoryHover(idx)}
                                                            >
                                                                <span className={`text-[20px] leading-[28px] font-[700] font-[Helvetica] text-white whitespace-nowrap `}>
                                                                    {category.category}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="flex-1 pl-8">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-flow-col md:auto-cols-fr">
                                                        {activeCategory !== null && 
                                                            navItems[activeDropdown].subItems[activeCategory]?.items?.map((item, index) => {
                                                                const columnClass = index < 8 ? 'md:col-start-1' : 'md:col-start-2';
                                                                return (
                                                                    <Link 
                                                                        key={item.name} 
                                                                        href={item.href} 
                                                                        className={`flex items-center group ${columnClass}`}
                                                                    >
                                                                        <span className={`text-[14px] leading-[22px] font-[400] font-[Helvetica] text-white whitespace-nowrap `}>
                                                                            {item.name}
                                                                        </span>
                                                                    </Link>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
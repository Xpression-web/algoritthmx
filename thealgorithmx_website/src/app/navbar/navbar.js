'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/link';
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
            href: '/creative-assets',
            subItems: [
                { category: 'Branding', href: '/android' },
                { category: 'Graphics', href: '/android' },
                { category: 'Video', href: '/android' },
                { category: 'Content Creation', href: '/android' },
            ]
        },
        {
            name: '</Code>',
            href: '/code',
            subItems: [
                {
                    category: 'App/Mobile',
                    icon: '',
                    items: [
                        { name: 'Android Development', href: '/android', icon: '/icons/android.svg' },
                        { name: 'iPhone/iPad Development', href: '/ios', icon: '/icons/ios.svg' },
                        { name: 'Xamarin Development', href: '/xamarin', icon: '/icons/xamarin.svg' },
                        { name: 'Flutter Development', href: '/flutter', icon: '/icons/flutter.svg' },
                        { name: 'React Native Development', href: '/react-native', icon: '/icons/react.svg' }
                    ]
                },
                {
                    category: 'Web',
                    icon: '',
                    items: [
                        { name: 'Front end', href: '/android', icon: '/icons/android.svg' },
                        { name: 'Back end', href: '/ios', icon: '/icons/ios.svg' }
                    ]
                },
                {
                    category: 'CMS Development',
                    icon: '',
                    items: [
                        { name: 'Shopify', href: '/android', icon: '/icons/android.svg' },
                        { name: 'Magento', href: '/ios', icon: '/icons/ios.svg' },
                        { name: 'Wordpress', href: '/xamarin', icon: '/icons/xamarin.svg' },
                        { name: 'HubSpot', href: '/flutter', icon: '/icons/flutter.svg' },
                        { name: 'Big Commerce', href: '/react-native', icon: '/icons/react.svg' },
                        { name: 'Drupal', href: '/react-native', icon: '/icons/react.svg' }
                    ]
                },
                { category: 'CRM', href: '/android' },
                { category: 'ERP', href: '/android' },
                { category: 'Blockchain', href: '/android' },
                { category: 'Software', href: '/android' },
            ]
        },
        {
            name: 'Leads & Revenue',
            href: '/code',
            subItems: [
                {
                    category: 'SEO',
                    icon: '',
                    items: [
                        { name: 'seo audit', href: '/android', icon: '/icons/android.svg' },
                        { name: 'local seo', href: '/ios', icon: '/icons/ios.svg' },
                        { name: 'ecommerce seo', href: '/xamarin', icon: '/icons/xamarin.svg' },
                        { name: 'seo', href: '/flutter', icon: '/icons/flutter.svg' },
                    ]
                },
                {
                    category: 'Social Media',
                    icon: '',
                    items: [
                        { name: 'Faceboook', href: '/android', icon: '/icons/android.svg' },
                        { name: 'Instagram', href: '/ios', icon: '/icons/ios.svg' },
                        { name: 'Linkedin', href: '/ios', icon: '/icons/ios.svg' },
                        { name: 'Twitter', href: '/ios', icon: '/icons/ios.svg' },
                    ]
                },
                {
                    category: 'PPC Advertising',
                    icon: '',
                    items: [
                        { name: 'Google ads', href: '/android', icon: '/icons/android.svg' },
                        { name: 'Bing ads', href: '/ios', icon: '/icons/ios.svg' },
                        { name: 'Twitter ads', href: '/xamarin', icon: '/icons/xamarin.svg' },
                        { name: 'Facebook ads', href: '/flutter', icon: '/icons/flutter.svg' },
                        { name: 'Instagram ads', href: '/react-native', icon: '/icons/react.svg' },
                    ]
                },
                {
                    category: 'Content ',
                    icon: '',
                    items: [
                        { name: 'Content Creation', href: '/android', icon: '/icons/android.svg' },
                        { name: 'Copy writing', href: '/ios', icon: '/icons/ios.svg' },
                    ]
                },
                { category: 'App Store', href: '/android' },
                { category: 'Conversion Rate', href: '/app-store' },
                { category: 'Public Relations', href: '/app-store' },
                { category: 'Franchise', href: '/app-store' },
                { category: 'Influencer', href: '/app-store' },
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
                    .blur-sm {
                        filter: blur(4px);
                    }
                    
                    .navbar-transparent {
                        background-color: transparent;
                        backdrop-filter: blur(8px);
                    }
                    
                    .navbar-scrolled {
                        background-color: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(10px);
                    }
                    
                    .dropdown-overlay {
                        background-color: rgba(0, 0, 0, 0.9);
                        backdrop-filter: blur(8px);
                    }
                }

                /* Updated Mobile styles to white background */
                @media (max-width: 767px) {
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
                /* Add these new styles for dropdown positioning */
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
                                    <Link href="tel:+1234567890" className="flex items-center pr-8 pl-6 py-3 rounded-full bg-black text-white border border-gray-600 hover:border-gray-400 transition">
                                        <span className={`text-[14px] leading-[22px] font-[400] font-[Helvetica] text-white whitespace-nowrap mr-6`}>Connect</span>
                                        <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                                            <div className="bg-blue-500 p-2.5 rounded-full">
                                                <Phone size={20} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Link href="https://twitter.com" target="_blank" className="text-white hover:text-gray-200">
                                        <Twitter size={20} />
                                    </Link>
                                    <Link href="https://instagram.com" target="_blank" className="text-white hover:text-gray-200">
                                        <Instagram size={20} />
                                    </Link>
                                    <Link href="https://facebook.com" target="_blank" className="text-white hover:text-gray-200">
                                        <Facebook size={20} />
                                    </Link>
                                    <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-gray-200">
                                        <Linkedin size={20} />
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
                                            <div 
                                                className="flex items-center justify-between py-3 text-black cursor-pointer"
                                                onClick={() => item.subItems.length > 0 ? toggleMobileSubmenu(index) : null}
                                            >
                                                <span className={`text-[20px] leading-[28px] font-[400] font-[Helvetica] text-black whitespace-nowrap `}>{item.name}</span>
                                                {item.subItems.length > 0 && (
                                                    <ChevronDown 
                                                        className={`transform transition-transform ${mobileSubmenuOpen === index ? 'rotate-180' : ''}`} 
                                                        size={20} 
                                                    />
                                                )}
                                            </div>
                                            
                                            {item.subItems.length > 0 && (
                                                <div className={`mobile-submenu ${mobileSubmenuOpen === index ? 'open' : ''}`}>
                                                    {item.subItems.map((category, categoryIndex) => (
                                                        <div key={category.category} className="pl-4">
                                                            <div 
                                                                className="flex items-center justify-between py-2 text-gray-600 cursor-pointer"
                                                                onClick={() => toggleMobileCategory(categoryIndex)}
                                                            >
                                                                <span>{category.category}</span>
                                                                {category.items && (
                                                                    <ChevronRight 
                                                                        className={`transform transition-transform ${mobileCategoryOpen === categoryIndex ? 'rotate-90' : ''}`} 
                                                                        size={18} 
                                                                    />
                                                                )}
                                                            </div>
                                                            
                                                            {category.items && (
                                                                <div className={`mobile-submenu ${mobileCategoryOpen === categoryIndex ? 'open' : ''}`}>
                                                                    {category.items.map((subItem) => (
                                                                        <Link 
                                                                            key={subItem.name} 
                                                                            href={subItem.href}
                                                                            className={` block py-2 pl-2 text-[14px] leading-[22px] font-[300] font-[Helvetica] text-black whitespace-nowrap `}
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
                                                                className={`flex items-center px-4 py-2 cursor-pointer ${
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
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {activeCategory !== null && 
                                                            navItems[activeDropdown].subItems[activeCategory]?.items?.map((item, index) => {
                                                                const columnClass = index < 8 ? 'md:col-start-1' : 'md:col-start-2';
                                                                return (
                                                                    <Link 
                                                                        key={item.name} 
                                                                        href={item.href} 
                                                                        className={`flex items-center group ${columnClass}`}
                                                                    >
                                                                        <img 
                                                                            src={item.icon} 
                                                                            alt={item.name} 
                                                                            className="w-4 h-4 mr-5" 
                                                                        />
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
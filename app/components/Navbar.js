
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/24/outline'; 

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500 text-white py-4">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo or brand name */}
                        <div>
                            <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <span className="font-bold">Playground</span>
                            </Link>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/decode-jwt" className="py-2 px-3 hover:bg-blue-700 rounded">
                                Decode JWT
                            </Link>
                            <Link href="/decode-saml" className="py-2 px-3 hover:bg-blue-700 rounded">
                                Decode SAML
                            </Link>
                            <Link href="/decode-base64" className="py-2 px-3 hover:bg-blue-700 rounded">
                                Decode Base64
                            </Link>
                            <Link href="/encode-base64" className="py-2 px-3 hover:bg-blue-700 rounded">
                                Encode Base64
                            </Link>
                            <Link href="/decode-url" className="py-2 px-3 hover:bg-blue-700 rounded">
                                URL Decoding
                            </Link>
                            <Link href="/encode-url" className="py-2 px-3 hover:bg-blue-700 rounded">
                                URL Encoding
                            </Link>
                            <Link href="/generate-keys" className="py-2 px-3 hover:bg-blue-700 rounded">
                                Generate Public & Private Key
                            </Link>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    {/* <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div> */}
                </div>
            </div>
            {/* Mobile Menu */}
            {/* <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <Link href="/decode-jwt" className="block py-2 px-4 text-sm hover:bg-blue-700">
                    Decode JWT
                </Link>
                <Link href="/decode-saml" className="block py-2 px-4 text-sm hover:bg-blue-700">
                    Decode SAML
                </Link>
                <Link href="/decode-base64" className="block py-2 px-4 text-sm hover:bg-blue-700">
                    Decode Base64
                </Link>
                <Link href="/encode-base64" className="block py-2 px-4 text-sm hover:bg-blue-700">
                    Encode Base64
                </Link>
            </div> */}
        </nav>
    );
};

export default Navbar;

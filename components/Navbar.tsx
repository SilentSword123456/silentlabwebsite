'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

function Navbar(){
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <Link
                className={`nav-button ${pathname === '/' ? 'active' : ''}`}
                href="/"
            >Home</Link>
            <Link
                className={`nav-button ${pathname === '/projects' ? 'active' : ''}`}
                href="/projects"
            >What I'm proud of</Link>
            <Link
                className={`nav-button ${pathname === '/contact' ? 'active' : ''}`}
                href="/contact"
            >Contact</Link>
        </nav>
    )
}

export default Navbar;
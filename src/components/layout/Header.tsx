"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'INÍCIO' },
  { href: '/contato', label: 'CONTATO' },
  { href: '/sobre', label: 'SOBRE' },
];

const socialLinks = [
  { href: 'https://instagram.com/frentecapacitacao', label: 'Instagram', Icon: Instagram },
  { href: 'https://linkedin.com', label: 'LinkedIn', Icon: Linkedin },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-background py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Socials, Logo, and Button/Menu */}
        <div className="flex items-center justify-between">
          
          {/* Social Media Icons (Left) - Hidden on small screens */}
          <div className="hidden sm:flex items-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Logo (Center) */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center text-4xl sm:text-5xl font-extrabold tracking-widest text-foreground">
              <Image 
                src="/logo.png"
                alt="FCP Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <span>FCP</span>
            </Link>
          </div>

          {/* CTA Button (Right) - Hidden on small screens */}
          <div className="hidden sm:flex justify-self-end">
            <Button asChild className="font-bold bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contato">INSCREVA-SE</Link>
            </Button>
          </div>

          {/* Hamburger Menu (for small screens) */}
          <div className="sm:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>
        </div>

        {/* Navigation Links - Centered on larger screens */}
        <nav className="hidden sm:flex items-center justify-center gap-6 md:gap-8 pt-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`
                  text-sm font-semibold tracking-wider transition-colors
                  hover:text-foreground
                  ${isActive ? 'text-foreground underline underline-offset-4' : 'text-muted-foreground'}
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu - Collapsible */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map(({ href, label }) => {
                 const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      text-lg font-semibold tracking-wider transition-colors
                      hover:text-foreground
                      ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
               <Button asChild className="mt-4 font-bold bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  <Link href="/contato" onClick={() => setIsMenuOpen(false)}>INSCREVA-SE</Link>
               </Button>
               <div className="flex items-center gap-4 mt-2">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
); }
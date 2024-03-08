"use client"

import React,{useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { AlignRight } from 'lucide-react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbarPadding, setNavbarPadding] = useState("py-4");
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarPadding("py-2");        
      }
      else {
        setNavbarPadding("py-4");
      }
      if (window.scrollY > 0) {
        setNavbarBg("bg-black");
      }
      else {
        setNavbarBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed w-full top-0 ${navbarBg} text-white z-50 transition-all duration-300 ease-in-out`}>
        <div className={`container ${navbarPadding} flex flex-row items-center justify-between transition-all duration-300 ease-in-out`}>
          <h1 className='text-3xl font-bold tracking-tight'>SR</h1>
          <div className="hidden lg:flex flex-row items-center gap-6">
            <Link className='uppercase text-sm' href={''}>home</Link>
            <Link className='uppercase text-sm' href={''}>about us</Link>
            <Link className='uppercase text-sm' href={''}>services</Link>
            <Link className='uppercase text-sm' href={''}>portfolio</Link>
            <Link className='uppercase text-sm' href={''}>news</Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className='cursor-pointer lg:hidden'>
              {showMenu ? (
                <X onClick={handleShowMenu}/>

              ) : (
                <AlignRight onClick={handleShowMenu}/>
              )}
            </div>
            <Button className='hidden lg:block' variant="default">book us</Button>
            </div>
        </div>
        
        {
          showMenu ? 
          (
            <div className="absolute top-full left-0 w-full py-6 bg-black/95 h-screen">
          <div className="container">
            <div className="flex flex-col items-start gap-6">
              <Link className='uppercase text-sm' href={''}>home</Link>
              <Link className='uppercase text-sm' href={''}>about us</Link>
              <Link className='uppercase text-sm' href={''}>services</Link>
              <Link className='uppercase text-sm' href={''}>crew</Link>
              <Link className='uppercase text-sm' href={''}>events</Link>
              <Link className='uppercase text-sm' href={''}>news</Link>
            </div>
          </div>
        </div>
          ) : null
        }
      </div>
    </>
  )
}

export default Navbar
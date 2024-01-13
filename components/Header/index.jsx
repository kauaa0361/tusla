import React, { useState,useEffect } from 'react'
import Link from 'next/link';
import { scrollNextPage } from './scroll';
import Image from 'next/image';
import { Globe, Question, UserCircle } from 'phosphor-react';

export function Header(){

  const [height, setHeight] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    useEffect(() => {
      const handleScroll = () => {
        const newScrollPosition = window.scrollY;
        setScrollPosition(newScrollPosition);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  let Links =[
    {name:"Vehicle",page:1},
    {name:"energy",page:2},
    {name:"Charging",page:3},
    {name:"Discover",page:4},
    {name:"Shop",page:5},
    ]
    
  let [open,setOpen]=useState(false);
    
  return (
    <header className={`fixed w-full h-[56px] backdrop-blur-sm ${scrollPosition === 0 ?"text-black":"text-gray-50"} z-10 px-4
     items-center justify-between py-4 lg:py-0 lg:flex lg:px-10`}>

    <section className="flex justify-between">
      
    <Link href="/" className='flex px-4 cursor-pointer'>
      <Image src="/tusla.svg" height={900} width={130} alt="logo Tusla"/>
    </Link>

    <button className='lg:hidden px-4 py-1 rounded-sm backdrop-blur-lg bg-slate-700/10 '>
      <span>Menu</span>
    </button>

    </section>

    {/* <div onClick={()=>setOpen(!open)} className='absolute cursor-pointer right-8 top-4 md:hidden duration-1000'>
    {open?<ArrowDownLeft size={32} />:<List size={32} />}
    </div> */}
    <ul className={`w-full z-[-1] left-0 pb-12 
    lg:flex lg:items-center lg:static lg:z-auto lg:w-auto lg:pb-0 lg:pl-0 ${open ? 'top-15 ':'hidden'} transition-all duration-1000 ease-in`}>
    {
      Links.map((link)=>(
        <li key={link.name} className='shadow-md text-center text-md font-semibold my-1 py-5 
        lg:shadow-none lg:ml-8 lg:my-0'>
          <button onClick={()=>{scrollNextPage(height, link.page)}} className=' hover:text-sky-500 hover:scale-125 duration-500'>{link.name}</button>
        </li>
      ))
    }
    </ul>

    <div className='hidden lg:flex lg:justify-evenly lg:w-20'>
      <Link href="/">
        <Question size={20} color="#171717" />
      </Link>
      <Globe size={20} color="#171717" />
      <UserCircle size={20} color="#171717" />
    </div>
    </header> 
  )
}

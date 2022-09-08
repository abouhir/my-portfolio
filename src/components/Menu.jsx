import React, { useRef } from 'react';
import BackIcon from '../icons/BackIcon';
import CompetenceIcon from '../icons/CompetenceIcon';
import ExperienceIcon from '../icons/ExperienceIcon';
import GraduationIcon from '../icons/GraduationIcon';
import HomeIcon from '../icons/HomeIcon';
import ContactIcon from '../icons/ContactIcon';
import { Outlet, NavLink } from "react-router-dom"
import MyName from './MyName';
import DarkIcon from '../icons/DarkIcon';


const Menu = ({ iconColor }) => {
    const iconBack = useRef();
    const iconNext = useRef();
    const menu = useRef();
    const parent = useRef();
    const parentChild = useRef();
    const hiddeMenu = () => {
        menu.current.classList.toggle('w-0');
        menu.current.classList.toggle('hidden');
        menu.current.classList.toggle('md:inline');
        parent.current.classList.toggle("grid-cols-[80px_1fr]");
        parent.current.classList.toggle("grid-cols-[1fr]");
        iconNext.current.classList.toggle('hidden');
        parentChild.current.classList.toggle('ml-4');

    }

    const darkMode = ()=>{
        const element = document.getElementsByTagName('html');

       
        console.log( element[0].classList.toggle('dark'));
    }
    return (
        <div className=' grid grid-cols-[80px_1fr] w-full h-full relative md:inline' ref={parent}>
            <div className='hidden md:hidden  w-fit bg-white rounded-full absolute top-8 left-0  cursor-pointer rotate-180 z-20' ref={iconNext} onClick={() => { hiddeMenu() }}>
                <BackIcon iconBack={iconBack} />
            </div>
          
                <nav className=' h-screen  bg-white dark:bg-black dark:border-white border-r-threed border-r-2  relative md:fixed  md:top-0  nav-md-style z-20   ' ref={menu}      >

                    <div className='md:hidden w-fit bg-white dark:bg-black  rounded-full absolute top-8 left-3/4  cursor-pointer' onClick={() => { hiddeMenu() }}>
                        <BackIcon iconBack={iconBack} />
                    </div>
                    <ul className='list-none parent-md-style '>
                        <li className='hidden md:inline-block   '>
                            <MyName />
                        </li>
                        <div className='inline w-fit md:flex md:space-x-5 lg:space-x-7  '>
                            <li className='mt-28 md:mt-0  ' >
                                <NavLink to={"/"} className={({ isActive }) => isActive ? 'selected-item' : 'menu-mobile'} >
                                    <span className='md:hidden'>   <HomeIcon  /></span>
                                    <span className='hidden text-link-md  '>Accueil</span>
                                </NavLink>

                            </li>
                            <li className='mt-8 md:mt-0 menu-mobile'>
                                <NavLink to="/competences" className={({ isActive }) => isActive ? 'selected-item' : 'menu-mobile'}>
                                    <span className='md:hidden'> <CompetenceIcon /></span>
                                    <span className='hidden text-link-md '>Competences</span>
                                </NavLink>
                            </li>
                            <li className=' mt-8 md:mt-0 menu-mobile '>
                                <NavLink to="/formations" className={({ isActive }) => isActive ? 'selected-item' : 'menu-mobile'}>
                                    <span className='md:hidden'>   <GraduationIcon /></span>
                                    <span className='hidden text-link-md '>Formations</span>
                                </NavLink>
                            </li>
                            <li className="mt-8 md:mt-0 menu-mobile">
                                <NavLink to="/experiences" className={({ isActive }) => isActive ? 'selected-item' : 'menu-mobile'}>
                                    <span className='md:hidden'>   <ExperienceIcon /></span>
                                    <span className='hidden text-link-md '>Experiences</span>
                                </NavLink>
                            </li>
                            <li className="mt-8 md:mt-0 menu-mobile">
                                <NavLink to="/contacts" className={({ isActive }) => isActive ? 'selected-item' : 'menu-mobile'}>
                                    <span className='md:hidden'> <ContactIcon /></span>
                                    <span className='hidden text-link-md '>Contacts</span>
                                </NavLink>
                            </li>

                            <li className="mt-8 md:mt-0 menu-mobile ">
                                <div onClick={()=>{darkMode()}} className='w-fit fill-black dark:fill-white '>
                                    <DarkIcon />
                                </div>
                              
                            </li>
                        </div>
                    </ul>

                </nav>
            
            <div className='z-0 h-full' ref={parentChild}>
                <Outlet />
            </div>

        </div>
    );
}

export default Menu;

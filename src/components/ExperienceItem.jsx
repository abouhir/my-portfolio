import React from 'react';
import { useRef } from 'react';
import BootstrapIcon from '../icons/BootstrapIcon';
import CalanderIcon from '../icons/CalanderIcon';
import CssIcon from '../icons/CssIcon';
import HtmlIcon from '../icons/HtmlIcon';
import JavaIcon from '../icons/JavaIcon';
import JavascriptIcon from '../icons/JavascriptIcon';
import LaravelIcon from '../icons/LaravelIcon';
import MapIcon from '../icons/MapIcon';
import MobileAppIcon from '../icons/MobileAppIcon';
import MysqlIcon from '../icons/MysqlIcon';
import PhpIcon from '../icons/PhpIcon';
import ProjectIcon from '../icons/ProjectIcon';
import Python from '../icons/Python';
import ReactIcon from '../icons/ReactIcon';
import ReactNativeIcon from '../icons/ReactNativeIcon';
import StageIcon from '../icons/StageIcon';
import VerifierIcon from '../icons/VerifierIcon';
import WebAppIcon from '../icons/WebAppIcon';

const ExperienceItem = ({ type, map, date, app, objective, tasks, technologies }) => {
    const elements = useRef();

   

    return (
        <div className='w-[280px] lg:w-[350px]   md:relative md:text-ellipsis md:overflow-hidden   bg-gradient-to-b  from-primary via-via to-secondary rounded-3xl  flex flex-col justify-center  items-start duration-1000 p-3 space-y-4 relative' ref={elements}>
            <div className='w-[200px] lg:w-[250px]   absolute animate-stage '>
                {type.toLowerCase() === 'stage' ? <StageIcon /> : <ProjectIcon />}
            </div>

            <div className='self-center z-10'>
                <h2 className='font-k2d font-bold text-purpel text-xl lg:text-2xl capitalize'>{type}</h2>
            </div>
            <div className='w-full flex items-start space-x-3  z-10 '>
                <div className='animate-bounce'>
                    <MapIcon w={"30"} h={"30"} />
                </div>
                <p className=' font-poppins text-sm lg:text-lg text-justify capitalize '>{map}</p>
            </div>

            <div className='flex items-center space-x-3  z-10 '>

                <CalanderIcon w={"30"} h={"30"} />

                <p className=' font-poppins text-sm lg:text-lg text-justify capitalize '>{date}</p>
            </div>

            <div className='w-full flex items-start space-x-3  z-10 '>

                {app.toLowerCase() === 'mobile' ? <MobileAppIcon w={"30"} h={"30"} /> : <WebAppIcon cls={objective==='Gestion Cabinet Dentaire' && 'w-7'} />}

                <p className=' font-poppins text-sm lg:text-lg text-justify capitalize '>{objective}</p>
            </div>
            {
                tasks.map((task) => {
                    return (
                        <div key={Math.random() * 100} className='flex items-start space-x-3 z-10'>
                            <div className='w-10 '>
                                <VerifierIcon w={"30"} h={"30"} />
                            </div>
                            <p className=' font-poppins text-sm lg:text-lg text-justify capitalize '>{task}</p>
                        </div>)
                })

            }


            <div className='self-center w-full flex flex-row justify-center  flex-wrap space-x-1 '>

                {
                    technologies.map((tech) => {
                        switch (tech) {
                            case 'php': return <PhpIcon key={Math.random()*100} cls={"w-6 lg:w-8"} />
                            case 'java': return <JavaIcon cls={"w-6 lg:w-8"} />
                            case 'python': return <Python cls={"w-6 lg:w-8"} />
                            case 'mysql': return <MysqlIcon cls={"w-6 lg:w-8"} />
                            case 'javascript': return <JavascriptIcon cls={"w-6 lg:w-8"} />
                            case 'react': return <ReactIcon cls={"w-6 lg:w-8"} />
                            case 'html': return <HtmlIcon cls={"w-6 lg:w-8"} />
                            case 'css': return <CssIcon cls={"w-6 lg:w-8"} />
                            case 'laravel': return <LaravelIcon cls={"w-6 lg:w-8"} />
                            case 'bootstrap': return <BootstrapIcon cls={"w-6 lg:w-8"} />
                            case 'reactnative': return <ReactNativeIcon cls={"w-6 lg:w-8"} />
                        }
                    })
                }

            </div>
           
        </div>
    );
}

export default ExperienceItem;

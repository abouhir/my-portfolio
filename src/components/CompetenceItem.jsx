import React from 'react'
import BootstrapIcon from '../icons/BootstrapIcon'
import CssIcon from '../icons/CssIcon'
import HtmlIcon from '../icons/HtmlIcon'
import JavascriptIcon from '../icons/JavascriptIcon'
import LaravelIcon from '../icons/LaravelIcon'
import MysqlIcon from '../icons/MysqlIcon'
import PhpIcon from '../icons/PhpIcon'
import ReactIcon from '../icons/ReactIcon'
import ReactNativeIcon from '../icons/ReactNativeIcon'
import CompetenceTitle from './CompetenceTitle'
import FigmaIcon from '../icons/FigmaIcon'
import OracleIcon from '../icons/OracleIcon'
import JavaIcon from '../icons/JavaIcon'
export default function CompetenceItem({icon , title , technologies}) {
  return (
    <div className=' relative flex flex-col md:flex-row md:justify-center md:animate-competence-content md:w-[70%] md:h-[200px] md:rounded-xl md:mx-auto items-center space-y-5 md:space-y-0 md:border-l-primary md:border-t-primary md:border-r-secondary md:border-b-secondary md:border-2  ' >
                <div className='md:-rotate-90 md:absolute -left-9 '>
                    <CompetenceTitle Icon={icon} title={title} />
                </div>
                <div className='flex justify-center flex-wrap space-x-3 relative'>
                    {
                
                    technologies.map((tech )=>{
                        switch(tech){
                            case 'php' : return  <PhpIcon key={Math.random()*100} cls="w-14 lg:w-20" /> 
                            case 'java' : return  <JavaIcon key={Math.random()*100}  cls="w-14 lg:w-20" /> 
                            case 'mysql' : return  <MysqlIcon key={Math.random()*100} cls="w-14 lg:w-20" /> 
                            case 'oracle' : return <OracleIcon key={Math.random()*100}n cls="w-14 lg:w-20" />
                            case 'javascript' : return <JavascriptIcon key={Math.random()*100}  cls="w-14 lg:w-20" /> 
                            case 'react' : return <ReactIcon key={Math.random()*100} cls="w-14 lg:w-20" />  
                            case 'html' : return <HtmlIcon key={Math.random()*100} cls="w-14 lg:w-20" />  
                            case 'css' : return <CssIcon key={Math.random()*100} cls="w-14 lg:w-20" /> 
                            case 'laravel' : return <LaravelIcon key={Math.random()*100} cls="w-14 lg:w-20" />
                            case 'bootstrap' : return <BootstrapIcon key={Math.random()*100} cls="w-14 lg:w-20" />
                            case 'reactnative' : return <ReactNativeIcon key={Math.random()*100} cls="w-14 lg:w-20" /> 
                            case 'figma' : return <FigmaIcon key={Math.random()*100} cls="w-14 lg:w-20" /> 
                        }

                    })}

                </div>
            </div>
  )
}

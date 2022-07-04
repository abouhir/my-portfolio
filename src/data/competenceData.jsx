import BackEndIcon from "../icons/BackEndIcon";
import FrontEnd from "../icons/FrontEnd"
import SgbdIcon from "../icons/SgbdIcon";

import UiUxIcon from "../icons/UiUxIcon";
export const getCompetenceData = ()=>{
  const  competences = [
    {
        title : 'Front-end' , 
        icon : <FrontEnd cls={"w-8 lg:w-10"} /> ,
        technologies : [
            'html' ,
            'css' , 
            'bootstrap' ,
            'javascript' , 
            'react' ,
            'reactnative' ,
            'tailwind'
        ]
    } , 
    {
        title : 'Back-End' , 
        icon : <BackEndIcon cls={"w-8 lg:w-10"} /> ,
        technologies : [
            'php' ,
            'laravel' ,
            'java'
        ]
    } ,
     {
        title : 'S G B D R' , 
        icon : <SgbdIcon cls={"w-8 lg:w-10"} /> ,
        technologies : [
            'mysql' ,
            'oracle' ,
            
        ]
    } ,
    {
        title : 'U I / U X ' , 
        icon : <UiUxIcon cls={"w-8 lg:w-10"} /> ,
        technologies : [
            'figma'
            
        ]
    }
    
  ]

  return competences;

  
}
import BackEndIcon from "../icons/BackEndIcon";
import FrontEnd from "../icons/FrontEnd"
import SgbdIcon from "../icons/SgbdIcon";

import UiUxIcon from "../icons/UiUxIcon";
export const getCompetenceData = ()=>{
  const  competences = [
    {
        title : 'Front-end' , 
        icon : <FrontEnd  /> ,
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
        icon : <BackEndIcon  /> ,
        technologies : [
            'php' ,
            'laravel' ,
            'java'
        ]
    } ,
     {
        title : 'S G B D R' , 
        icon : <SgbdIcon  /> ,
        technologies : [
            'mysql' ,
            'oracle' ,
            
        ]
    } ,
    {
        title : 'U I / U X ' , 
        icon : <UiUxIcon  /> ,
        technologies : [
            'figma'
            
        ]
    }
    
  ]

  return competences;

  
}
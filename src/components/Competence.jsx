import React from 'react'
import { getCompetenceData } from '../data/competenceData'
import CompetenceItem from './CompetenceItem'

import MyName from './MyName'

export default function Competence() {
    const competences = getCompetenceData();


    const getCompetenceItems = ()=>{
       return competences.map((competence)=>{
           return  <CompetenceItem key={Math.random()*100} icon={competence.icon} title={competence.title} technologies={competence.technologies} />
        })
    }
    return (
        <section className='col-span-1 my-9 md:my-[10%] lg:mt-[6%] md:w-full space-y-10 mb-5  '>
            <div className='md:hidden'>
                <MyName />
            </div>
        
         {getCompetenceItems()}
            
        </section>
    )
}

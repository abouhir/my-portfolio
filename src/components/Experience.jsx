import React from 'react'
import MyName from './MyName'
import ExperienceItem from './ExperienceItem'
import { getCompetenceData } from '../data/experienceData';

export default function Experience() {
 const experiences = getCompetenceData();

  const experienceItems = () => {
    return (
      experiences.map((experience) =>

        <ExperienceItem 
          key={Math.random() * 100}
          type={experience.type}
          map={experience.map}
          date={experience.date}
          objective={experience.objective}
          tasks={experience.tasks}
          app={experience.app}
          technologies={experience.technologies} />

      )
    )
  }
  return (
    <section className=' sm:col-span-1 my-9  md:mt-[8%] space-y-5 mb-8  '>
      <div className='md:hidden'>
        <MyName />
      </div>
      <div className='h-full  flex flex-col justify-around md:flex-row   md:flex-wrap items-center  space-y-5'>

        {
          experienceItems()
        }

      </div>
    </section>
  )
}

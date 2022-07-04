import React from 'react'
import MyName from './MyName'
import FormationItem from './FormationItem'
import {getFormations} from '../data/formationData'
export default function Formation() {
    const formations = getFormations();
    return (
        <section className='col-span-1 my-9  space-y-5  md:space-y-0 mb-5 w-full  md:min-h-screen md:flex md:justify-center    ' >
            <div className="md:hidden">
                <MyName />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-around md:flex-wrap  space-y-5 md:space-y-4 ">
                {
                    formations.map((formation)=><FormationItem key={Math.random()*100} diplome={formation.diplome} ecole={formation.ecole} annee={formation.annee} filiere={formation.filiere} />  )
                }

            </div>
        </section>
    )
}

import React from 'react'
import CalanderIcon from '../icons/CalanderIcon'
import FiliereIcon from '../icons/FiliereIcon'
import Graduation from '../icons/Graduation'
import SchoolIcon from '../icons/SchoolIcon'

export default function FormationItem({ diplome, ecole, annee, filiere }) {
    return (
        <div className="parent-formation" >
            <div className="w-[70%]  self-center absolute" style={{perspective : "250px"}} >
                <Graduation />
            </div>
            <div className="self-center z-10 ">
                <h2 className="text-white text-xl lg:text-2xl font-k2d font-bold ">{diplome}</h2>
            </div>
            <div className="parent-p-formation">
                <div className='w-9 h-9'>
                    <SchoolIcon  />
               </div>

                <p className="p-formation w-full uppercase">{ecole}</p>
            </div>
            <div className="parent-p-formation">
            <div className='w-10 h-10'>
                    <CalanderIcon  />
                    </div>
                <p className="p-formation w-full">{annee} </p>
            </div>
            <div className="parent-p-formation">
            <div className='w-9 h-9'>
                <FiliereIcon  />
           </div>
                <p className="p-formation w-full">{filiere}</p>
            </div>
        </div>

    )
}

import React from 'react'
import EmailIcon from '../icons/EmailIcon';
import FacebookIcon from '../icons/FacebookIcon'
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon'
import WhatsappIcon from '../icons/WhatsappIcon';

export default function ContactItem({ name, compte ,url , color}) {

  const getCompte = () => {
    switch (compte) {
      case "linkedin": return <LinkedinIcon w={70} h={70} />;
      case "github": return <GithubIcon w={70} h={70} />;
      case "email": return <EmailIcon w={70} h={70} />;
      case "facebook": return <FacebookIcon w={70} h={70} />;
      case "whatsapp": return <WhatsappIcon w={70} h={70} />;
    }
  }

  return (
    <div className={'w-[280px] md:w-[350px]  h-32 flex  items-center justify-start  rounded-2xl p-1 space-x-2 ' +color}>
      {getCompte()}
      <div className='flex flex-col'>
        <a className='text-white underline decoration-3 text-lg font-k2d '  href={compte==="email" ? 'mailto:'+url : url} target="__blank"  >{name}</a>
       { compte==='github' && <span className='text-muted font-k2d font-bold'>abouhir</span> }
      </div>
    </div>
  )
}

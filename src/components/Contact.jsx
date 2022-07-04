import React from 'react'
import { getContacts } from '../data/contactData'
import ContactItem from './ContactItem'
import MyName from './MyName'

export default function Contact() {
  const contacts = getContacts();
  const getContactItems = ()=>{
    return contacts.map((contact)=>
      <ContactItem key={Math.random()*100} name={contact.name} compte={contact.compte} url={contact.url} color={contact.color} />
    )
  }
  return (
   <section className='col-span-1 md:min-h-screen my-9 md:mt-0  flex flex-col md:flex-row md:justify-around md:flex-wrap items-center space-y-5 '  >
      <div className='self-start md:hidden'>
        <MyName />
      </div>
        {getContactItems()}
   </section>
  )
}

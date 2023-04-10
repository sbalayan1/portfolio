import React from 'react'
import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5 } from 'react-icons/si'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'


export default function Links() {
    // const skills = [<SiJavascript className="text-yellow-500 bg-black"/>, <SiTypescript className="text-blue-700 bg-black"/>, <SiReact className="bg-black text-blue-500"/>, <SiRubyonrails className='bg-red-500'/>, <SiPython className="bg-blue-500"/>, <SiPostgresql className="bg-blue-300"/>, <SiHtml5 className="bg-orange-400" /> ]
    // const skillsToDisplay = skills.map((skill, idx) => ({id: idx+1, component: skill}))

    const socialLinks = [<FaGithub className="text-black" size={40}/> , <FaLinkedin className="bg-white" size={40}/>, <HiOutlineMail size={40}/>]
    const socialsToDisplay = socialLinks.map((scl, idx) => (
        <li 
            className="
                flex justify-evenly items-center h-14 w-40 px-4 bg-yellow-500
                ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300
            "
            key={idx+1}>
            <a
                className=""
                href=""
            >
                {scl}  
            </a>
        </li>
    ))
    
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul className="flex">
                {socialsToDisplay}
            </ul>
        </div>
    )   
}
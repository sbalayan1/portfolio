import React from 'react'
// import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5 } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Links() {
    // const skills = [<SiJavascript className="text-yellow-500 bg-black"/>, <SiTypescript className="text-blue-700 bg-black"/>, <SiReact className="bg-black text-blue-500"/>, <SiRubyonrails className='bg-red-500'/>, <SiPython className="bg-blue-500"/>, <SiPostgresql className="bg-blue-300"/>, <SiHtml5 className="bg-orange-400" /> ]
    // const skillsToDisplay = skills.map((skill, idx) => ({id: idx+1, component: skill}))
    const httpLinks = ["https://www.github.com/sbalayan1/", "https://www.linkedin.com/in/sean-balayan/", "mailto:balayans2014@gmail.com", "/Resume_seanbalayan.pdf"]
    const socialLinks = [
        <FaGithub className="text-black" size={40}/> , 
        <FaLinkedin className="bg-white" size={40}/>, 
        <HiOutlineMail className="text-gray-400" size={40}/>,
        <BsFillPersonLinesFill className="text-gray-700" size={40}/>
    ]
    const socialsToDisplay = socialLinks.map((scl, idx) => (
        <li 
            className="
                flex justify-center items-center h-14 w-40 px-4 
                hover:scale-150 hover:rounded-xl duration-200
            "
            key={idx+1}
        >
            <a
                className=""
                href={`${httpLinks[idx]}`}
            >
                {scl}  
            </a>
        </li>
    ))
    
    return (
        <div 
            className='
                w-screen flex flex-col items-center bottom-0 fixed
            '
            >
            <ul 
                className="
                    w-3/4 flex justify-center
                "
            >
                {socialsToDisplay}
            </ul>
        </div>
    )   
}
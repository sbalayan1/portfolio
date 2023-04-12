import React, { useState } from 'react'
// import { SiJavascript, SiTypescript, SiReact, SiRubyonrails, SiPython, SiPostgresql, SiHtml5 } from 'react-icons/si'
import { FaGithub, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsLinkedin } from 'react-icons/bs'

export default function Links() {
    // const skills = [<SiJavascript className="text-yellow-500 bg-black"/>, <SiTypescript className="text-blue-700 bg-black"/>, <SiReact className="bg-black text-blue-500"/>, <SiRubyonrails className='bg-red-500'/>, <SiPython className="bg-blue-500"/>, <SiPostgresql className="bg-blue-300"/>, <SiHtml5 className="bg-orange-400" /> ]
    // const skillsToDisplay = skills.map((skill, idx) => ({id: idx+1, component: skill}))
    const [showLinksBar, setShowLinksBar] = useState(true)

    const httpLinks = ["https://www.github.com/sbalayan1/", "https://www.linkedin.com/in/sean-balayan/", "mailto:balayans2014@gmail.com", "/Resume_seanbalayan.pdf"]
    const socialLinks = [
        <FaGithub className="text-black" size={40}/> , 
        <BsLinkedin className="bg-white" size={40}/>, 
        <HiOutlineMail className="text-gray-700" size={40}/>,
        <BsFillPersonLinesFill className="text-gray-700" size={40}/>
    ]
    const socialsToDisplay = socialLinks.map((scl, idx) => (
        <li 
            className="
                flex justify-center items-center h-14 w-40 px-4 
                hover:scale-125 hover:rounded-xl duration-200
            "
            key={idx+1}
        >
            <a
                className=""
                href={`${httpLinks[idx]}`}
                download={idx===3 ? true : false}
                target="_blank"
                rel="noreferrer"
            >
                {scl}  
            </a>
        </li>
    ))
    
    return (
        <>
            {showLinksBar === true ? 
                <div 
                    className='
                        w-screen flex flex-col items-center bottom-0 fixed
                    '
                    >
                    <ul 
                        className="
                            w-full flex justify-center bg-gray-300 rounded-sm
                            lg:w-1/4
                        "
                    >
                        {socialsToDisplay}
                        <div
                            className="
                            "
                        >
                            <FaTimes 
                                className="
                                    text-gray-300 hover:text-red-500 hover:scale-125 duration-200
                                "
                                size={20}
                                onClick={() => setShowLinksBar(!showLinksBar)}
                            />
                        </div>
                    </ul>
                </div>
            : 
                null
            }
        </>
    )   
}
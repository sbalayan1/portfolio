import React, { useState } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsLinkedin } from 'react-icons/bs'

export default function Links() {
    const [showLinksBar, setShowLinksBar] = useState(true)

    const httpLinks = ["https://www.github.com/sbalayan1/", "https://www.linkedin.com/in/sean-balayan/", "mailto:balayans2014@gmail.com", "/Resume_seanbalayan.pdf"]
    const socialLinks = [
        <FaGithub className="text-black" size={40}/> , 
        <BsLinkedin className="text-blue-800" size={40}/>, 
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
                    className='w-screen flex flex-col items-center bottom-0 fixed'
                    >
                    <ul 
                        className="
                            w-full flex justify-center bg-gray-300 rounded-md
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
                                    text-gray-400 hover:text-red-500 hover:scale-125 duration-200
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
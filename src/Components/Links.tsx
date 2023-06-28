import React, { useState } from 'react'
import { FaGithub, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill, BsLinkedin } from 'react-icons/bs'

export default function Links() {
    const httpLinks = ["https://www.github.com/sbalayan1/", "https://www.linkedin.com/in/sean-balayan/", "mailto:balayans2014@gmail.com", "/Resume_seanbalayan.pdf"]
    const socialLinks = [
        <FaGithub className="animate-pulse rounded-md text-black"/> , 
        <BsLinkedin className="animate-pulse rounded-md text-blue-800"/>, 
        <HiOutlineMail className="bg-lapisLazul animate-pulse rounded-md text-gray-700"/>,
        <BsFillPersonLinesFill className="bg-lapisLazul animate-pulse rounded-md text-gray-700"/>
    ]
    const socialsToDisplay = socialLinks.map((scl, idx) => (
        <li className='mr-2 hover:scale-110 hover:rounded-xl duration-200' key={idx+1}>
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
        <ul className="w-full flex justify-between mt-2">
            {socialsToDisplay}
        </ul>
    )   
}
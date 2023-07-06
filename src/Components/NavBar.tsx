import React, { useState } from 'react'
import {Link} from 'react-scroll'

import {FaBars, FaTimes} from 'react-icons/fa'

interface NavBarProps {
    dark: boolean
    handleDark(): void
}

export default function NavBar({dark, handleDark}: NavBarProps) {
    const [btnsOn, setBtnsOn] = useState(false)
    const homeBtns = ["Home", "About", "Portfolio", "Skills", "Contact" ].map((link, idx) => ({id: idx+1, link: link }))
    const btnsToDisplay = homeBtns.map(({id, link}) => (
        <li 
            key={id}
            className="px-5 text-sm cursor-pointer capitalize hover:scale-110 duration-200"
        >
            <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >
                {link}
            </Link>
        </li>
    ))

    const displayNavBtns = () => {setBtnsOn(btnsOn => !btnsOn)}

    return (
        <div className='flex justify-between items-center w-full h-20 fixed p-4 mb-1 text-sm md:text-2xl bg-oxfordBlue border-b'>
            <h2 className="cursor-pointer hover:scale-110 duration-200
            text-sm md:text-2xl md:ml-4">
                <Link
                    activeClass='active'
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                >
                sean_balayan.io
                </Link>
            </h2>
            <div className="flex">
                <ul className="hidden items-center lg:flex">
                    {btnsToDisplay}
                </ul>
                <div className="cursor-pointer hover:scale-110 duration-200 z-10 lg:hidden" onClick={displayNavBtns}>
                    {btnsOn ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {btnsOn &&
                <ul className='flex flex-col justify-evenly items-center absolute top-0 left-0 w-full h-screen text-sm bg-oxfordBlue lg:hidden'>
                    {/* below display the nav button links when mobile*/}
                    {homeBtns.map(({id, link}) => (
                        <li key={id} onClick={displayNavBtns}   className="px-5 cursor-pointer capitalize hover:scale-110 duration-200"
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-82}
                                duration={600}
                                onClick={displayNavBtns}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </div>

    )
}
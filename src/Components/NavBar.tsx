import React, { useState } from 'react'
import {MdDarkMode, MdOutlineDarkMode} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'

// import {Link} from 'react-dpom'
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
            onClick={() => {}} 
            className="px-5 cursor-pointer capitalize hover:scale-110 duration-200"
        >
            {/* <a href='#{link}'>{link}</a> */}
            {link}
        </li>
    ))

    const displayNavBtns = () => {setBtnsOn(btnsOn => !btnsOn)}

    return (
        <div className={`
                flex justify-between items-center w-full h-20 fixed px-4 text-2xl mb-10 ${dark ? "bg-white text-blue-950" : "bg-blue-900 text-white"}
                sm:text-md
                md:text-4xl
                `
            }
        >
            <h2 className="
                    ml-4 cursor-pointer hover:scale-110 duration-200
                "
            >
                sean_balayan.io
            </h2>
            <div className="flex">
                <ul className="
                        hidden items-center text-xl
                        md:flex
                    "
                >
                    {btnsToDisplay}
                </ul>
                <div className="mr-2 hover:scale-110 duration-200" onClick={handleDark}>
                    {dark ? <MdDarkMode /> : <MdOutlineDarkMode/>}
                </div>
                <div className="px-4 cursor-pointer hover:scale-110 duration-200 z-10 md:hidden" onClick={displayNavBtns}>
                    {btnsOn ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {btnsOn &&
                <ul className={`
                        flex flex-col justify-evenly items-center absolute top-0 left-0 w-full h-screen p
                         text-4xl
                        ${dark ? "bg-gradient-to-b from-blue-100 to-blue-950" : "bg-gradient-to-b from-blue-900 to-blue-200 "}
                        md:hidden
                    `} 
                >
                    {/* below display the nav button links when the screen is small */}
                    {homeBtns.map(({id, link}) => (
                        <li
                            key={id}
                            onClick={() => {}} 
                            className="
                                px-5 cursor-pointer capitalize hover:scale-110 duration-200
                            "
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            }
        </div>

    )
}
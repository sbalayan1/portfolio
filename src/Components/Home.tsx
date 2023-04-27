import React from 'react'
import {Link} from 'react-scroll'

interface HomeProps {
    dark: boolean
    handleDark(): void
}
export default function Home({dark, handleDark}: HomeProps) {
    
    return (
        // h-screen
        <div id="Home"className="w-full flex flex-col justify-center mt-16 md:h-screen md:mt-0 md:flex md:items-center">
            <div className="max-w-screen-lg flex flex-col items-center justify-center px-4
                    md:flex-row md:h-1/2
                    lg:h-full
                "
            >
                <div className="flex flex-col justify-center h-full mt-8 md:p-4">
                    <h2 className={`${dark ? "text-white" : null} text-4xl font-bold sm:text-7xl`}>
                        Full Stack Software Engineer
                    </h2>
                    <p 
                        className={`
                            ${dark ? "text-gray-400" : "text-gray-600"} 
                            py-4 
                            text-xl
                            sm:text-4xl
                            md:text-2xl
                            lg:text-3xl
                            xl:text-4xl
                        `}>
                            I build applications using JavaScript, React, TailwindCSS, and Ruby on Rails.
                        </p>
                    <div 
                        className="
                            my-2 text-2xl
                            md:text-4xl
                        ">
                        <button 
                            
                            className={`
                                ${dark ? "bg-blue-950" : "bg-gradient-to-br from-blue-800 to-blue-400"}
                                ${dark ? "text-white" : "text-white"}
                                border-2 rounded-lg px-6 py-2 md:py-3
                                hover:scale-125 hover:bg-white hover:text-blue-950 duration-200 cursor-pointer 
                            `}
                            type="button"
                        >
                            <Link 
                                activeClass="active"
                                to="Portfolio"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="h-1/4 w-screen flex items-center justify-center my-2 md:w-full md:ml-4">
                        <a className="w-full lg:w-5/6" href="Resume_seanbalayan.pdf">
                            <img 
                                className={`
                                    w-full hover:scale-110 hover:blur-sm duration-200 cursor-pointer
                                    sm:rounded-full
                                `}
                                src={require("../Assets/1547704960267.jpg")} alt="my profile"
                            />
                        </a>
                </div>
            </div>
        </div>
    )
}